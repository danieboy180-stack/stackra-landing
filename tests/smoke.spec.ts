import { test, expect } from "@playwright/test";

test("home, product and pricing routes are reachable", async ({ page }) => {
  for (const path of ["/", "/product", "/pricing", "/about", "/contact", "/privacy", "/terms"]) {
    const response = await page.goto(path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("theme toggle and mobile navigation are interactive", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("link", { name: "Product", exact: true }).last()).toBeVisible();
});
