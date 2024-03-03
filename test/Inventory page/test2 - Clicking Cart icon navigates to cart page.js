const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Inventory page", function () {
  let driver;

  //---precondition steps---
  beforeEach(async function () {
    // launch browser
    driver = await new Builder().forBrowser("chrome").build();

    // navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input valid Username and Pass
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  
    // click Login button
    await driver.findElement(By.id("login-button")).click();
  });

  

  it("clicking cart icon navigates to cart page", async function () {
   
    //---Execution steps---
    //find and click cart icon
    driver.findElement(By.className("shopping_cart_link")).click();

    //----Assertions----
    //--Assert1: cart page is opened
    const EXPECTED_URL = "https://www.saucedemo.com/cart.html";
    await driver.wait(until.urlIs(EXPECTED_URL), 5000, 'Timeout: URL did not change');
    const ACTUAL_URL = await driver.getCurrentUrl();
    assert.strictEqual(ACTUAL_URL, EXPECTED_URL);
    
    await driver.quit();
  });
});

























