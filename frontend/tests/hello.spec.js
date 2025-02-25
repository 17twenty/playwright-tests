import { test, expect } from "@playwright/test";

test("hello world test", async ({ page }) => {
  // Navigate to the dev server URL
  await page.goto("http://localhost:5173/");

  // Verify the "Hello World" text is visible
  const heading = page.locator("h1");
  await expect(heading).toHaveText("Hello World!");
});
