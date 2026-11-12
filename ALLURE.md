# Allure reports

Run the tests and generate fresh Allure results:

```powershell
npm test
npm run allure:generate
npm run allure:open
```

`npm test` clears `allure-results` before running Playwright, so the generated
report contains only the latest run. `allure:generate` also replaces the
existing `allure-report` output.
