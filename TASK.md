# Playwright Practice Task

## Objective
Create Playwright automation tests for the practice page and form page shown in this folder. The goal is to practice real-world browser interactions using the Playwright framework.

## Target Website
Use the following site for all tasks:

https://testautomationpractice.blogspot.com/

## Topics to Cover

1. Page load and browser validation
   - Open the page
   - Verify the page title
   - Confirm the URL matches the expected site
   - Validate key page elements are visible

2. Form input automation
   - Fill Name, Email, Phone, and Address fields
   - Use placeholders and labels for selectors
   - Validate entered values after filling

3. Radio buttons and checkboxes
   - Select male/female options
   - Select one or more weekdays
   - Confirm the selected values are checked

4. Dropdown and multi-select elements
   - Select a country from the dropdown
   - Select multiple colors from the list
   - Validate the selected options

5. Date picker handling
   - Enter date values in date fields
   - Work with date input fields and date range fields
   - Validate the date values after entry

6. Button interactions
   - Click regular buttons
   - Handle dynamic button states
   - Hover over buttons
   - Perform right-click and double-click actions where applicable

7. Alerts and popups
   - Handle simple alert boxes
   - Accept or dismiss confirmation alerts
   - Handle prompt alerts and enter user input
   - Validate messages shown after alert actions

8. New tab and popup window handling
   - Open a new tab
   - Validate the opened URL
   - Handle popup windows and assert navigation

9. Keyboard and mouse actions
   - Type text with keyboard events
   - Press Tab, Enter, Escape, and Control+A
   - Check focus movement and keyboard interactions

10. Locator strategies
   - Use CSS selectors
   - Use XPath locators
   - Use Playwright built-in locators like getByRole, getByLabel, getByPlaceholder, and getByText

11. Assertions and debugging
   - Use Playwright expect assertions for visibility, value, URL, and checked state
   - Add waits where needed
   - Capture screenshots for key steps

## Expected Deliverables
- Create Playwright test cases inside the `tests` folder
- Use meaningful test names
- Keep the tests readable and structured
- Use assertions to validate expected browser behavior
- Include necessary waits and event handling for dialogs and popups

## Submission Guidelines
- Add your solution in the existing project folder
- Use the Playwright test runner
- Run the test file and make sure it passes
- Keep the code clean and easy to understand

## Bonus Challenges
- Automate a form submission flow end-to-end
- Use `page.keyboard` to simulate advanced user input
- Validate that the page remains stable after alerts and popup windows
- Add screenshots at important checkpoints
