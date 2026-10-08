import { test, expect } from '../fixtures/pages';
import { WebTablesPage } from '../pages/WebTablesPage';
import { newEmployee } from '../test-data/employees';

test.describe('Web Tables', () => {
  let webTablesPage: WebTablesPage;

  test.beforeEach(async ({ page }) => {
    webTablesPage = new WebTablesPage(page);
    await webTablesPage.goto();
  });

  test('should add a new employee', async () => {
    await webTablesPage.addEmployee(newEmployee);

    const row = webTablesPage.rowByText(newEmployee.email);
    await expect(row).toBeVisible();
    await expect(row).toContainText(newEmployee.firstName);
    await expect(row).toContainText(newEmployee.department);
  });

  test('should find employee by search', async () => {
    await webTablesPage.search('Cierra');

    await expect(webTablesPage.rowByText('Cierra')).toBeVisible();
    await expect(webTablesPage.rowByText('Alden')).toHaveCount(0);
  });

  test('should delete an employee', async () => {
    await expect(webTablesPage.rowByText('Cierra')).toBeVisible();

    await webTablesPage.deleteRow('Cierra');

    await expect(webTablesPage.rowByText('Cierra')).toHaveCount(0);
  });
});     