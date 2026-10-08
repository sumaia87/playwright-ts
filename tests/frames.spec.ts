import { test, expect } from '../fixtures/pages';
import { FramesPage } from '../pages/FramesPage';

test.describe('Frames', () => {
  let framesPage: FramesPage;

  test.beforeEach(async ({ page }) => {
    framesPage = new FramesPage(page);
    await framesPage.goto();
  });

  test('should read text inside big frame', async () => {
    await expect(framesPage.bigFrameHeading).toHaveText('This is a sample page');
  });

  test('should read text inside small frame', async () => {
    await expect(framesPage.smallFrameHeading).toHaveText('This is a sample page');
  });

  test('should not find frame text directly on main page', async ({ page }) => {
    await expect(page.locator('#sampleHeading')).toHaveCount(0);
  });
});