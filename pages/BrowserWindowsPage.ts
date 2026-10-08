import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrowserWindowsPage extends BasePage {
  readonly newTabButton: Locator;
  readonly newWindowButton: Locator;

  constructor(page: Page) {
    super(page);
    this.newTabButton = page.locator('#tabButton');
    this.newWindowButton = page.locator('#windowButton');
  }

  async goto() {
    await this.open('/browser-windows');
  }

  private async openNewPage(button: Locator): Promise<Page> {
    const newPagePromise = this.page.context().waitForEvent('page');
    await button.click();
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();
    return newPage;
  }

  async openNewTab() {
    return this.openNewPage(this.newTabButton);
  }

  async openNewWindow() {
    return this.openNewPage(this.newWindowButton);
  }
}