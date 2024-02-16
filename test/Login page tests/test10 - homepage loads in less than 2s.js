const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Login page tests", function () {

  //test10: to check that homepage loads in less than 2 secs
  it("homepage loads in less than 2sec", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //start timer to capture the load time 
    const startTime = new Date().getTime();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    //----Assertions----
    //--Assert1: homepage load time is <2 sec

    //wait till page is loaded, capture time, calculate load time
    await driver.wait(until.elementLocated(By.css('body')));
    const endTime = new Date().getTime();
    const pageLoadTime = endTime - startTime;

    //assert that page loads faster than 2 secs
    if (pageLoadTime <= 2000) {
    } else {
      throw new Error('Page took longer than 2 seconds to load.');
    }
    
    //close browser
    await driver.quit();
  });
});

























