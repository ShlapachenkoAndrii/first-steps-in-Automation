const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe ('Login page tests', function (){
  const tests =[
    {userName:"standard_user"},
    {userName:"problem_user"},
    {userName:"performance_glitch_user"},
    {userName:"error_user"},
    {userName:"visual_user"}
  ];

  tests.forEach(({userName}) => {
    it(`Succsess parametrized login with ${userName} login`, async function (){
      let driver = await new Builder().forBrowser("chrome").build();
      await driver.get("https://www.saucedemo.com/");
      await driver.findElement(By.id("user-name")).sendKeys(userName);
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");
      await driver.findElement(By.id("login-button")).click();
      const EXPECTED_URL = "https://www.saucedemo.com/inventory.html";
      const ACTUAL_URL = await driver.getCurrentUrl();
      assert.strictEqual(ACTUAL_URL, EXPECTED_URL);
      await driver.quit();
    })
  })

});




















