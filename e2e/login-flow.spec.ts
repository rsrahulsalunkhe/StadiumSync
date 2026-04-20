import { test, expect } from '@playwright/test';

test('Login flow: mock Google Sign-In and redirect to attendee dashboard', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('button', { name: /Sign in with Google/i })).toBeVisible();

  await page.getByRole('button', { name: /Sign in with Google/i }).click();

  await expect(page).toHaveURL(/\/attendee/);
  await expect(page.getByRole('heading', { name: /Welcome back/i })).toBeVisible();
});
