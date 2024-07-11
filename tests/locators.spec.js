//const {test, expect} = require('@playwright/test');
import { test, expect } from "@playwright/test";

test("Locaters", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  //click on login btn - property
  // await page.locator("id=login2").click();
  await page.click("id=login2");

  // provide usename using css
  // await page.locator("#loginusername").fill("pavanol");
  await page.fill("#loginusername", "pavanol");
  // await page.type('#loginusername', 'pavanol')

  // provide pass using property
  await page.locator("id=loginpassword").fill("test@123");

  // click on login btn
  await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]");

  // verify logout btn present
  const logoutBtn = await page.locator("//a[@id='logout2']");

  await expect(logoutBtn).toBeVisible();

  await page.close();
});
