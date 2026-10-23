import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login';

// URL of the practice page used by every test.
const practiceSite = 'https://testautomationpractice.blogspot.com/';

test.beforeEach(async ({ page }) => {
  // Open a fresh practice page before each test.
  await page.goto(practiceSite);

});

test('Page load and browser validation', async ({ page, browserName }) => {
  // Validate the page title and URL.
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page).toHaveURL(practiceSite); 
});


test('verifies the page title and header', async ({ page }) => {


  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('h1')).toContainText('Automation Testing Practice');
  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveURL(/testautomationpractice/);
  await expect(page).not.toHaveURL(/google/);
  await page.waitForTimeout(3000);
  console.log('Page title and header verified successfully.');
});

test('fills the form and selects radio buttons and weekdays', async ({ page }) => {
  // Find the name field by its placeholder attribute.
  await page.locator('input[placeholder="Enter Name"]').fill('Alex Morgan');
  // Find and fill the email field by its placeholder.
  await page.locator('input[placeholder="Enter EMail"]').fill('alex@example.com');
  // Find and fill the phone field by its placeholder.
  await page.locator('input[placeholder="Enter Phone"]').fill('1234567890');
  // Find the address field through its accessible label.
  await page.getByLabel('Address:').fill('123 Main Street');
  // Pause briefly so the entered form values can be observed.
  await page.waitForTimeout(3000);

  // Select the radio button whose exact accessible name is Male.
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  // Select Monday using its label.
  await page.getByLabel('Monday').check();
  // Select Friday using its label.
  await page.getByLabel('Friday').check();

  // Verify the name input by its id attribute.
  await expect(page.locator('#name')).toHaveValue('Alex Morgan');
  // Verify the email input by its id attribute.
  await expect(page.locator('#email')).toHaveValue('alex@example.com');
  // Verify the phone input by its id attribute.
  await expect(page.locator('#phone')).toHaveValue('1234567890');
  // Verify the address field value.
  await expect(page.getByLabel('Address:')).toHaveValue('123 Main Street');
  // Verify the Male radio button is selected.
  await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked();
  // Verify Monday is selected.
  await expect(page.getByLabel('Monday')).toBeChecked();
  // Verify Friday is selected.
  await expect(page.getByLabel('Friday')).toBeChecked();
  // Pause briefly before the test finishes.
  await page.waitForTimeout(3000);
});

test('selects country and colors and enters a date range', async ({ page }) => {
  // Select Canada from the country dropdown using its option value.
  await page.getByLabel('Country:').selectOption('canada');
  // Select Red and Blue in the multi-select list.
  await page.getByLabel('Colors:').selectOption(['red', 'blue']);
  // Locate the start date by its type and placeholder attributes.
  await page.locator('input[type="date"][placeholder="Start Date"]').fill('2026-10-06');
  // Locate the end date by its type and placeholder attributes.
  await page.locator('input[type="date"][placeholder="End Date"]').fill('2026-10-10');

  // Verify Canada is selected.
  await expect(page.getByLabel('Country:')).toHaveValue('canada');
  // Verify both colors are selected.
  await expect(page.getByLabel('Colors:')).toHaveValues(['red', 'blue']);
  // Verify the start date.
  await expect(page.locator('input[type="date"][placeholder="Start Date"]')).toHaveValue('2026-10-06');
  // Verify the end date.
  await expect(page.locator('input[type="date"][placeholder="End Date"]')).toHaveValue('2026-10-10');
});

test('fills the form using XPath locators', async ({ page }) => {
  // Direct XPath: find an element by its id.
  const nameInput = page.locator("xpath=//input[@id='name']");
  // Ancestor navigation: go up from the Address label to its group, then down to the textarea.
  const addressInput = page.locator("xpath=//label[@for='textarea']/ancestor::div[1]//textarea");
  // Following sibling: find the input that comes after the Email label.
  const emailInput = page.locator("xpath=//label[contains(., 'Email:')]/following-sibling::input[@id='email']");
  // Contains attribute: find the phone input inside an element whose class contains "form-group".
  const phoneInput = page.locator("xpath=//div[contains(@class, 'form-group')]//input[@id='phone']");

  
  page.locator("//a[contains(@href, '/testautmationpractice')]");
  console.log('Located the link using XPath.');

  await page.locator('h1[contains(text(),"Automation")]');
  console.log('Located the form header using XPath.');
  await page.waitForTimeout(4000);

  await nameInput.fill('Alex Morgan');
  await emailInput.fill('alex@example.com');
  await phoneInput.fill('1234567890');
  await addressInput.fill('123 Main Street');

  await expect(nameInput).toHaveValue('Alex Morgan');
  await expect(emailInput).toHaveValue('alex@example.com');
  await expect(phoneInput).toHaveValue('1234567890');
  await expect(addressInput).toHaveValue('123 Main Street');
});

