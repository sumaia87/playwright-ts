import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  readonly yesRadio: Locator;
  readonly impressiveRadio: Locator;
  readonly noRadio: Locator;
  readonly yesLabel: Locator;
  readonly impressiveLabel: Locator;
  readonly noLabel: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.yesRadio = page.locator('#yesRadio');
    this.impressiveRadio = page.locator('#impressiveRadio');
    this.noRadio = page.locator('#noRadio');
    this.yesLabel = page.locator('label[for="yesRadio"]');
    this.impressiveLabel = page.locator('label[for="impressiveRadio"]');
    this.noLabel = page.locator('label[for="noRadio"]');
    this.result = page.locator('.text-success');
  }

  async goto() {
    await this.open('/radio-button');
  }

  async selectYes() {
    await this.yesLabel.click();
  }

  async selectImpressive() {
    await this.impressiveLabel.click();
  }

  async trySelectNo() {
    await this.noLabel.click({ force: true });
  }
}