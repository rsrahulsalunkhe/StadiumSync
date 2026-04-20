import { doc, setDoc, collection } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { db } from '@/lib/firebase';
import { apiClient } from '@/lib/axios';
import type { Alert, AlertSeverity } from '@/types/alert';

const E2E_BYPASS = import.meta.env.VITE_E2E_BYPASS_AUTH === 'true';

export interface AlertFormValues {
  title: string;
  message: string;
  severity: AlertSeverity;
  targetZones: string[];
  scheduledAt?: string; // datetime-local string from the input
}

/**
 * Broadcasts an alert:
 *  1. Writes to Firestore `alerts/{id}`.
 *  2. POSTs to `POST /api/alerts` — Cloud Run sends FCM to all subscribers.
 *
 * @returns The created `Alert` document.
 */
export async function broadcastAlert(
  values: AlertFormValues,
  sentBy: string,
  sentByUid: string,
): Promise<Alert> {
  if (E2E_BYPASS) {
    const id = nanoid(10);
    const alert: Alert = {
      id,
      title: values.title,
      message: values.message,
      severity: values.severity,
      targetZones: values.targetZones,
      sentBy,
      sentByUid,
      sentAt: new Date().toISOString(),
      fcmSent: true,
    };
    return alert;
  }

  const id = nanoid(10);

  const alert: Alert = {
    id,
    title: values.title,
    message: values.message,
    severity: values.severity,
    targetZones: values.targetZones,
    sentBy,
    sentByUid,
    sentAt: new Date().toISOString(),
    fcmSent: false,
  };

  // Attach scheduled time if provided (convert local datetime-local to ISO)
  if (values.scheduledAt) {
    alert.scheduledAt = new Date(values.scheduledAt).toISOString();
  }

  // Write to Firestore first so the record exists even if API call fails
  await setDoc(doc(collection(db, 'alerts'), id), alert);

  // Trigger FCM push via Cloud Run
  try {
    await apiClient.post('/api/alerts', alert);
    // Mark fcmSent=true after successful API call
    await setDoc(doc(collection(db, 'alerts'), id), { fcmSent: true }, { merge: true });
    alert.fcmSent = true;
  } catch (err) {
    console.error('[alertService] API push failed — FCM may not have been sent:', err);
    // Alert is still in Firestore; fcmSent remains false
  }

  return alert;
}
