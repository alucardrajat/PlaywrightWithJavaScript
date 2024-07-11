import { test, expect } from "@playwright/test";

test("Locating all links", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.waitForSelector("//a");
  const links = await page.$$("//a");

  for (let link of links) {
    let linkText = await link.textContent();
    console.log(linkText);
  }
});

test("locating all products", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.waitForSelector("//h4[@class='card-title']");
  const products = await page.$$("//h4[@class='card-title']");

  for (let prod of products) {
    let prodName = await prod.textContent();
    console.log(prodName);
  }
});
