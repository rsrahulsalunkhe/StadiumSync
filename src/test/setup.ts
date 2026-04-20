import { afterEach, expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

Object.defineProperty(global, 'Notification', {
  writable: true,
  value: {
    requestPermission: vi.fn().mockResolvedValue('granted'),
    permission: 'granted',
  },
});

Object.defineProperty(navigator, 'serviceWorker', {
  writable: true,
  value: {
    register: vi.fn().mockResolvedValue({ scope: '/' }),
    ready: Promise.resolve({ scope: '/' }),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  },
});

const originalError = console.error;
afterEach(() => {
  cleanup();
  console.error = originalError;
});
