const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe ('Login page tests', function (){

  //set of user logins
  const tests =[
    {userName:"standard_user"},
    {userName:"problem_user"},
    {userName:"performance_glitch_user"},
    {userName:"error_user"},
    {userName:"visual_user"}
  ];

  // forEach userName value a separate test will run.
  tests.forEach(({userName}) => {
    it(`Succsess parametrized login with ${userName} login`, async function (){

      //run browser chrome
      let driver = await new Builder().forBrowser("chrome").build();

      //navigate to website
      await driver.get("https://www.saucedemo.com/");

      //find and input to username and pass fields
      await driver.findElement(By.id("user-name")).sendKeys(userName);
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");

      //click login button
      await driver.findElement(By.id("login-button")).click();

      //assertion to compare expected url after login and actual
      const EXPECTED_URL = "https://www.saucedemo.com/inventory.html";
      const ACTUAL_URL = await driver.getCurrentUrl();
      assert.strictEqual(ACTUAL_URL, EXPECTED_URL);

      //close the browser
      await driver.quit();
    })
  })

});




















