# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: incident-report.spec.ts >> Attendee submits incident report and sees tracking toast
- Location: e2e\incident-report.spec.ts:4:1

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: locator.click: Test timeout of 45000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Report an incident/i })

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
  4  | test('Attendee submits incident report and sees tracking toast', async ({ page }) => {
  5  |   await seedAuth(page, 'attendee');
  6  |   await page.goto('/attendee');
  7  | 
> 8  |   await page.getByRole('button', { name: /Report an incident/i }).click();
     |                                                                   ^ Error: locator.click: Test timeout of 45000ms exceeded.
  9  | 
  10 |   await page.locator('#inc-type').selectOption('medical');
  11 |   await page.locator('#inc-location').selectOption({ index: 1 });
  12 |   await page.locator('#inc-desc').fill('A fan has fainted near the gate and needs immediate medical assistance.');
  13 | 
  14 |   await page.getByRole('button', { name: /Submit Report|Send Report|Report Incident/i }).click();
  15 | 
  16 |   await expect(page.getByText(/Tracking ID:/i)).toBeVisible();
  17 | });
  18 | 
```