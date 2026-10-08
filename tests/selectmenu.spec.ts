import { test, expect, Page } from '@playwright/test';
import { SelectMenuPage } from '../pages/SelectMenuPage';

test.describe.configure({ mode: 'serial' });

test.describe('Select Menu', () => {
  let page: Page;
  let selectMenuPage: SelectMenuPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.route('**/*', route => {
      const url = route.request().url();
      const isAd = /googlesyndication|doubleclick|adservice|googletagmanager/.test(url);
      return isAd ? route.abort() : route.continue();
    });
    selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.goto();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should select value from grouped dropdown', async () => {
    await selectMenuPage.selectValue('Group 2, option 1');
    await expect(selectMenuPage.selectValueDropdown).toContainText('Group 2, option 1');
  });

  test('should select title from custom dropdown', async () => {
    await selectMenuPage.selectTitle('Prof.');
    await expect(selectMenuPage.selectOneDropdown).toContainText('Prof.');
  });

  test('should select color from old style dropdown', async () => {
    await selectMenuPage.selectColor('Blue');
    await expect(selectMenuPage.oldStyleSelect.locator('option:checked')).toHaveText('Blue');
  });

  test('should select multiple colors from custom multiselect', async () => {
    await selectMenuPage.selectMultipleColors(['Green', 'Black']);
    await expect(selectMenuPage.multiselectDropdown).toContainText('Green');
    await expect(selectMenuPage.multiselectDropdown).toContainText('Black');
  });

  test('should select multiple cars', async () => {
    await selectMenuPage.selectCars(['volvo', 'audi']);
    await expect(selectMenuPage.carsMultiSelect).toHaveValues(['volvo', 'audi']);
  });
});