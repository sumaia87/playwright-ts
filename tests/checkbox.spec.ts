import { test, expect } from '../fixtures/pages';
import { CheckBoxPage } from '../pages/CheckBoxPage';

const CHECKED = /rc-tree-checkbox-checked/;

test.describe('Check Box', () => {
  let checkBoxPage: CheckBoxPage;

  test.beforeEach(async ({ page }) => {
    checkBoxPage = new CheckBoxPage(page);
    await checkBoxPage.goto();
    await checkBoxPage.clearSelection();
    await checkBoxPage.expandAll();
  });

  test('should select a single item', async () => {
    await checkBoxPage.select('Notes');

    await expect(checkBoxPage.checkbox('Notes')).toHaveClass(CHECKED);
    await expect(checkBoxPage.checkbox('Commands')).not.toHaveClass(CHECKED);
    await expect(checkBoxPage.result).toContainText('notes');
  });

  test('should select all children when Home is selected', async () => {
    await checkBoxPage.select('Home');

    for (const name of ['Desktop', 'Documents', 'Downloads', 'Word File.doc']) {
      await expect(checkBoxPage.checkbox(name)).toHaveClass(CHECKED);
    }
    await expect(checkBoxPage.result).toContainText('excelFile');
  });

  test('should clear result when Home is unselected', async () => {
    await checkBoxPage.select('Home');
    await expect(checkBoxPage.checkbox('Home')).toHaveClass(CHECKED);

    await checkBoxPage.select('Home');
    await expect(checkBoxPage.checkbox('Home')).not.toHaveClass(CHECKED);
    await expect(checkBoxPage.result).toBeHidden();
  });
});