import { test, expect } from '../fixtures/pages';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Alerts', () => {
  let alertsPage: AlertsPage;

  test.beforeEach(async ({ page }) => {
    alertsPage = new AlertsPage(page);
    await alertsPage.goto();
  });

  test('should accept simple alert', async () => {
    const message = await alertsPage.clickAlert();
    expect(message).toBe('You clicked a button');
  });

  test('should accept alert that appears after 5 seconds', async () => {
    const message = await alertsPage.clickTimerAlert();
    expect(message).toBe('This alert appeared after 5 seconds');
  });

  test('should click OK on confirm', async () => {
    const message = await alertsPage.confirmOk();
    expect(message).toBe('Do you confirm action?');
    await expect(alertsPage.confirmResult).toHaveText('You selected Ok');
  });

  test('should click Cancel on confirm', async () => {
    await alertsPage.confirmCancel();
    await expect(alertsPage.confirmResult).toHaveText('You selected Cancel');
  });

  test('should enter name in prompt', async () => {
    const message = await alertsPage.enterPrompt('John Doe');
    expect(message).toBe('Please enter your name');
    await expect(alertsPage.promptResult).toHaveText('You entered John Doe');
  });
});