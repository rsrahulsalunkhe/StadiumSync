import { test, expect } from '@playwright/test';
import { seedAuth } from './utils/auth';

test('Attendee heatmap: click zone marker and verify InfoWindow content', async ({ page }) => {
  await seedAuth(page, 'attendee');
  await page.goto('/attendee/heatmap');

  const mapNotConfigured = page.getByText(/Google Maps is not configured/i);
  if (await mapNotConfigured.isVisible().catch(() => false)) {
    await expect(mapNotConfigured).toBeVisible();
    return;
  }

  const marker = page.locator('[title*="North Stand"]').first();
  await expect(marker).toBeVisible();
  await marker.click();

  await expect(page.getByText(/Density/i).first()).toBeVisible();
  await expect(page.getByText(/Est\. wait|Est. wait/i).first()).toBeVisible();
  await expect(page.getByText(/Recommended/i).first()).toBeVisible();
});
