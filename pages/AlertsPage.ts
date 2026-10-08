import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  readonly alertButton: Locator;
  readonly timerAlertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly confirmResult: Locator;
  readonly promptResult: Locator;

  constructor(page: Page) {
    super(page);
    this.alertButton = page.locator('#alertButton');
    this.timerAlertButton = page.locator('#timerAlertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton');
    this.confirmResult = page.locator('#confirmResult');
    this.promptResult = page.locator('#promptResult');
  }

  async goto() {
    await this.open('/alerts');
  }

  private async handleDialog(button: Locator, action: 'accept' | 'dismiss', text?: string): Promise<string> {
    const messagePromise = new Promise<string>(resolve => {
      this.page.once('dialog', async dialog => {
        resolve(dialog.message());
        if (action === 'accept') {
          await dialog.accept(text);
        } else {
          await dialog.dismiss();
        }
      });
    });
    await button.click();
    return messagePromise;
  }

  async clickAlert() {
    return this.handleDialog(this.alertButton, 'accept');
  }

  async clickTimerAlert() {
    return this.handleDialog(this.timerAlertButton, 'accept');
  }

  async confirmOk() {
    return this.handleDialog(this.confirmButton, 'accept');
  }

  async confirmCancel() {
    return this.handleDialog(this.confirmButton, 'dismiss');
  }

  async enterPrompt(name: string) {
    return this.handleDialog(this.promptButton, 'accept', name);
  }
}