test('copies Field1 into Field2 when the Copy Text button is double-clicked', async ({ page }) => {


  await page.getByText('Automation Testing Practice').dblclick();
  await page.waitForTimeout(3000);
  await page.getByRole('button',{name:"start"}).click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByRole('button',{name:"start"}).click({force:true});
  await page.waitForTimeout(3000);
  console.log('Button clicked successfully');
  await page.reload();
  await page.getByRole('button',{name:"start"}).dblclick();
  await page.waitForTimeout(3000);
  await page.getByRole('button',{name:"start"}).click({button:"right"});
  await page.waitForTimeout(3000);
  await page.locator('#apple').click({modifiers:['Control']});
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Point Me' }).hover();
  await page.waitForTimeout(3000);


});
test('displays all items in the list', async ({ page }) => {


const allRows = page.locator("xpath=//*[@id='HTML1']/div[1]/table/tbody/tr[1]/th");
const count = await allRows.count();
for (let i = 0; i < count; i++) {
  const row = allRows.nth(i);
  const name = await row.textContent();
  console.log(`Row ${i}: ${name?.trim()}`);
}

} );

test('demonstrates typing and keyboard input actions', async ({ page }) => {
  const emailInput = page.getByPlaceholder('Enter EMail');
  const phoneInput = page.getByPlaceholder('Enter Phone');

  await page.getByPlaceholder('Enter Name').fill('Alex Morgan');
  await expect(page.getByPlaceholder('Enter Name')).toHaveValue('Alex Morgan');

  await emailInput.type('playwright@example.com', { delay: 100 });
  await expect(emailInput).toHaveValue('playwright@example.com');

  await page.locator('#email').clear();
  await expect(emailInput).toHaveValue(''); 

  await emailInput.fill('test@example.com');
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(4000);
  await page.keyboard.type('admin@example.com', { delay: 100 });
  await expect(emailInput).toHaveValue('admin@example.com');

  await page.keyboard.press('Tab');
  await expect(phoneInput).toBeFocused();
  await page.keyboard.press('Escape');

  await phoneInput.press('Control+A');
  await phoneInput.type('1234567890', { delay: 50 });
  await expect(phoneInput).toHaveValue('1234567890');
  await phoneInput.press('Enter');



await page.locator('#Wikipedia1_wikipedia-search-input').type('Playwright',{ delay: 200 });
await page.keyboard.press('Control+A');
await page.waitForTimeout(3000);
await page.keyboard.press("Enter");
await page.waitForTimeout(3000);

});

test('selects options from dropdowns', async ({ page }) => {
  // Choose Canada from the country dropdown.
  await page.getByLabel('Country:').selectOption('canada');
  // Choose two values from the colors multi-select.
  await page.getByLabel('Colors:').selectOption(['red', 'blue']);
await page.waitForTimeout(3000);
  // Confirm the country selection.
  await expect(page.getByLabel('Country:')).toHaveValue('canada');
  // Confirm both color selections.
  await expect(page.getByLabel('Colors:')).toHaveValues(['red', 'blue']);
});

test('selects a radio button and multiple checkboxes', async ({ page }) => {
 
  await page.getByRole('radio', { name: 'Female', exact: true }).check();

  await page.getByLabel('Monday').check();
  await page.getByLabel('Friday').check();


  await expect(page.getByLabel('Monday')).toBeChecked();
  await page.waitForTimeout(3000);
  await page.getByLabel('Monday').uncheck();
  await expect(page.getByLabel('Monday')).not.toBeChecked();
  await page.waitForTimeout(3000);
  await expect(page.getByLabel('Friday')).toBeChecked();

  await page.waitForTimeout(3000);
});

test('selects a single file for upload', async ({ page }) => {

  const fileInput = page.locator('#singleFileInput');

  await fileInput.setInputFiles('testdata/sample.txt');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  const multipleFileInput = page.locator('#multipleFilesInput');
  
  await multipleFileInput.setInputFiles([
    'testdata/sample.txt',
    'testdata/sample-first.txt'
  ]);
  await page.waitForTimeout(3000);
});

test('drags an item into the drop target', async ({ page }) => {
  // Locate the draggable item and its target.
  const draggable = page.locator('#draggable');
  const dropTarget = page.locator('#droppable'); // target area for dropping
  // Drag the item into the target area.

  await draggable.dragTo(dropTarget);

  // Confirm the target reports that the item was dropped.
  await expect(dropTarget).toContainText('Dropped!');
  await page.waitForTimeout(3000);

});

