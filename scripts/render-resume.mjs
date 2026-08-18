import { chromium } from "@playwright/test";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const url = "http://127.0.0.1:4321/COPC01-ePortfolio/resume/";
const build = spawnSync("npm", ["run", "build"], { cwd: root, stdio: "inherit" });
if (build.status !== 0) throw new Error("Portfolio build failed before résumé rendering.");
const server = spawn("npm", ["run", "serve:dist"], { cwd: root, stdio: "inherit" });

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  throw new Error("Astro development server did not start in time.");
}

try {
  await waitForServer();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.pdf({
    path: resolve(root, "public/maria-motallebi-resume.pdf"),
    format: "Letter",
    printBackground: true,
    margin: { top: "0.45in", right: "0.55in", bottom: "0.45in", left: "0.55in" },
  });
  await browser.close();
} finally {
  server.kill("SIGTERM");
}
