import { test, expect } from '../fixtures/pages';
import { ButtonsPage } from '../pages/ButtonsPage';

test.describe('Buttons', () => {
  let buttonsPage: ButtonsPage;

  test.beforeEach(async ({ page }) => {
    buttonsPage = new ButtonsPage(page);
    await buttonsPage.goto();
  });

  test('should show message on double click', async () => {
    await buttonsPage.doubleClick();
    await expect(buttonsPage.doubleClickMessage).toHaveText('You have done a double click');
  });

  test('should show message on right click', async () => {
    await buttonsPage.rightClick();
    await expect(buttonsPage.rightClickMessage).toHaveText('You have done a right click');
  });

  test('should show message on click', async () => {
    await buttonsPage.clickMe();
    await expect(buttonsPage.clickMeMessage).toHaveText('You have done a dynamic click');
  });
});