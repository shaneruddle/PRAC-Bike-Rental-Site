// Minimal static site builder for Pattaya Rent a Bike.
// Renders src/templates/pages/home.ejs inside layout.ejs to dist/index.html.
// Also copies static SEO/GEO files (robots.txt, llms.txt) and generates sitemap.xml.
import ejs from "ejs";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, fleet, faqs, reviews } from "../src/data/site.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const publicDir = path.join(root, "src/public");

// Typical daily rental price range across the fleet, for LocalBusiness.priceRange.
const dailyPrices = fleet.map((bike) => bike.daily);
const priceRange = `${Math.min(...dailyPrices)}-${Math.max(...dailyPrices)} THB/day`;

// Offers are considered valid for 90 days from build time, then need a fresh deploy to refresh.
const priceValidUntil = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const today = new Date().toISOString().slice(0, 10);

async function build() {
  await fs.emptyDir(distDir);

  // Copy static SEO/GEO files (robots.txt, llms.txt) as-is.
  if (await fs.pathExists(publicDir)) {
    await fs.copy(publicDir, distDir);
  }

  // Generate sitemap.xml with a fresh lastmod on every build.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${site.domain}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  await fs.outputFile(path.join(distDir, "sitemap.xml"), sitemap);

  const pageBody = await ejs.renderFile(
    path.join(root, "src/templates/pages/home.ejs"),
    { site, fleet, faqs, reviews, priceValidUntil },
    { root: path.join(root, "src/templates") }
  );

  const html = await ejs.renderFile(
    path.join(root, "src/templates/layout.ejs"),
    {
      site,
      title: "Premium Scooter & Motorbike Rentals",
      description:
        "Trusted motorbike and scooter rental in Pattaya since 2010. Yamaha, Honda fleet, full insurance, friendly support. Book online or via WhatsApp.",
      body: pageBody,
      priceRange,
    },
    { root: path.join(root, "src/templates") }
  );

  await fs.outputFile(path.join(distDir, "index.html"), html);

  console.log("Build complete: dist/index.html, dist/sitemap.xml, dist/robots.txt, dist/llms.txt");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
