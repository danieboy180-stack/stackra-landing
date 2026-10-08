import { test } from "@playwright/test";

const sizes = [
  { width: 320, height: 900, label: "320" },
  { width: 375, height: 812, label: "375" },
  { width: 768, height: 900, label: "768" },
  { width: 1024, height: 900, label: "1024" },
  { width: 1440, height: 1000, label: "1440" },
  { width: 1920, height: 1100, label: "1920" },
  { width: 2560, height: 1200, label: "2560" }
];

test("capture home in both themes at required viewport sizes", async ({ page }, testInfo) => {
  for (const theme of ["light", "dark"] as const) {
    for (const size of sizes) {
      await page.setViewportSize({ width: size.width, height: size.height });
      await page.goto(`/?theme=${theme}`);
      await page.screenshot({ path: `test-results/screenshots/home-${theme}-${size.label}.png`, fullPage: true });
    }
  }
  void testInfo;
});
