import { Page, Locator, Download } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadDownloadPage extends BasePage {
  readonly downloadButton: Locator;
  readonly uploadInput: Locator;
  readonly uploadedFilePath: Locator;

  constructor(page: Page) {
    super(page);
    this.downloadButton = page.locator('#downloadButton');
    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
  }

  async goto() {
    await this.open('/upload-download');
  }

  async uploadFile(filePath: string) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async downloadFile(): Promise<Download> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadButton.click();
    return downloadPromise;
  }
}