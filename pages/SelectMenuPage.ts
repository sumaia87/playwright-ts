import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SelectMenuPage extends BasePage {
  readonly selectValueDropdown: Locator;
  readonly selectOneDropdown: Locator;
  readonly oldStyleSelect: Locator;
  readonly multiselectDropdown: Locator;
  readonly carsMultiSelect: Locator;

  constructor(page: Page) {
    super(page);
    this.selectValueDropdown = page.locator('#withOptGroup');
    this.selectOneDropdown = page.locator('#selectOne');
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.multiselectDropdown = page.locator('//b[text()="Multiselect drop down"]/../following-sibling::div[1]');
    this.carsMultiSelect = page.locator('#cars');
  }

  async goto() {
    await this.open('/select-menu');
  }

  async selectValue(option: string) {
    await this.selectValueDropdown.click();
    await this.page.getByText(option, { exact: true }).click();
  }

  async selectTitle(title: string) {
    await this.selectOneDropdown.click();
    await this.page.getByText(title, { exact: true }).click();
  }

  async selectColor(color: string) {
    await this.oldStyleSelect.selectOption({ label: color });
  }

  async selectMultipleColors(colors: string[]) {
    await this.multiselectDropdown.click();
    for (const color of colors) {
      await this.page.keyboard.type(color);
      await this.page.keyboard.press('Enter');
    }
  }

  async selectCars(cars: string[]) {
    await this.carsMultiSelect.selectOption(cars);
  }
}