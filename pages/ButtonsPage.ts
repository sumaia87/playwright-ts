import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ButtonsPage extends BasePage {
  readonly doubleClickButton: Locator;
  readonly rightClickButton: Locator;
  readonly clickMeButton: Locator;
  readonly doubleClickMessage: Locator;
  readonly rightClickMessage: Locator;
  readonly clickMeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.doubleClickButton = page.locator('#doubleClickBtn');
    this.rightClickButton = page.locator('#rightClickBtn');
    this.clickMeButton = page.getByRole('button', { name: 'Click Me', exact: true });
    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.rightClickMessage = page.locator('#rightClickMessage');
    this.clickMeMessage = page.locator('#dynamicClickMessage');
  }

  async goto() {
    await this.open('/buttons');
  }

  async doubleClick() {
    await this.doubleClickButton.dblclick();
  }

  async rightClick() {
    await this.rightClickButton.click({ button: 'right' });
  }

  async clickMe() {
    await this.clickMeButton.click();
  }
}