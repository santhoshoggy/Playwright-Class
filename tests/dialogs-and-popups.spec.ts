import { expect, test, type Page } from '@playwright/test';

const practiceSite = 'https://testautomationpractice.blogspot.com/';

test('handles the simple alert', async ({ page }) => {
  await page.goto(practiceSite);

  let alertMessage = '';

  // Register the dialog handler before clicking so the browser alert can be accepted.
  page.on('dialog', async dialog => {
    alertMessage = dialog.message();
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Simple Alert' }).click();
  expect(alertMessage).toBe('I am an alert box!');
  await page.waitForTimeout(4000);
});

test('accepts the confirmation alert', async ({ page }) => {
  await page.goto(practiceSite);

  page.on('dialog', async dialog => {
    // await dialog.accept();
    await dialog.dismiss(); // Dismiss the alert after accepting it
  });

  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
  await page.waitForTimeout(2000);
});

test('submits a name in the prompt alert', async ({ page }) => {
  await page.goto(practiceSite);

  page.on('dialog', async dialog => {
    // Provide the text to enter in the browser prompt.
    // await dialog.accept("Harry Potter");
    await dialog.dismiss(); // Dismiss the prompt after entering the text
  });

  await page.getByRole('button', { name: 'Prompt Alert' }).click();
  await expect(page.locator('#demo')).toHaveText(`User cancelled the prompt.`);
  await page.waitForTimeout(2000);
});



test('opens the New Tab button in a new tab', async ({ page }) => {
  await page.goto(practiceSite);

  // A popup event represents the new tab opened by window.open().
  const newTabPromise = page.waitForEvent('popup');

  await page.getByRole('button', { name: 'New Tab' }).click();

  const newTab = await newTabPromise;
await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://www.pavantestingtools.com/');
  
  await newTab.waitForTimeout(2000);
});

test('opens a popup window', async ({ page }) => {
  await page.goto(practiceSite);

  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Popup Windows' }).click();
  const popup = await popupPromise;

  await expect(popup).toHaveURL(/selenium\.dev/);
  await popup.waitForLoadState();
  await popup.waitForTimeout(2000);
  await page.screenshot({
  clip: { x: 0, y: 0, width: 400, height: 300 },
  path: "screenshots/clipped.png"

});
});
