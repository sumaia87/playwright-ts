import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/*', route => {
      const url = route.request().url();
      const isAd = /googlesyndication|doubleclick|adservice|googletagmanager/.test(url);
      return isAd ? route.abort() : route.continue();
    });
    await use(page);
  },
});

export { expect } from '@playwright/test';