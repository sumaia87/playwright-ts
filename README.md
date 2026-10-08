# DemoQA UI Automation: Playwright + TypeScript

UI test automation for [DemoQA](https://demoqa.com) built with Playwright and TypeScript. The framework follows the Page Object Model: every page has its own class, and the tests only describe behavior.

## What is covered

Each area has a page class in `pages/` and a spec file in `tests/`.

| Area | Page class | Spec file |
| --- | --- | --- |
| Text Box | `TextBoxPage.ts` | `textbox.spec.ts` |
| Check Box | `CheckBoxPage.ts` | `checkbox.spec.ts` |
| Radio Button | `RadioButtonPage.ts` | `radiobutton.spec.ts` |
| Web Tables | `WebTablesPage.ts` | `webtables.spec.ts` |
| Buttons | `ButtonsPage.ts` | `buttons.spec.ts` |
| Select Menu | `SelectMenuPage.ts` | `selectmenu.spec.ts` |
| Alerts | `AlertsPage.ts` | `alerts.spec.ts` |
| Frames | `FramesPage.ts` | `frames.spec.ts` |
| Browser Windows | `BrowserWindowsPage.ts` | `browserwindows.spec.ts` |
| Upload / Download | `UploadDownloadPage.ts` | `uploaddownload.spec.ts` |

## Tech stack

- Playwright Test
- TypeScript
- Page Object Model with a shared `BasePage`
- Reusable fixtures and separate test data
- Playwright HTML report

## Project structure

```
.
├── pages/              Page Object classes (BasePage + one class per page)
├── tests/              Spec files, one per area
├── fixtures/           Reusable test fixtures
├── test-data/          Test data kept separate from test code
├── downloads/          Files used by the Upload / Download tests
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Getting started

Prerequisite: [Node.js](https://nodejs.org) (LTS).

```bash
# 1. Clone the repository
git clone https://github.com/sumaia87/playwright-ts.git
cd playwright-ts

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

## Running the tests

```bash
# Run all tests
npx playwright test

# Run one spec file
npx playwright test tests/textbox.spec.ts

# Run with the browser visible
npx playwright test --headed

# Open the HTML report after a run
npx playwright show-report
```

## Author

**Sumaia Akter**, SQA Engineer
[GitHub](https://github.com/sumaia87) · [LinkedIn](https://linkedin.com/in/sumaiaakter31) · sumaiaa752@gmail.com
