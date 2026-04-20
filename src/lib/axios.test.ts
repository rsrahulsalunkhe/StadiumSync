import { describe, it, expect, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getIdToken: vi.fn().mockResolvedValue('mock-token-123'),
}));

vi.mock('@/lib/firebase', () => ({
  auth: {
    currentUser: {
      getIdToken: mocks.getIdToken,
    },
  },
}));

vi.mock('react-hot-toast', () => ({
  default: {
    error: vi.fn(),
  },
}));

describe('apiClient request interceptor', () => {
  it('attaches Authorization header when Firebase user exists', async () => {
    const { apiClient } = await import('./axios');

    const requestHandler = (apiClient.interceptors.request as unknown as { handlers: Array<{ fulfilled: (config: any) => Promise<any> }> }).handlers[0].fulfilled;

    const result = await requestHandler({ headers: {} });

    expect(mocks.getIdToken).toHaveBeenCalled();
    expect(result.headers.Authorization).toBe('Bearer mock-token-123');
  });
});
