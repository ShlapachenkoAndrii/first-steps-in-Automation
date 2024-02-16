const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test3: to check that error is displayed when username field is empty
  it("login with empty username", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input valid Pass
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");

    //click Login button
    await driver.findElement(By.id("login-button")).click();


    //----Assertions----

    //--Assert1: Error is displayed with text "Epic sadface: Username is required"
    const EXPECTED_ERROR = "Epic sadface: Username is required";
    const ACTUAL_ERROR_TEXT = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert.strictEqual(ACTUAL_ERROR_TEXT, EXPECTED_ERROR);

    //close browser
    await driver.quit();
  });
});

























