# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendee-heatmap.spec.ts >> Attendee heatmap: click zone marker and verify InfoWindow content
- Location: e2e\attendee-heatmap.spec.ts:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[title*="North Stand"]').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('[title*="North Stand"]').first()

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
  4  | test('Attendee heatmap: click zone marker and verify InfoWindow content', async ({ page }) => {
  5  |   await seedAuth(page, 'attendee');
  6  |   await page.goto('/attendee/heatmap');
  7  | 
  8  |   const mapNotConfigured = page.getByText(/Google Maps is not configured/i);
  9  |   if (await mapNotConfigured.isVisible().catch(() => false)) {
  10 |     await expect(mapNotConfigured).toBeVisible();
  11 |     return;
  12 |   }
  13 | 
  14 |   const marker = page.locator('[title*="North Stand"]').first();
> 15 |   await expect(marker).toBeVisible();
     |                        ^ Error: expect(locator).toBeVisible() failed
  16 |   await marker.click();
  17 | 
  18 |   await expect(page.getByText(/Density/i).first()).toBeVisible();
  19 |   await expect(page.getByText(/Est\. wait|Est. wait/i).first()).toBeVisible();
  20 |   await expect(page.getByText(/Recommended/i).first()).toBeVisible();
  21 | });
  22 | 
```