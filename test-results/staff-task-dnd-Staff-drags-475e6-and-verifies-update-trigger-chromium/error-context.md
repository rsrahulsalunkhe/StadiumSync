# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staff-task-dnd.spec.ts >> Staff drags task from Unassigned to In Progress and verifies update trigger
- Location: e2e\staff-task-dnd.spec.ts:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel(/Task: /).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByLabel(/Task: /).first()

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
  4  | test('Staff drags task from Unassigned to In Progress and verifies update trigger', async ({ page }) => {
  5  |   await seedAuth(page, 'staff');
  6  |   await page.goto('/staff/tasks');
  7  | 
  8  |   const sourceCard = page.getByLabel(/Task: /).first();
  9  |   const targetColumn = page.getByLabel(/In Progress column/i);
  10 | 
> 11 |   await expect(sourceCard).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  12 |   await expect(targetColumn).toBeVisible();
  13 | 
  14 |   await sourceCard.dragTo(targetColumn);
  15 | 
  16 |   const updateCalled = await page.evaluate(() => {
  17 |     return (window as Window & { __e2eFirestoreUpdateCalled?: boolean }).__e2eFirestoreUpdateCalled === true;
  18 |   });
  19 | 
  20 |   expect(updateCalled).toBe(true);
  21 | });
  22 | 
```