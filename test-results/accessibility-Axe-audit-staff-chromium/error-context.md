# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Axe audit /staff
- Location: e2e\accessibility.spec.ts:28:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 93

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0d1b2a",
+               "contrastRatio": 3.65,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.65 (foreground color: #64748b, background color: #0d1b2a, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"bg-navy-900 px-2 text-slate-500\">or continue with</span>",
+                 "target": Array [
+                   ".px-2",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.65 (foreground color: #64748b, background color: #0d1b2a, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"bg-navy-900 px-2 text-slate-500\">or continue with</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0a0f1e",
+               "contrastRatio": 4.01,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#64748b",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.01 (foreground color: #64748b, background color: #0a0f1e, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex min-h-screen items-center justify-center bg-navy-950 px-4\">",
+                 "target": Array [
+                   ".min-h-screen",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.01 (foreground color: #64748b, background color: #0a0f1e, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-4 text-center text-xs text-slate-500\">Demo credentials vary by role. Contact your administrator.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-4",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
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
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | import { seedAuth } from './utils/auth';
  4  | 
  5  | async function assertNoSeriousOrCritical(pagePath: string, role: 'attendee' | 'staff' | 'admin' | null, page: import('@playwright/test').Page) {
  6  |   if (role) {
  7  |     await seedAuth(page, role);
  8  |   }
  9  | 
  10 |   await page.goto(pagePath);
  11 | 
  12 |   const results = await new AxeBuilder({ page }).analyze();
  13 |   const seriousOrCritical = results.violations.filter((v) =>
  14 |     v.impact === 'critical' || v.impact === 'serious',
  15 |   );
  16 | 
> 17 |   expect(seriousOrCritical).toEqual([]);
     |                             ^ Error: expect(received).toEqual(expected) // deep equality
  18 | }
  19 | 
  20 | test('Axe audit /login', async ({ page }) => {
  21 |   await assertNoSeriousOrCritical('/login', null, page);
  22 | });
  23 | 
  24 | test('Axe audit /attendee', async ({ page }) => {
  25 |   await assertNoSeriousOrCritical('/attendee', 'attendee', page);
  26 | });
  27 | 
  28 | test('Axe audit /staff', async ({ page }) => {
  29 |   await assertNoSeriousOrCritical('/staff', 'staff', page);
  30 | });
  31 | 
  32 | test('Axe audit /admin', async ({ page }) => {
  33 |   await assertNoSeriousOrCritical('/admin', 'admin', page);
  34 | });
  35 | 
```