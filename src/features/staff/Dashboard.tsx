import { ScanLine, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/router/routes';

const recentScans = [
  { id: 's1', barcode: 'SST-20260412-B14-7', time: '18:42', status: 'valid' as const },
  { id: 's2', barcode: 'SST-20260412-A3-12', time: '18:41', status: 'valid' as const },
  { id: 's3', barcode: 'SST-20260412-VIP1-4', time: '18:40', status: 'invalid' as const },
  { id: 's4', barcode: 'SST-20260412-C7-9', time: '18:39', status: 'valid' as const },
];

export default function StaffDashboard() {
  const { currentUser: user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Staff Dashboard</h1>
        <p className="mt-1 text-slate-400">
          Hello, {user?.displayName ?? 'Staff'} — Gate C · Shift 18:00–22:00
        </p>
      </div>

      {/* Quick stats */}
      <div
        role="list"
        aria-label="Shift statistics"
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {[
          { label: 'Scanned today', value: '1,248', Icon: ScanLine, color: 'text-neon' },
          { label: 'Valid entries', value: '1,231', Icon: CheckCircle2, color: 'text-emerald-400' },
          { label: 'Invalid attempts', value: '17', Icon: AlertTriangle, color: 'text-amber-400' },
          { label: 'Gate capacity', value: '74%', Icon: Users, color: 'text-blue-400' },
        ].map(({ label, value, Icon, color }) => (
          <Card key={label} role="listitem">
            <CardContent className="flex items-center gap-3 p-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-800"
                aria-hidden="true"
              >
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scanner CTA */}
      <Card className="border-neon/30 bg-gradient-to-r from-navy-800 to-navy-900">
        <CardContent className="flex items-center justify-between gap-4 p-6">
          <div>
            <p className="font-semibold text-white">Entry Scanner</p>
            <p className="text-sm text-slate-400">
              Scan attendee tickets at your gate
            </p>
          </div>
          <Button asChild size="lg">
            <Link to={ROUTES.STAFF_SCANNER}>
              <ScanLine className="mr-2 h-5 w-5" aria-hidden="true" />
              Open Scanner
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent scans */}
      <Card aria-labelledby="recent-scans-heading">
        <CardHeader>
          <CardTitle id="recent-scans-heading">Recent Scans</CardTitle>
          <CardDescription>Last 4 ticket validations at your gate</CardDescription>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm" aria-label="Recent scan results">
            <thead>
              <tr className="border-b border-navy-700 text-left text-xs uppercase tracking-wider text-slate-500">
                <th scope="col" className="pb-2 font-medium">Barcode</th>
                <th scope="col" className="pb-2 font-medium">Time</th>
                <th scope="col" className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800">
              {recentScans.map(({ id, barcode, time, status }) => (
                <tr key={id}>
                  <td className="py-2 font-mono text-slate-300">{barcode}</td>
                  <td className="py-2 text-slate-400">{time}</td>
                  <td className="py-2">
                    <Badge variant={status === 'valid' ? 'success' : 'destructive'}>
                      {status === 'valid' ? 'Valid' : 'Invalid'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
