const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");


describe("Inventory page", function () {

  //test1: 
  it("", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    

    //close browser
    await driver.quit();
  });
});

























