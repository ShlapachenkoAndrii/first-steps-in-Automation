const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test8: check that username field is case sensitive
  it("username is case sensitive", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input Username and Pass
    await driver.findElement(By.id("user-name")).sendKeys("standard_useR");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");

    //click Login button
    await driver.findElement(By.id("login-button")).click();

    //----Assertions----

    //--Assert1: URL is not changed
    const EXPECTED_URL = "https://www.saucedemo.com/";
    const ACTUAL_URL = await driver.getCurrentUrl();
    assert.strictEqual(ACTUAL_URL, EXPECTED_URL);

    //close browser
    await driver.quit();
  });
});

























