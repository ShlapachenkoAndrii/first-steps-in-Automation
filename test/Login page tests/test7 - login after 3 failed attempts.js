const { Builder, By, until} = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test7: to check that user can login after 3 failed login attempts
  it("login after 3 failed login attempts", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input non-existent Username and existing Password 1st time
    let usernameField = driver.findElement(By.id("user-name"));
    let passwordField = driver.findElement(By.id("password"));
    await usernameField.sendKeys("standard_user1");
    await passwordField.sendKeys("secret_sauce");

    //click Login button
    let loginButton = driver.findElement(By.id("login-button"));
    await loginButton.click();

    //--Assert1: URL is not changed
    const EXPECTED_URL = "https://www.saucedemo.com/inventory.html";
    let actualUrl = await driver.getCurrentUrl();
    assert.notEqual(actualUrl, EXPECTED_URL);

    //clear username
    await usernameField.clear();
  
    // input non-existent Username 2d time
    await usernameField.sendKeys("standard_user2");
  

    //--Assert2: URL is not changed
    actualUrl = await driver.getCurrentUrl();
    assert.notEqual(actualUrl, EXPECTED_URL);

    //clear username
    await usernameField.clear();

    // input non-existent Username 3d time
    await usernameField.sendKeys("standard_user3");

    //--Assert3: URL is not changed
    actualUrl = await driver.getCurrentUrl();
    assert.notEqual(actualUrl, EXPECTED_URL);

    //clear username
    await usernameField.clear();

    // input existing Username 
    await usernameField.sendKeys("standard_user");

    //click Login button
    await loginButton.click();
    
    //--Assert3: URL is changed to https://www.saucedemo.com/inventory.html
    actualUrl = await driver.getCurrentUrl();
    assert.strictEqual(actualUrl, EXPECTED_URL);

    //close browser
    await driver.quit();
  });
});

























