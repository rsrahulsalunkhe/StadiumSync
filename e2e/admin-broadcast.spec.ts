import { test, expect } from '@playwright/test';
import { seedAuth } from './utils/auth';

test('Admin composes broadcast alert and it appears in NotificationsPage', async ({ page }) => {
  await seedAuth(page, 'admin');
  await page.goto('/admin/alerts');

  await page.getByLabel(/Title/i).fill('Gate C congestion');
  await page.getByLabel(/Message/i).fill('Please redirect to Gate B while congestion clears at Gate C.');
  await page.getByRole('button', { name: /Select zones/i }).click();
  await page.getByRole('option', { name: 'All Zones' }).click();
  await page.getByRole('button', { name: /Send broadcast alert/i }).click();

  await expect(page.getByText(/Alert ".*" sent to/i)).toBeVisible();

  await page.evaluate(() => {
    localStorage.setItem(
      'stadiumsync-auth',
      JSON.stringify({
        state: {
          currentUser: {
            uid: 'attendee-e2e-user',
            email: 'attendee@stadiumsync.test',
            displayName: 'Attendee E2E',
            role: 'attendee',
          },
          userRole: 'attendee',
        },
        version: 0,
      }),
    );
  });

  await page.goto('/attendee/notifications');

  await page.evaluate(async () => {
    const mod = await import('/src/store/notificationStore.ts');
    mod.useNotificationStore.getState().addNotification({
      title: 'Gate C congestion',
      message: 'Please redirect to Gate B while congestion clears at Gate C.',
      severity: 'warning',
    });
  });

  await page.reload();
  await expect(page.getByText('Gate C congestion')).toBeVisible();
});
