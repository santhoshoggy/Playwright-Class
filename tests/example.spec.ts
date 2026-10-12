import {test, expect} from '@playwright/test';

test('example test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/'); 
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Enter Name').click();
  await page.getByPlaceholder('Enter Name').fill('secret_sauce');
  await page.waitForTimeout(3000);
  await page.waitForURL('https://www.saucedemo.com/inventory.html'); 
  console.log('URL is correct');
  await page.getByLabel('Phone:').fill('1234567890');
  await expect(page.getByText('Gender:')).toBeVisible();
  await page.locator('#form-control')
  await page.getByRole('button', { name: 'start' }).click();
   const password12 = await page.locator('#password');
   await password12.fill('secret_sauce');
   await password12.click();
  await page.locator('.form-control');
  await page.locator('name="BookTable"').first(); //0 th index
  await page.locator('name="BookTable"').last(); // last index
  await page.locator('name="BookTable"').nth(4); 
  
  console.log('Test completed successfully');


  
});
