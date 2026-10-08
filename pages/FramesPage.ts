import { Page, Locator, FrameLocator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FramesPage extends BasePage {
  readonly bigFrame: FrameLocator;
  readonly smallFrame: FrameLocator;
  readonly bigFrameHeading: Locator;
  readonly smallFrameHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.bigFrame = page.frameLocator('#frame1');
    this.smallFrame = page.frameLocator('#frame2');
    this.bigFrameHeading = this.bigFrame.locator('#sampleHeading');
    this.smallFrameHeading = this.smallFrame.locator('#sampleHeading');
  }

  async goto() {
    await this.open('/frames');
  }
}