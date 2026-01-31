import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60_000,

  expect: {
    timeout: 5_000,
  },

  fullyParallel: false,

  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["json", { outputFile: "reports/report.json" }],
  ],

  use: {
    headless: false,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 10_000,
    video: "off",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  outputDir: "test-results",
});
