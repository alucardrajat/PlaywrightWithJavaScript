import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").click();
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
});

test("test2", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginusername").press("Tab");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("#loginpassword").press("Tab");
  await page.getByLabel("Log in").getByText("Close").press("Tab");
  await page.getByRole("button", { name: "Log in" }).press("Enter");
  await expect(
    page.getByRole("link", { name: "Welcome pavanol" })
  ).toBeVisible();
});

////demo comments to push

