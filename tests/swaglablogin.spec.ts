import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/product';

test('logs in to SauceDemo using the standard user account', async ({ page }) => {

  const loginPage = new LoginPage(page); //object of the LoginPage class is created and passed the page object to the constructor
  const productPage = new ProductPage(page);    

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  await productPage.clickOnProduct();
});
