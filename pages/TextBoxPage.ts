import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TextBoxUser } from '../test-data/users';

export class TextBoxPage extends BasePage {
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputName: Locator;
  readonly outputEmail: Locator;
  readonly outputCurrentAddress: Locator;
  readonly outputPermanentAddress: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.outputName = page.locator('#output #name');
    this.outputEmail = page.locator('#output #email');
    this.outputCurrentAddress = page.locator('#output #currentAddress');
    this.outputPermanentAddress = page.locator('#output #permanentAddress');
  }

  async goto() {
    await this.open('/text-box');
  }

  async fillForm(user: TextBoxUser) {
    await this.fullNameInput.fill(user.fullName);
    await this.emailInput.fill(user.email);
    await this.currentAddressInput.fill(user.currentAddress);
    await this.permanentAddressInput.fill(user.permanentAddress);
  }

  async submit() {
    await this.submitButton.click();
  }
}