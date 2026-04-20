/**
 * WCAG 2.4.1 – Bypass Blocks
 * Renders a visually hidden "Skip to main content" link that becomes visible
 * on keyboard focus. Placed as the very first focusable element in the DOM.
 */
export function SkipNav() {
  return (
    <a
      href="#main-content"
      className={[
        // Hidden until focused
        'sr-only focus:not-sr-only',
        // Visible style when focused
        'focus:fixed focus:top-2 focus:left-2 focus:z-[9999]',
        'focus:rounded focus:bg-neon focus:px-4 focus:py-2',
        'focus:text-navy-950 focus:font-semibold focus:outline-none',
        'focus:ring-2 focus:ring-navy-950 focus:ring-offset-2',
      ].join(' ')}
    >
      Skip to main content
    </a>
  );
}
