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

    //start timer to capture the load time of a page after log in
    const startTime = new Date().getTime();

    //click Login button
    await driver.findElement(By.id("login-button")).click();


    //----Assertions----

    //--Assert1: page load time after login is <2 secs

    //wait till page is loaded, capture time, calculate load time
    await driver.wait(until.elementLocated(By.css('body')));
    const endTime = new Date().getTime();
    const pageLoadTime = endTime - startTime;

    //assert that page loads faster than 2 secs
    if (pageLoadTime <= 2000) {
    } else {
      throw new Error('Page took longer than 2 seconds to load.');
    }


    //--Assert2: URL after logging in is changed
    const EXPECTED_URL_AFTER_LOGIN = "https://www.saucedemo.com/inventory.html";
    const ACTUAL_URL_AFTER_LOGIN = await driver.getCurrentUrl();
    assert.strictEqual(ACTUAL_URL_AFTER_LOGIN, EXPECTED_URL_AFTER_LOGIN);


    //close browser
    await driver.quit();
  });
});

























