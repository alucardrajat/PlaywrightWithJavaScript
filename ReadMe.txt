Playwright.dev

App Supportaed = Web Browser apps, mobile browser apps, API's 
Browsers = Chromoium ( opera, Chrome, Edge ), Webkit & Firefox ( headed / headless )
Language Supportaed = JS, TypeScript, Java, Python & .Net (C#)
OS Supportaed = Windows, MacOS, Linux, Support CI Runs

Features Playwright
--------
Free & Opne Source
Multi browser, Multi Language
Easy setup & configuration 
Functional, API, Accessibility testing 
Built-in reportrs, custom reportrs
CI, CD, Docker
Parallel testing 
Auto wait
Built in assertions
Multi tab & multi window Support
Frames, Shadow dom
Test parameter
Emulate mobile devices
Faster ( than other automation tools )


Playwright Installation 
-----------------------

1) Node JS
2) VS Code Editor
3) Create project folder - in VS Code
4) install Playwright using terminal - npm init playwright@latest
    package,=.json -- node project managemnt files 
    playwright.config.js -- playwright configuration
    tests -- we can write all the playwright tests

    npm playwright -v -- version of playwright

5) install playwright with VS code extension 

    View - Command Palatte - install playwright

6) Run playwright test
    npx playwright test
    npx playwright test --headed 
    npx playwright show-report

    npx playwright test homepage.spec.js --headed
    npx playwright test homepage.spec.js --headed
    npx playwright test homepage.spec.js --project=Chromium 
    npx playwright test homepage.spec.js --project=Chromium --headed
    npx playwright test homepage.spec.js --project=Chromium --headed --debug

7) How to create and run playwright tests

    ----
    async -- not depend on pervious step 
    await -- auto wait ( run's 60 time ) 
    -----
    ------------
        const {test, expect} = require('@playwright/test');


        test('Home Page', async ({page})=>{
            await page.goto('https://demoblaze.com/');
        })


    -----
    const { test, expect } = require("@playwright/test");

    test("Home Page", async ({ page }) => {
        await page.goto("https://demoblaze.com/");

        const pageTitle = await page.title();
        console.log("page title is : ", pageTitle);

        await expect(page).toHaveTitle("STORE");

        const pageURL = await page.url();

        console.log("URL : ", pageURL);

        await expect(page).toHaveURL("https://demoblaze.com/");

        await page.close();
        });


    -------


8) Locating elements in playwright

    -----
    property
    css
    xpath
    ------

    locate single elements

    link
    ----
    await page.locator('locator').click()
    await page.click('locator')

    input 
    ----
    await page.locator('locator').fill('value')
    await page.locator('locator').type('value')
    await page.fill('locater', 'value')
    await page.type('locater', 'value')


    locate multiple web elements
    ---------------------------

    const elements = await page.$$(locator)

9) Built in locators

    page.getByRole() to locate by explicit and implicit accessibility attributes.
    page.getByText() to locate by text content.
    page.getByLabel() to locate a form control by associated label's text.
    page.getByPlaceholder() to locate an input by placeholder.
    page.getByAltText() to locate an element, usually image, by its text alternative.
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

10) Codegen

    npx playwright codegen
    npx playwright codegen -o tests/codegen.spec.js
    npx playwright codegen --target java

11) Assertions

    await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveTitle()	Page has a title
    await expect(locator).toBeVisible()	Element is visible
    await expect(locator).toBeEnabled()	Element is enabled
    await expect(locator).toBeDisabled()	Element is disabled
    await expect(locator).toBeChecked()	Checkbox is checked
    await expect(locator).toHaveAttribute()	Element has a DOM attribute
    await expect(locator).toHaveText()	Element matches text
    await expect(locator).toContainText()	Element contains text
    await expect(locator).toHaveValue(value)	Input has a value
    await expect(locator).toHaveCount()	List has exact number of children

    -Ve assertions
    -----
    await expect(page).not.toHaveURL()	Page not has a URL
    await expect(locator).not.toHaveCount()	List not has exact number of children