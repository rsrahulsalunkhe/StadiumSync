import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { seedAuth } from './utils/auth';

async function assertNoSeriousOrCritical(pagePath: string, role: 'attendee' | 'staff' | 'admin' | null, page: import('@playwright/test').Page) {
  if (role) {
    await seedAuth(page, role);
  }

  await page.goto(pagePath);

  const results = await new AxeBuilder({ page }).analyze();
  const seriousOrCritical = results.violations.filter((v) =>
    v.impact === 'critical' || v.impact === 'serious',
  );

  expect(seriousOrCritical).toEqual([]);
}

test('Axe audit /login', async ({ page }) => {
  await assertNoSeriousOrCritical('/login', null, page);
});

test('Axe audit /attendee', async ({ page }) => {
  await assertNoSeriousOrCritical('/attendee', 'attendee', page);
});

test('Axe audit /staff', async ({ page }) => {
  await assertNoSeriousOrCritical('/staff', 'staff', page);
});

test('Axe audit /admin', async ({ page }) => {
  await assertNoSeriousOrCritical('/admin', 'admin', page);
});
