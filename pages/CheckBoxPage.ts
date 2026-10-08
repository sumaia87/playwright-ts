import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckBoxPage extends BasePage {
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.result = page.locator('#result');
  }

  async goto() {
    await this.open('/checkbox');
  }

  treeItem(name: string): Locator {
    return this.page
      .getByRole('treeitem')
      .filter({ has: this.page.locator(`[title="${name}"]`) });
  }

  checkbox(name: string): Locator {
    return this.treeItem(name).locator('.rc-tree-checkbox');
  }

  async expand(name: string) {
    const item = this.treeItem(name);
    await item.waitFor();
    if ((await item.getAttribute('aria-expanded')) === 'false') {
      await item.locator('.rc-tree-switcher').click();
    }
  }

  async expandAll() {
    for (const name of ['Home', 'Desktop', 'Documents', 'Downloads']) {
      await this.expand(name);
    }
  }

  async select(name: string) {
    await this.checkbox(name).click();
  }

  async clearSelection() {
    const home = this.checkbox('Home');
    await home.waitFor();
    const classes = (await home.getAttribute('class')) ?? '';
    if (classes.includes('rc-tree-checkbox-checked')) {
      await home.click();
    }
  }
}