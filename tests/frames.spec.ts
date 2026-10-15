import { expect, test } from '@playwright/test';

const framesPage = 'https://demo.automationtesting.in/Frames.html';

test('enters text in the single iframe', async ({ page }) => {
  await page.goto(framesPage);

  // A frame locator targets elements inside the single iframe.
  const singleFrame = page.frameLocator('#singleframe');

  const textInput = singleFrame.locator('input[type="text"]');

  await textInput.fill('Hello from the single iframe');

  await expect(textInput).toHaveValue('Hello from the single iframe');

  await page.waitForTimeout(2000); 
});

test('enters text in the nested iframe', async ({ page }) => {
  await page.goto(framesPage);
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();

  // First locate the outer iframe, then locate its inner iframe.
  const nestedFrameInput = page.frameLocator('#Multiple iframe').frameLocator('iframe').locator('input[type="text"]');

  await nestedFrameInput.fill('Hello from the nested iframe');
  await expect(nestedFrameInput).toHaveValue('Hello from the nested iframe');
  await page.waitForTimeout(4000);
});
