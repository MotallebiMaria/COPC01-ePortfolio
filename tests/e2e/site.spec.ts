import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 360, height: 740 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1600, height: 1000 },
];

for (const viewport of viewports) {
  test(`homepage is responsive at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Work across systems");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}

test("archive filters remain keyboard-operable", async ({ page }) => {
  await page.goto("./archive/");
  await page.getByRole("button", { name: "Research" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#visible-count")).toHaveText("1");
  await expect(page.getByRole("link", { name: /Oral Examinations in CS/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /CodeClash Platform/ })).toBeHidden();
});

test("navigation and generated archive links resolve", async ({ page, request }) => {
  await page.goto("./archive/");
  const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
  const internal = [...new Set(hrefs.filter((href) => href.startsWith("http://127.0.0.1:4321/")))];
  for (const href of internal) {
    const response = await request.get(href);
    expect(response.status(), href).toBe(200);
  }
});

test("mobile navigation exposes all primary destinations", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("./");
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link")).toHaveCount(4);
});

test("core pages have no serious accessibility violations", async ({ page }) => {
  for (const route of ["./", "./archive/", "./archive/knowledge-retrieval-prototype/", "./about/", "./resume/"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    expect(results.violations, `${route}: ${results.violations.map((issue) => issue.id).join(", ")}`).toEqual([]);
  }
});

test("reduced motion leaves content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");
  await expect(page.locator(".reveal").first()).toHaveCSS("opacity", "1");
});
