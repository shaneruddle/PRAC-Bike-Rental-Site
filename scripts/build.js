// Minimal static site builder for Pattaya Rent a Bike.
// Renders src/templates/pages/home.ejs inside layout.ejs to dist/index.html.
import ejs from "ejs";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, fleet, faqs, reviews } from "../src/data/site.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

async function build() {
  await fs.emptyDir(distDir);

  const pageBody = await ejs.renderFile(
    path.join(root, "src/templates/pages/home.ejs"),
    { site, fleet, faqs, reviews },
    { root: path.join(root, "src/templates") }
  );

  const html = await ejs.renderFile(
    path.join(root, "src/templates/layout.ejs"),
    {
      site,
      title: "Premium Scooter & Motorbike Rentals",
      description:
        "Trusted motorbike and scooter rental in Pattaya since 2010. Yamaha, Honda fleet, full insurance, 24/7 support. Book online or via WhatsApp.",
      body: pageBody,
    },
    { root: path.join(root, "src/templates") }
  );

  await fs.outputFile(path.join(distDir, "index.html"), html);

  console.log("Build complete: dist/index.html");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
