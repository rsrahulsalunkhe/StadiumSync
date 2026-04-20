import { test, expect } from '@playwright/test';
import { seedAuth } from './utils/auth';

test('Attendee submits incident report and sees tracking toast', async ({ page }) => {
  await seedAuth(page, 'attendee');
  await page.goto('/attendee');

  await page.getByRole('button', { name: /Report an incident/i }).click();

  await page.locator('#inc-type').selectOption('medical');
  await page.locator('#inc-location').selectOption({ index: 1 });
  await page.locator('#inc-desc').fill('A fan has fainted near the gate and needs immediate medical assistance.');

  await page.getByRole('button', { name: /Submit Report|Send Report|Report Incident/i }).click();

  await expect(page.getByText(/Tracking ID:/i)).toBeVisible();
});
