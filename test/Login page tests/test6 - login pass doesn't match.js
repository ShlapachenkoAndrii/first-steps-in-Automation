const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test6: to check that error is displayed when pass doesn't match username
  it("login with pass doesn't match username", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input existing Username and non-existent Pass
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("non-existent pass");

    //click Login button
    await driver.findElement(By.id("login-button")).click();


    //----Assertions----

    //--Assert1: Error is displayed with text "Epic sadface: Username and password do not match any user in this service"
    const EXPECTED_ERROR = "Epic sadface: Username and password do not match any user in this service";
    const ACTUAL_ERROR = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert.strictEqual(ACTUAL_ERROR, EXPECTED_ERROR);

    //close browser
    await driver.quit();
  });
});

























