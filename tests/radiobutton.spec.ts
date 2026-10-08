import { test, expect } from '../fixtures/pages';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test.describe('Radio Button', () => {
  let radioButtonPage: RadioButtonPage;

  test.beforeEach(async ({ page }) => {
    radioButtonPage = new RadioButtonPage(page);
    await radioButtonPage.goto();
  });

  test('should switch from Yes to Impressive', async () => {
    await radioButtonPage.selectYes();
    await expect(radioButtonPage.yesRadio).toBeChecked();
    await expect(radioButtonPage.result).toHaveText('Yes');

    await radioButtonPage.selectImpressive();
    await expect(radioButtonPage.impressiveRadio).toBeChecked();
    await expect(radioButtonPage.yesRadio).not.toBeChecked();
    await expect(radioButtonPage.result).toHaveText('Impressive');
  });

  test('should not select No after Yes because No is disabled', async () => {
    await radioButtonPage.selectYes();
    await expect(radioButtonPage.result).toHaveText('Yes');

    await expect(radioButtonPage.noRadio).toBeDisabled();
    await radioButtonPage.trySelectNo();

    await expect(radioButtonPage.noRadio).not.toBeChecked();
    await expect(radioButtonPage.yesRadio).toBeChecked();
    await expect(radioButtonPage.result).toHaveText('Yes');
  });
});