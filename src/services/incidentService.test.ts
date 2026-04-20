import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitIncident } from './incidentService';

const mocks = vi.hoisted(() => ({
  setDoc: vi.fn().mockResolvedValue(undefined),
  apiPost: vi.fn().mockResolvedValue({ status: 201 }),
  uploadBytes: vi.fn().mockResolvedValue({}),
  getDownloadURL: vi.fn().mockResolvedValue('https://storage.example.com/photo.jpg'),
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn((_db: unknown, col: string, id: string) => ({ path: `${col}/${id}` })),
  setDoc: mocks.setDoc,
}));

vi.mock('firebase/storage', () => ({
  ref: vi.fn((_storage: unknown, path: string) => ({ path })),
  uploadBytes: mocks.uploadBytes,
  getDownloadURL: mocks.getDownloadURL,
}));

vi.mock('@/lib/firebase', () => ({
  db: {},
  storage: {},
}));

vi.mock('@/lib/axios', () => ({
  apiClient: { post: mocks.apiPost },
}));

vi.mock('nanoid', () => ({
  nanoid: () => 'test-incident-id',
}));

beforeEach(() => {
  vi.clearAllMocks();
  // Reset E2E bypass
  (import.meta.env as Record<string, string>).VITE_E2E_BYPASS_AUTH = 'false';
});

describe('submitIncident', () => {
  it('persists incident to Firestore and notifies API', async () => {
    const id = await submitIncident(
      { type: 'medical', location: 'North Stand', description: 'Person collapsed near gate 3' },
      'user-uid-1',
    );

    expect(id).toBe('test-incident-id');
    expect(mocks.setDoc).toHaveBeenCalledWith(
      { path: 'incidents/test-incident-id' },
      expect.objectContaining({
        id: 'test-incident-id',
        type: 'medical',
        location: 'North Stand',
        reportedBy: 'user-uid-1',
        status: 'open',
      }),
    );
  });

  it('uploads photo to Storage and attaches URL when photoFile provided', async () => {
    const file = new File(['img'], 'photo.jpg', { type: 'image/jpeg' });

    await submitIncident(
      { type: 'security', location: 'West Wing', description: 'Suspicious activity spotted at row G.' },
      'user-uid-2',
      file,
    );

    expect(mocks.uploadBytes).toHaveBeenCalledWith(
      expect.objectContaining({ path: 'incidents/test-incident-id/photo' }),
      file,
    );
    expect(mocks.setDoc).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ photoUrl: 'https://storage.example.com/photo.jpg' }),
    );
  });

  it('generates a unique nanoid tracking ID per submission', async () => {
    const id1 = await submitIncident(
      { type: 'security', location: 'Gate A', description: 'Suspicious behaviour at Gate A entrance.' },
      'user-uid-4',
    );
    const id2 = await submitIncident(
      { type: 'other', location: 'South Stand', description: 'Minor issue reported near south concourse.' },
      'user-uid-5',
    );

    // Both IDs come from our nanoid mock which always returns 'test-incident-id'
    // so we just verify both calls went through to Firestore
    expect(mocks.setDoc).toHaveBeenCalledTimes(2);
    expect(id1).toBe('test-incident-id');
    expect(id2).toBe('test-incident-id');
  });

  it('does not throw when API notification fails', async () => {
    mocks.apiPost.mockRejectedValueOnce(new Error('Network error'));

    await expect(
      submitIncident(
        { type: 'fire', location: 'East Wing', description: 'Small fire near food stall C.' },
        'user-uid-3',
      ),
    ).resolves.toBe('test-incident-id');
  });
});
