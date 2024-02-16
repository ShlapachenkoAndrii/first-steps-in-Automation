const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test1: to check that user can login with 'standard user'
  it("login with standard user", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input valid Username and Pass
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");

    //click Login button
    await driver.findElement(By.id("login-button")).click();

    //----Assertions----

    //--Assert1: URL after logging in is changed
    const EXPECTED_URL = "https://www.saucedemo.com/inventory.html";
    const ACTUAL_URL = await driver.getCurrentUrl();
    assert.strictEqual(ACTUAL_URL, EXPECTED_URL);

    //close browser
    await driver.quit();
  });
});

























