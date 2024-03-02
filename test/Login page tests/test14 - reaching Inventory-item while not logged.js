const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test11: to check that error is displayed when user tries to reach /inventory-item endpoint while not logged in
  it("navigate to Inventory-item while not logged in", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to /inventory endpoint
    await driver.get("https://www.saucedemo.com/inventory-item.html/");

    //----Assertions----

    //--Assert1: URL after logging in is changed
    const EXPECTED_ERROR = "Epic sadface: You can only access '/inventory-item.html/' when you are logged in.";
    const ACTUAL_ERROR_TEXT = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert.strictEqual(ACTUAL_ERROR_TEXT, EXPECTED_ERROR);

    //close browser
    await driver.quit();
  });
});

























