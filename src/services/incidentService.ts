import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { nanoid } from 'nanoid';
import { db, storage } from '@/lib/firebase';
import { apiClient } from '@/lib/axios';
import type { Incident, IncidentType } from '@/types/incident';

const E2E_BYPASS = import.meta.env.VITE_E2E_BYPASS_AUTH === 'true';

export interface IncidentFormValues {
  type: IncidentType;
  location: string;
  description: string;
}

/**
 * Submits an incident report.
 *
 * 1. Generates a nanoid tracking ID.
 * 2. Optionally uploads the photo to Firebase Storage.
 * 3. Writes the incident document to Firestore `incidents/{id}`.
 * 4. POSTs to the Cloud Run `POST /api/incidents` endpoint.
 *
 * @returns The generated incident tracking ID.
 */
export async function submitIncident(
  values: IncidentFormValues,
  reportedBy: string,
  photoFile?: File,
): Promise<string> {
  if (E2E_BYPASS) {
    return `e2e-${nanoid(8)}`;
  }

  const id = nanoid(10);

  // Build the Firestore document
  const incident: Incident = {
    id,
    type: values.type,
    location: values.location,
    description: values.description,
    reportedBy,
    createdAt: new Date().toISOString(),
    status: 'open',
  };

  // Upload photo to Firebase Storage (if provided)
  if (photoFile) {
    const storageRef = ref(storage, `incidents/${id}/photo`);
    await uploadBytes(storageRef, photoFile);
    const photoUrl = await getDownloadURL(storageRef);
    incident.photoUrl = photoUrl;
  }

  // Write to Firestore
  await setDoc(doc(db, 'incidents', id), incident);

  // Notify Cloud Run backend (fire-and-forget — don't block UI on this)
  apiClient.post('/api/incidents', incident).catch((err: unknown) => {
    console.error('[incidentService] API notification failed:', err);
  });

  return id;
}
