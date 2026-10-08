import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Employee } from '../test-data/employees';

export class WebTablesPage extends BasePage {
  readonly addButton: Locator;
  readonly searchBox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.locator('#addNewRecordButton');
    this.searchBox = page.locator('#searchBox');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.ageInput = page.locator('#age');
    this.salaryInput = page.locator('#salary');
    this.departmentInput = page.locator('#department');
    this.submitButton = page.locator('#submit');
  }

  async goto() {
    await this.open('/webtables');
  }

  async addEmployee(employee: Employee) {
    await this.addButton.click();
    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);
    await this.emailInput.fill(employee.email);
    await this.ageInput.fill(employee.age);
    await this.salaryInput.fill(employee.salary);
    await this.departmentInput.fill(employee.department);
    await this.submitButton.click();
  }

  async search(text: string) {
    await this.searchBox.fill(text);
  }

  rowByText(text: string): Locator {
    return this.page.getByRole('row').filter({ hasText: text });
  }

  async deleteRow(text: string) {
    await this.rowByText(text).getByTitle('Delete').click();
  }
}