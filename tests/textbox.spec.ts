import { test, expect } from '../fixtures/pages';
import { TextBoxPage } from '../pages/TextBoxPage';
import { validUser } from '../test-data/users';

test.describe('Text Box', () => {
  let textBoxPage: TextBoxPage;

  test.beforeEach(async ({ page }) => {
    textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
  });

  test('should display submitted data', async () => {
    await textBoxPage.fillForm(validUser);
    await textBoxPage.submit();

    await expect(textBoxPage.outputName).toContainText(validUser.fullName);
    await expect(textBoxPage.outputEmail).toContainText(validUser.email);
    await expect(textBoxPage.outputCurrentAddress).toContainText(validUser.currentAddress);
    await expect(textBoxPage.outputPermanentAddress).toContainText(validUser.permanentAddress);
  });
});