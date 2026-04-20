import React, { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// ── Wrapper with Router + Toast ───────────────────────────────────────────────

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  routerProps?: MemoryRouterProps;
}

function AllProviders({
  children,
  routerProps,
}: {
  children: ReactNode;
  routerProps?: MemoryRouterProps;
}) {
  return (
    <MemoryRouter {...routerProps}>
      {children}
      <Toaster />
    </MemoryRouter>
  );
}

export function renderWithRouter(
  ui: React.ReactElement,
  { routerProps, ...renderOptions }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders routerProps={routerProps}>{children}</AllProviders>
    ),
    ...renderOptions,
  });
}

// Re-export RTL utilities so tests import from one place
export { screen, waitFor, act, fireEvent, within } from '@testing-library/react';
export { renderHook, act as actHook } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
