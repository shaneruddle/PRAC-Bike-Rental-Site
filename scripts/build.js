// Minimal static site builder for Pattaya Rent a Bike.
// Renders src/templates/pages/home.ejs inside layout.ejs to dist/index.html.
// Also renders bike-model pages + a comparison guide (English + Thai), and
// copies static SEO/GEO files (robots.txt, llms.txt) and generates sitemap.xml.
import ejs from "ejs";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, fleet, faqs, reviews } from "../src/data/site.js";
import { bikeSlugs, bikePages, uiLabels, comparisonGuide, monthlyRentalPage } from "../src/data/bikePages.js";

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
    templateData,
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

async function build() {
  await fs.emptyDir(distDir);

  // Copy static SEO/GEO files (robots.txt, llms.txt) as-is.
  if (await fs.pathExists(publicDir)) {
    await fs.copy(publicDir, distDir);
  }

  // Homepage.
  await renderPage({
    templateFile: "home.ejs",
    templateData: { site, fleet, faqs, reviews },
    title: "Motorbike & Scooter Rental in Pattaya",
    description:
      "Trusted motorbike and scooter rental in Pattaya since 2009. Yamaha, Honda fleet, full insurance, friendly support. Book online or via WhatsApp.",
    urlPath: "/",
    lang: "en",
    priority: "1.0",
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
      description: page.en.description,
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

  // Generate sitemap.xml with a fresh lastmod on every build.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>
`;
  await fs.outputFile(path.join(distDir, "sitemap.xml"), sitemap);

  console.log(`Build complete: ${sitemapUrls.length} pages, dist/sitemap.xml, dist/robots.txt, dist/llms.txt`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
