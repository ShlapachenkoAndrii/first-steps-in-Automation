const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test4: to check that error is displayed when password field is empty
  it("login with empty password", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input valid Username 
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");

    //click Login button
    await driver.findElement(By.id("login-button")).click();


    //----Assertions----

    //--Assert1: Error is displayed with text "Epic sadface: Password is required"
    const EXPECTED_ERROR = "Epic sadface: Password is required";
    const ACTUAL_ERROR = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert.strictEqual(ACTUAL_ERROR, EXPECTED_ERROR);

    //close browser
    await driver.quit();
  });
});

























