import { test, expect } from '../fixtures/pages';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';

test.describe('Browser Windows', () => {
  let browserWindowsPage: BrowserWindowsPage;

  test.beforeEach(async ({ page }) => {
    browserWindowsPage = new BrowserWindowsPage(page);
    await browserWindowsPage.goto();
  });

  test('should open new tab', async () => {
    const newTab = await browserWindowsPage.openNewTab();

    await expect(newTab).toHaveURL(/sample/);
    await expect(newTab.locator('#sampleHeading')).toHaveText('This is a sample page');
  });

  test('should open new window', async () => {
    const newWindow = await browserWindowsPage.openNewWindow();

    await expect(newWindow.locator('#sampleHeading')).toHaveText('This is a sample page');
  });

  test('should keep original page after opening new tab', async ({ page }) => {
    const newTab = await browserWindowsPage.openNewTab();
    await newTab.close();

    await expect(page).toHaveURL(/browser-windows/);
    await expect(browserWindowsPage.newTabButton).toBeVisible();
  });
});