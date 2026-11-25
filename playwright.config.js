// @ts-check
import { defineConfig, devices } from '@playwright/test';

const chrome = process.env.CHROME_PATH ? { launchOptions: { executablePath: process.env.CHROME_PATH } } : {};

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:4322', ...chrome },
  webServer: { command: 'node scripts/serve-dist.mjs', url: 'http://localhost:4322', reuseExistingServer: !process.env.CI },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 }, ...chrome } },
    { name: 'tablet', use: { ...devices['Desktop Chrome'], viewport: { width: 820, height: 1180 }, hasTouch: true, ...chrome } },
    { name: 'mobile', use: { ...devices['Pixel 7'], ...chrome } },
  ],
});
