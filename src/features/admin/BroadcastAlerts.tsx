import { AlertComposer } from '@/components/alerts/AlertComposer';
import { AlertHistoryTable } from '@/components/alerts/AlertHistoryTable';

/**
 * Admin Broadcast Alerts page.
 *
 * Two-panel layout:
 *  - Top: AlertComposer — compose and send a new broadcast alert
 *  - Bottom: AlertHistoryTable — searchable, sortable, paginated history
 */
export default function BroadcastAlerts() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Broadcast Alerts</h1>
        <p className="mt-1 text-sm text-slate-400">
          Send push notifications to attendee devices and monitor delivery history.
        </p>
      </div>

      <AlertComposer />
      <AlertHistoryTable />
    </div>
  );
}
