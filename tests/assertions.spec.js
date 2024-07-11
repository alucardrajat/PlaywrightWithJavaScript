const { test, expect } = require("@playwright/test");

test("Assertion test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  // toHaveURL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // toHaveTitle
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // toBeVisible
  const logo = await page.locator("//div[@class='header-logo']");
  await expect(logo).toBeVisible();

  // toBeEnable
  const searchBox = await page.locator("//input[@id='small-searchterms']");
  await expect(searchBox).toBeEnabled();

  // toHaveText
  await expect(await page.locator("//div[@class='page-title']//h1")).toHaveText(
    "Register"
  );

  // toContainText
  await expect(page.locator("//label[@for='FirstName']")).toContainText("name");

  // toHaveValue

  const email = await page.locator(
    "//div[@class='inputs']//input[@type='email']"
  );
  await email.fill("test@ex.com");
  await expect(email).toHaveValue("test@ex.com");

  // toHaveCount
  const options = await page.locator(
    "//select[@name='DateOfBirthYear']//option"
  );
  await expect(options).toHaveCount(112);

  // not toHaveCount
  const option = await page.locator(
    "//select[@name='DateOfBirthMonth']//option"
  );
  await expect(option).not.toHaveCount(14);
});
