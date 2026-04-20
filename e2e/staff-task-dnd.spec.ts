import { test, expect } from '@playwright/test';
import { seedAuth } from './utils/auth';

test('Staff drags task from Unassigned to In Progress and verifies update trigger', async ({ page }) => {
  await seedAuth(page, 'staff');
  await page.goto('/staff/tasks');

  const sourceCard = page.getByLabel(/Task: /).first();
  const targetColumn = page.getByLabel(/In Progress column/i);

  await expect(sourceCard).toBeVisible();
  await expect(targetColumn).toBeVisible();

  await sourceCard.dragTo(targetColumn);

  const updateCalled = await page.evaluate(() => {
    return (window as Window & { __e2eFirestoreUpdateCalled?: boolean }).__e2eFirestoreUpdateCalled === true;
  });

  expect(updateCalled).toBe(true);
});
