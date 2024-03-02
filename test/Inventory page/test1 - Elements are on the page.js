const { Builder, By, until, Button } = require("selenium-webdriver");
const assert = require("assert");


describe("Inventory page", function () {

  //test1: check that elements are on the page
  it("elements are on the page", async function () {
    // ----Execution Steps----
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to app
    await driver.get("https://www.saucedemo.com/");

    // input Username and Pass and click Login
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    //----Assertions----
    //--Assert1: Header 'Swag Labs' is on the page
    const EXPECTED_HEADER_TEXT = 'Swag Labs';
    const ACTUAL_HEADER_TEXT = await driver.findElement(By.className("header_label")).getText();
    assert.strictEqual(ACTUAL_HEADER_TEXT, EXPECTED_HEADER_TEXT);

    //--Assert2: Invetory list with inventory items is on the page
    const INVENTORY_LIST = await driver.findElement(By.className("inventory_list"));
    const INVENTORY_ITEM = await driver.findElement(By.className("inventory_item"));
    assert.ok(INVENTORY_LIST);
    assert.ok(INVENTORY_ITEM);


    //--Assert3: Price, image and Add to cart button exist for each list item on the page
    const ALL_INVENTORY_ITEMS = await driver.findElements(By.className("inventory_item"));
    for (const EACH_INVENTORY_ITEM of ALL_INVENTORY_ITEMS){
      const CHILD_PRICE = await EACH_INVENTORY_ITEM.findElement(By.className("inventory_item_price"))
      const CHILD_IMAGE = await EACH_INVENTORY_ITEM.findElement(By.className("inventory_item_img"))
      const CHILD_ADD_TO_CART = await EACH_INVENTORY_ITEM.findElement(By.css('button'));

      assert.ok(CHILD_PRICE.isDisplayed());
      assert.ok(CHILD_IMAGE.isDisplayed());
      assert.ok(CHILD_ADD_TO_CART.isDisplayed());
    };


    //--Assert4: Burger menu icon is on the page
    const BURGER_MENU = await driver.findElement(By.className("bm-burger-button"));
    assert.ok(BURGER_MENU);

    //--Assert5: Social icons are on the page
    const SOCIAL_TWITTER = await driver.findElement(By.className("social_twitter"));
    const SOCIAL_FACEBOOK = await driver.findElement(By.className("social_facebook"));
    const SOCIAL_LINKEDIN = await driver.findElement(By.className("social_linkedin"));
    assert.ok(SOCIAL_TWITTER.isDisplayed());
    assert.ok(SOCIAL_FACEBOOK.isDisplayed());
    assert.ok(SOCIAL_LINKEDIN.isDisplayed());

    //--Assert6: Shopping cart element is on the page
    const CART_ELEMENT = await driver.findElement(By.className("shopping_cart_link"));
    assert.ok(CART_ELEMENT.isDisplayed());

    //--Assert7: Sorting element is on the page
    const SORTING_ELEMENT = await driver.findElement(By.className("product_sort_container"));
    assert.ok(SORTING_ELEMENT.isDisplayed());

    //--Assert8: Footer copy text is on the page
    const EXPECTED_FOOTER_TEXT = '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy';
    const ACTUAL_FOOTER_TEXT = await driver.findElement(By.className("footer_copy")).getText();
    assert.strictEqual(ACTUAL_FOOTER_TEXT, EXPECTED_FOOTER_TEXT);

    //close browser
    await driver.quit();
  });
});


// https://www.saucedemo.com/inventory.html






















