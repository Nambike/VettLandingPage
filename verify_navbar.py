import { test, expect } from '@playwright/test';

test('navbar scroll behavior', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for the navbar to be visible initially
  const navbar = page.locator('nav');
  await expect(navbar).toBeVisible();

  // Capture initial state (at top)
  await page.screenshot({ path: '/home/jules/verification/screenshots/navbar_at_top.png' });

  // Start recording video/session via manual scrolling

  // Scroll down
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(1000); // Wait for transition
  await page.screenshot({ path: '/home/jules/verification/screenshots/navbar_hidden.png' });

  // Scroll up
  await page.evaluate(() => window.scrollBy(0, -200));
  await page.waitForTimeout(1000); // Wait for transition
  await page.screenshot({ path: '/home/jules/verification/screenshots/navbar_shown_scrolled.png' });

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000); // Wait for transition
  await page.screenshot({ path: '/home/jules/verification/screenshots/navbar_at_top_again.png' });
});
