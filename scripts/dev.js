// Local dev: build once, then serve dist/ with live rebuild on request.
import { execSync } from "node:child_process";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function build() {
  execSync("node scripts/build.js && npx tailwindcss -i src/styles/main.css -o dist/assets/css/main.css", {
    cwd: root,
    stdio: "inherit",
  });
}

build();

const app = express();
app.use(express.static(path.join(root, "dist")));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Dev server running at http://localhost:${port}`));
