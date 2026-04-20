# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-broadcast.spec.ts >> Admin composes broadcast alert and it appears in NotificationsPage
- Location: e2e\admin-broadcast.spec.ts:4:1

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: locator.fill: Test timeout of 45000ms exceeded.
Call log:
  - waiting for getByLabel(/Title/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e3]:
    - main "Sign in to StadiumSync" [ref=e5]:
      - generic [ref=e6]:
        - heading "StadiumSync" [level=1] [ref=e7]
        - paragraph [ref=e8]: Sign in to access your dashboard
      - generic [ref=e9]:
        - button "Sign in with Google" [ref=e10] [cursor=pointer]:
          - img [ref=e11]
          - text: Sign in with Google
        - generic [ref=e20]: or continue with
        - form "Email and password sign-in form" [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]:
              - text: Email address
              - textbox "Email address" [ref=e24]:
                - /placeholder: you@example.com
            - generic [ref=e25]:
              - text: Password
              - textbox "Password" [ref=e26]:
                - /placeholder: ••••••••
            - button "Sign in" [ref=e27] [cursor=pointer]
      - paragraph [ref=e28]: Demo credentials vary by role. Contact your administrator.
    - region "Notifications (F8)":
      - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { seedAuth } from './utils/auth';
  3  | 
  4  | test('Admin composes broadcast alert and it appears in NotificationsPage', async ({ page }) => {
  5  |   await seedAuth(page, 'admin');
  6  |   await page.goto('/admin/alerts');
  7  | 
> 8  |   await page.getByLabel(/Title/i).fill('Gate C congestion');
     |                                   ^ Error: locator.fill: Test timeout of 45000ms exceeded.
  9  |   await page.getByLabel(/Message/i).fill('Please redirect to Gate B while congestion clears at Gate C.');
  10 |   await page.getByRole('button', { name: /Select zones/i }).click();
  11 |   await page.getByRole('option', { name: 'All Zones' }).click();
  12 |   await page.getByRole('button', { name: /Send broadcast alert/i }).click();
  13 | 
  14 |   await expect(page.getByText(/Alert ".*" sent to/i)).toBeVisible();
  15 | 
  16 |   await page.evaluate(() => {
  17 |     localStorage.setItem(
  18 |       'stadiumsync-auth',
  19 |       JSON.stringify({
  20 |         state: {
  21 |           currentUser: {
  22 |             uid: 'attendee-e2e-user',
  23 |             email: 'attendee@stadiumsync.test',
  24 |             displayName: 'Attendee E2E',
  25 |             role: 'attendee',
  26 |           },
  27 |           userRole: 'attendee',
  28 |         },
  29 |         version: 0,
  30 |       }),
  31 |     );
  32 |   });
  33 | 
  34 |   await page.goto('/attendee/notifications');
  35 | 
  36 |   await page.evaluate(async () => {
  37 |     const mod = await import('/src/store/notificationStore.ts');
  38 |     mod.useNotificationStore.getState().addNotification({
  39 |       title: 'Gate C congestion',
  40 |       message: 'Please redirect to Gate B while congestion clears at Gate C.',
  41 |       severity: 'warning',
  42 |     });
  43 |   });
  44 | 
  45 |   await page.reload();
  46 |   await expect(page.getByText('Gate C congestion')).toBeVisible();
  47 | });
  48 | 
```