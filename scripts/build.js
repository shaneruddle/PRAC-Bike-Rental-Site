// Minimal static site builder for Pattaya Rent a Bike.
// Renders src/templates/pages/home.ejs inside layout.ejs to dist/index.html.
// Also renders bike-model pages + a comparison guide (English + Thai), and
// copies static SEO/GEO files (robots.txt, llms.txt) and generates sitemap.xml.
import ejs from "ejs";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, fleet as baseFleet, faqs, reviews } from "../src/data/site.js";
import { fetchPrices } from "./prices.js";
import { homeCopy } from "../src/data/homeCopy.js";
import { licenceGuide, jomtienPage } from "../src/data/guides.js";
import { bikeSlugs, bikePages, uiLabels, comparisonGuide, monthlyRentalPage, insuranceGuide } from "../src/data/bikePages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const publicDir = path.join(root, "src/public");
const templatesDir = path.join(root, "src/templates");

const today = new Date().toISOString().slice(0, 10);

// Cache-buster for CSS/JS asset URLs: firebase.json serves them with a 1-year
// Cache-Control, so each deploy must change the URL or returning visitors keep
// stale assets (broken styling) until the cache expires.
const buildId = Date.now().toString(36);

const sitemapUrls = [];

function addSitemapUrl(urlPath, priority) {
  sitemapUrls.push(`  <url>
    <loc>https://${site.domain}${urlPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
}

// Renders a page template inside layout.ejs and writes it to dist/<urlPath>/index.html
// (or dist/index.html when urlPath is "/"). Returns nothing; also registers the
// page in the sitemap.
async function renderPage({
  templateFile,
  templateData,
  title,
  description,
  urlPath,
  lang,
  altHref,
  altLang,
  priority,
}) {
  const pageBody = await ejs.renderFile(
    path.join(templatesDir, "pages", templateFile),
    { prices, ...templateData },
    { root: templatesDir }
  );

  const html = await ejs.renderFile(
    path.join(templatesDir, "layout.ejs"),
    {
      site,
      title,
      description,
      body: pageBody,
      buildId,
      path: urlPath,
      lang,
      altHref,
      altLang,
    },
    { root: templatesDir }
  );

  const outFile =
    urlPath === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, urlPath.replace(/^\//, "").replace(/\/$/, ""), "index.html");

  await fs.outputFile(outFile, html);
  addSitemapUrl(urlPath, priority);
}

const fmtDate = (isoDate) =>
  new Date(isoDate + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// Live prices from the pricing engine. PRICES_FIXTURE=<json file> lets a local build run
// without network access; otherwise a failed fetch just means no prices on the pages.
async function loadPrices() {
  const fixture = process.env.PRICES_FIXTURE;
  const raw = fixture ? JSON.parse(await fs.readFile(fixture, "utf8")) : await fetchPrices(baseFleet.map((b) => b.priceClass));
  if (!raw) {
    console.warn("Prices: pricing engine unavailable - building without prices");
    return null;
  }
  const validUntil = new Date(Date.parse(raw.asOf + "T00:00:00Z") + 7 * 86400000).toISOString().slice(0, 10);
  return { ...raw, validUntil, asOfLabel: fmtDate(raw.asOf), startLabel: fmtDate(raw.startDate) };
}

let prices = null;
let fleet = baseFleet;

async function build() {
  await fs.emptyDir(distDir);

  prices = await loadPrices();
  fleet = baseFleet.map((b) => ({ ...b, price: (prices && prices.byClass[b.priceClass]) || null }));
  const lowest = prices ? Math.min(...fleet.filter((b) => b.price).map((b) => b.price.from)) : null;
  if (prices) console.log(`Prices: ${JSON.stringify(prices.byClass)} (rentals from ${prices.startDate})`);

  // Copy static SEO/GEO files (robots.txt, llms.txt) as-is.
  if (await fs.pathExists(publicDir)) {
    await fs.copy(publicDir, distDir);
  }

  // Homepage (English + Thai).
  await renderPage({
    templateFile: "home.ejs",
    templateData: { site, fleet, faqs, reviews, t: homeCopy.en },
    title: homeCopy.en.meta.title,
    description: lowest ? homeCopy.en.meta.description.replace("Book online", `From \u0E3F${lowest}/day. Book online`) : homeCopy.en.meta.description,
    urlPath: "/",
    lang: "en",
    altHref: "/th/",
    altLang: "th",
    priority: "1.0",
  });

  await renderPage({
    templateFile: "home.ejs",
    templateData: { site, fleet, faqs: homeCopy.th.faqs, reviews, t: homeCopy.th },
    title: homeCopy.th.meta.title,
    description: homeCopy.th.meta.description,
    urlPath: "/th/",
    lang: "th",
    altHref: "/",
    altLang: "en",
    priority: "0.9",
  });

  // Bike-model pages (English + Thai).
  for (const slug of bikeSlugs) {
    const page = bikePages[slug];
    const bike = fleet[page.fleetIndex];

    const enPath = `/bikes/${slug}/`;
    const thPath = `/th/bikes/${slug}/`;

    await renderPage({
      templateFile: "bike-detail.ejs",
      templateData: {
        site,
        bike,
        content: page.en,
        ui: uiLabels.en,
        lang: "en",
        altPath: thPath,
        urlPath: enPath,
      },
      title: page.en.title,
      description: bike.price ? `${page.en.description} From \u0E3F${bike.price.from}/day.` : page.en.description,
      urlPath: enPath,
      lang: "en",
      altHref: thPath,
      altLang: "th",
      priority: "0.7",
    });

    await renderPage({
      templateFile: "bike-detail.ejs",
      templateData: {
        site,
        bike,
        content: page.th,
        ui: uiLabels.th,
        lang: "th",
        altPath: enPath,
        urlPath: thPath,
      },
      title: page.th.title,
      description: page.th.description,
      urlPath: thPath,
      lang: "th",
      altHref: enPath,
      altLang: "en",
      priority: "0.7",
    });
  }

  // Monthly rental landing page (English only - see bikePages.js comment).
  await renderPage({
    templateFile: "monthly-rental.ejs",
    templateData: { site, fleet, content: monthlyRentalPage },
    title: monthlyRentalPage.title,
    description: monthlyRentalPage.description,
    urlPath: "/monthly-rental/",
    lang: "en",
    priority: "0.7",
  });

  // Motorbike insurance guide (English only).
  await renderPage({
    templateFile: "insurance.ejs",
    templateData: { site, content: insuranceGuide },
    title: insuranceGuide.title,
    description: insuranceGuide.description,
    urlPath: `/guides/${insuranceGuide.slug}/`,
    lang: "en",
    priority: "0.6",
  });
  
  // Article pages: licence guide + Jomtien area page (English only).
  for (const [page, priority] of [[licenceGuide, "0.6"], [jomtienPage, "0.7"]]) {
    await renderPage({
      templateFile: "article.ejs",
      templateData: { site, content: page },
      title: page.title,
      description: page.description,
      urlPath: page.path,
      lang: "en",
      priority,
    });
  }

  // Comparison guide (English + Thai).
  const guideEnPath = `/guides/${comparisonGuide.slug}/`;
  const guideThPath = `/th/guides/${comparisonGuide.slug}/`;

  await renderPage({
    templateFile: "comparison.ejs",
    templateData: {
      site,
      content: comparisonGuide.en,
      ui: uiLabels.en,
      lang: "en",
      altPath: guideThPath,
      urlPath: guideEnPath,
    },
    title: comparisonGuide.en.title,
    description: comparisonGuide.en.description,
    urlPath: guideEnPath,
    lang: "en",
    altHref: guideThPath,
    altLang: "th",
    priority: "0.6",
  });

  await renderPage({
    templateFile: "comparison.ejs",
    templateData: {
      site,
      content: comparisonGuide.th,
      ui: uiLabels.th,
      lang: "th",
      altPath: guideEnPath,
      urlPath: guideThPath,
    },
    title: comparisonGuide.th.title,
    description: comparisonGuide.th.description,
    urlPath: guideThPath,
    lang: "th",
    altHref: guideEnPath,
    altLang: "en",
    priority: "0.6",
  });

  // Prices page (English only).
  await renderPage({
    templateFile: "prices.ejs",
    templateData: { site, fleet, faqs: pricesFaqs(lowest) },
    title: "Scooter & Motorbike Rental Prices in Pattaya",
    description: lowest
      ? `Current motorbike and scooter rental prices in Pattaya, from \u0E3F${lowest}/day. Daily, weekly and 30-day rates for Yamaha and Honda automatics, helmets and insurance included.`
      : "Motorbike and scooter rental prices in Pattaya. Daily, weekly and 30-day rates for Yamaha and Honda automatics, helmets and insurance included.",
    urlPath: "/prices/",
    lang: "en",
    priority: "0.8",
  });

  // llms.txt: replace the static pricing block with today's engine prices.
  if (prices) {
    const llmsPath = path.join(distDir, "llms.txt");
    const llms = await fs.readFile(llmsPath, "utf8");
    const lines = fleet.filter((b) => b.price).map((b) =>
      `- ${b.name} (${b.engine}, ${b.transmission}): ${[3, 7, 30].filter((d) => b.price[d]).map((d) => `${b.price[d]}/day for ${d} days`).join(", ")}`);
    const block = `## Fleet & Pricing (THB per day, rentals starting ${prices.startDate}, updated ${prices.asOf})\n${lines.join("\n")}\n\nPrices change with season and demand - search your dates at https://${site.domain}/ for an exact price. Rentals over 30 days are quoted individually. Full price list: https://${site.domain}/prices/`;
    const updated = llms.replace(/## Fleet & Pricing[\s\S]*?confirm exact price and availability at time of booking\./, block);
    if (updated === llms) console.warn("Prices: llms.txt pricing block not found - left unchanged");
    await fs.outputFile(llmsPath, updated);
  }

  // Generate sitemap.xml with a fresh lastmod on every build.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>
`;
  await fs.outputFile(path.join(distDir, "sitemap.xml"), sitemap);

  console.log(`Build complete: ${sitemapUrls.length} pages, dist/sitemap.xml, dist/robots.txt, dist/llms.txt`);
}

function pricesFaqs(lowest) {
  const gt = fleet.find((b) => b.slug === "yamaha-gt-125");
  const nmax = fleet.find((b) => b.slug === "yamaha-nmax");
  const priced = lowest && gt && gt.price && nmax && nmax.price;
  return [
    {
      q: "How much does it cost to rent a scooter in Pattaya?",
      a: priced
        ? `With us, prices currently start from \u0E3F${lowest} per day. A Yamaha GT 125 is \u0E3F${gt.price[3]} per day for a 3-day rental, and a Yamaha Nmax or Honda PCX is \u0E3F${nmax.price[3]} per day. Weekly and 30-day rentals cost less per day.`
        : "Prices change with the season and demand. Search your dates on our homepage for an instant price, or WhatsApp us for a quote.",
    },
    { q: "Is it cheaper to rent a scooter by the week or month?", a: "Yes. The per-day price drops for weekly rentals and again for 30-day rentals. Rentals longer than 30 days are quoted individually." },
    { q: "Are helmets and insurance included in the price?", a: "Yes. Every rental includes two helmets and the compulsory government insurance (Po Lo Bo), which covers basic medical costs. It doesn't cover damage to the bike." },
    { q: "Is there a deposit?", a: "Yes, a 1,000 baht cash deposit at pickup, refunded when you return the bike. We don't keep your passport." },
    { q: "Why might my price be different from this page?", a: "Prices are set by season and, for bookings in the next few days, by how many bikes are free. The price shown when you search your dates is the one you'll pay." },
  ];
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
