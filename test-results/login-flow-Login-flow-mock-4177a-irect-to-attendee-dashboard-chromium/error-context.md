# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-flow.spec.ts >> Login flow: mock Google Sign-In and redirect to attendee dashboard
- Location: e2e\login-flow.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /Welcome back/i })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: /Welcome back/i })

```

# Page snapshot

```yaml
- generic [active]:
  - link "Skip to main content" [ref=e1] [cursor=pointer]:
    - /url: "#main-content"
  - generic:
    - region "Notifications (F8)":
      - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Login flow: mock Google Sign-In and redirect to attendee dashboard', async ({ page }) => {
  4  |   await page.goto('/login');
  5  |   await expect(page.getByRole('button', { name: /Sign in with Google/i })).toBeVisible();
  6  | 
  7  |   await page.getByRole('button', { name: /Sign in with Google/i }).click();
  8  | 
  9  |   await expect(page).toHaveURL(/\/attendee/);
> 10 |   await expect(page.getByRole('heading', { name: /Welcome back/i })).toBeVisible();
     |                                                                      ^ Error: expect(locator).toBeVisible() failed
  11 | });
  12 | 
```