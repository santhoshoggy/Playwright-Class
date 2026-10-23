import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/product';




test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
});
test.afterEach(async ({ page }) => {
  const productPage = new ProductPage(page);    
  await productPage.logout();
});
test.afterAll(async ({ page }) => {
  const productPage = new ProductPage(page);    
  await productPage.logout();
});
test.beforeAll(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce'); 

test.describe('SauceDemo Login and Product Tests', () => {
test('logs in to SauceDemo using the standard user account', async ({ page }) => {

  const loginPage = new LoginPage(page); //object of the LoginPage class is created and passed the page object to the constructor
  const productPage = new ProductPage(page);    

  
  await productPage.clickOnProduct();
});
test('logs in to SauceDemo using the standard user account and adds a product to the cart', async ({ page }) => {
   const productPage = new ProductPage(page);    

  
  await productPage.clickOnProduct();

});
});
});

