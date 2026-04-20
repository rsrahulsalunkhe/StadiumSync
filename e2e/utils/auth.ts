import type { Page } from '@playwright/test';

type Role = 'attendee' | 'staff' | 'admin';

export async function seedAuth(page: Page, role: Role) {
  await page.addInitScript((seedRole: Role) => {
    const now = Date.now();
    const data = {
      state: {
        currentUser: {
          uid: `${seedRole}-e2e-user`,
          email: `${seedRole}@stadiumsync.test`,
          displayName: `${seedRole[0].toUpperCase()}${seedRole.slice(1)} E2E`,
          role: seedRole,
        },
        userRole: seedRole,
      },
      version: 0,
    };

    localStorage.setItem('stadiumsync-auth', JSON.stringify(data));
    localStorage.setItem('e2e-seeded-at', String(now));
  }, role);
}