test('demonstrates page, element, and soft assertions', async ({ page }) => {
  // Page assertions verify the loaded page's title and URL.
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page).toHaveURL(practiceSite);

  // Element assertions verify the heading's visibility and text.
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Automation Testing Practice');

  // Soft assertions report failures while allowing the remaining checks to run.
  const nameInput = page.getByPlaceholder('Enter Name');
  await nameInput.fill('Alex Morgan');
  await expect.soft(nameInput).toBeVisible();
  await expect.soft(nameInput).toHaveAttribute('placeholder', 'Enter Name');
  await expect.soft(nameInput).toHaveValue('Alex Morgan');
});
test('demonstrates element and visual assertions', async ({ page }) => {
  const emailInput = page.getByPlaceholder('Enter EMail');
  const searchInput = page.locator('#Wikipedia1_wikipedia-search-input');
  const submitButton = page.locator('#Blog1 .submit-btn');

  // Visibility and DOM attachment
  await expect(page.locator('#Blog1')).toBeVisible();
  await expect(page.locator('#PageList2 h2')).not.toBeVisible();
  await expect(page.locator('#Wikipedia1_wikipedia-search-results-header')).toBeHidden();
  await expect(page.locator('#Blog1')).toBeAttached();

  // Text content
  await expect(page.locator('h1')).toHaveText('Automation Testing Practice');
  await expect(page.locator('#Blog1')).toContainText('Data Entry Form');
  await expect(page.locator('h1')).toHaveText(/automation testing practice/i);

  // Attributes and input values
  await expect(emailInput).toHaveAttribute('type', 'text');
  await expect(emailInput).toHaveAttribute('placeholder', 'Enter EMail');

  await emailInput.fill('alex@example.com');
  await expect(emailInput).toHaveValue('alex@example.com');

  await expect(searchInput).toBeEmpty();
  await searchInput.fill('Playwright');
  await expect(searchInput).toHaveValue(/playwright/i);


  // Count, class, CSS, enabled state, and checked state
  await expect(page.locator('#HTML1 table tbody tr')).toHaveCount(7); // Verify there are 7 rows in the table
  await expect(page.locator('#name')).toHaveClass(/form-control/);
  await expect(page.locator('#email')).not.toHaveClass(/disabled/);
  
  await expect(page.locator('#name')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  
  await expect(submitButton).toBeEnabled();
  await expect(submitButton).not.toBeDisabled();
  await page.getByLabel('Monday').check();
  await expect(page.getByLabel('Monday')).toBeChecked();
  await expect(page.getByLabel('Sunday')).not.toBeChecked();

  // Focus and empty value
  await emailInput.focus();
  await expect(emailInput).toBeFocused();
  await page.waitForTimeout(3000);
  await searchInput.clear();
  await expect(searchInput).toBeEmpty();


 //screenshot and visual comparison
  await page.screenshot({path: 'screenshots/visual_assertions.png', fullPage: true});
  await expect(page.locator('#Blog1')).toHaveScreenshot('screenshots/blog1_expected.png');
  
});

test('demonstrates soft assertions', async ({ page }) => {
  const nameInput = page.getByPlaceholder('Enter Name');
  const emailInput = page.getByPlaceholder('Enter EMail');

  await nameInput.fill('Alex Morgan');
  await emailInput.fill('alex@example.com');

  // Soft assertions collect failures but continue through the remaining checks.
  await expect.soft(nameInput).toHaveValue('Alex Morgan'); //error: missing space
  await expect.soft(emailInput).toHaveValue('alex@example.com');
  await expect.soft(page.locator('#Blog1 h3')).toContainText('Data Entry Form');
  await expect.soft(nameInput).toBeVisible();
});
 
test('demonstrates auto-wait, explicit wait, and custom polling', async ({ page }) => {
  const toggleButton = page.locator('button[name="start"], button[name="stop"]');

  // Explicitly wait until the START button is visible.
  await page.waitForSelector('button[name="start"]', { state: 'visible' });

  // The click auto-waits until the button is ready for interaction.
  await toggleButton.click();

  // Custom polling waits until the button changes to STOP.
  await expect.poll(() => toggleButton.getAttribute('name')).toBe('stop');
  await expect(toggleButton).toHaveText('STOP');



  // await page.locator().waitFor({ state: 'visible', timeout: 5000 });
  await page.waitForLoadState('networkidle'); //
  await page.waitForFunction(() => document.querySelector('#Blog1') !== null);
  await page.waitForResponse(response => response.url().includes('testautomationpractice') && response.status() === 200);
  await page.waitForEvent('load');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
});

test('custom polling example: waits for a specific text to appear', async ({ page }) => {
 
  await expect(async () => {
    
  const count = await page.locator(".item").count(); //6
  
  expect(count).toBeGreaterThan(5);

}).toPass({ timeout: 10_000 });


await expect(async () => {
  const text = await page.locator("#widget-content").textContent();  // 
  expect(text).toBe("Blog");
}).toPass({
  intervals: [1000, 2000, 5000], // retry intervals in ms
  timeout: 30_000
});


});
  
test('reads text inside an iframe', async ({ page }) => {
  await page.setContent(`
    <iframe id="my-frame" srcdoc="<h1>Hello from the iframe</h1>"></iframe>
  `);



  const iframe = page.frameLocator('#my-frame');
  await expect(iframe.getByRole('heading')).toHaveText('Hello from the iframe');
});








