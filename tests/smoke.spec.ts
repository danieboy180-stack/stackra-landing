import { test, expect } from "@playwright/test";

test("home, product and pricing routes are reachable without page errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  for (const path of ["/", "/product", "/pricing", "/about", "/contact", "/privacy", "/terms"]) {
    const response = await page.goto(path, { waitUntil: "networkidle" });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1").first()).toBeVisible();
  }

  expect(errors).toEqual([]);
});

test("theme toggle and mobile navigation are interactive", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Theme" }).click();
  await page.getByRole("menuitemradio", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("link", { name: "Product", exact: true }).last().click();
});
