import fs from 'fs';
import { test, expect } from '../fixtures/pages';
import { UploadDownloadPage } from '../pages/UploadDownloadPage';

test.describe('Upload and Download', () => {
  let uploadDownloadPage: UploadDownloadPage;

  test.beforeEach(async ({ page }) => {
    uploadDownloadPage = new UploadDownloadPage(page);
    await uploadDownloadPage.goto();
  });

  test('should upload a file', async () => {
    await uploadDownloadPage.uploadFile('test-data/files/sample.txt');

    await expect(uploadDownloadPage.uploadedFilePath).toContainText('sample.txt');
  });

  test('should download a file', async () => {
    const download = await uploadDownloadPage.downloadFile();

    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');

    const savePath = 'downloads/' + download.suggestedFilename();
    await download.saveAs(savePath);
    expect(fs.existsSync(savePath)).toBeTruthy();
  });
});