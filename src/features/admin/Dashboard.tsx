import { Users, Ticket, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/router/routes';
import { clamp, occupancyColor } from '@/lib/utils';

const STATS = [
  { label: 'Total users', value: '3,841', delta: '+12 today', Icon: Users },
  { label: 'Tickets sold', value: '18,520', delta: '94% of capacity', Icon: Ticket },
  { label: 'Gates active', value: '8 / 10', delta: '2 closed', Icon: ShieldCheck },
  { label: 'Crowd density', value: '76%', delta: 'Moderate', Icon: BarChart3 },
];

const ZONE_DATA = [
  { name: 'North Stand', occupancy: 88 },
  { name: 'South Stand', occupancy: 72 },
  { name: 'East Wing', occupancy: 55 },
  { name: 'West Wing', occupancy: 91 },
  { name: 'VIP Lounge', occupancy: 40 },
];

const RECENT_EVENTS = [
  { id: 'e1', msg: 'Gate 3 reopened by staff', time: '18:55', type: 'info' as const },
  { id: 'e2', msg: 'West Wing reached 90% capacity', time: '18:48', type: 'warning' as const },
  { id: 'e3', msg: 'User ban: ticket fraud detected', time: '18:32', type: 'error' as const },
  { id: 'e4', msg: '500 new tickets validated', time: '18:15', type: 'info' as const },
];

const eventBadge: Record<'info' | 'warning' | 'error', 'secondary' | 'warning' | 'destructive'> =
  { info: 'secondary', warning: 'warning', error: 'destructive' };

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="mt-1 text-slate-400">Live overview — City FC vs United · 12 Apr 2026</p>
        </div>
        <Badge variant="success" className="animate-pulse-neon">
          LIVE
        </Badge>
      </div>

      {/* KPI stats */}
      <div
        role="list"
        aria-label="Key performance indicators"
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {STATS.map(({ label, value, delta, Icon }) => (
          <Card key={label} role="listitem">
            <CardContent className="flex items-start gap-3 p-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon/10"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5 text-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{delta}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Zone occupancy */}
        <Card aria-labelledby="zone-heading">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle id="zone-heading">Zone Occupancy</CardTitle>
              <CardDescription>Real-time capacity per zone</CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to={ROUTES.ADMIN_CROWD}>Full monitor</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ul role="list" className="space-y-3" aria-label="Zone occupancy breakdown">
              {ZONE_DATA.map(({ name, occupancy }) => {
                const pct = clamp(occupancy, 0, 100);
                return (
                  <li key={name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{name}</span>
                      <span className={`font-semibold ${occupancyColor(pct)}`}>
                        {pct}%
                      </span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuetext={`${pct}% occupied${pct >= 90 ? ' — critical' : pct >= 70 ? ' — elevated' : ''}`}
                      aria-label={`${name} occupancy`}
                      className="h-2 w-full rounded-full bg-navy-700"
                    >
                      <div
                        className={`h-2 rounded-full transition-all ${
                          pct >= 90
                            ? 'bg-red-500'
                            : pct >= 70
                              ? 'bg-amber-400'
                              : 'bg-neon'
                        }`}
                        style={{ width: `${pct}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        {/* Activity log */}
        <Card aria-labelledby="activity-heading">
          <CardHeader>
            <CardTitle id="activity-heading">Recent Activity</CardTitle>
            <CardDescription>System events from the last hour</CardDescription>
          </CardHeader>
          <CardContent>
            <ul role="list" className="space-y-3" aria-label="Activity log">
              {RECENT_EVENTS.map(({ id, msg, time, type }) => (
                <li key={id} className="flex items-start justify-between gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge variant={eventBadge[type]} className="mt-0.5 shrink-0">
                      {type}
                    </Badge>
                    <span className="text-slate-300">{msg}</span>
                  </div>
                  <time
                    dateTime={time}
                    className="shrink-0 text-xs text-slate-500"
                  >
                    {time}
                  </time>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link to={ROUTES.ADMIN_USERS}>
            <Users className="mr-2 h-4 w-4" aria-hidden="true" />
            Manage Users
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to={ROUTES.ADMIN_CROWD}>
            <BarChart3 className="mr-2 h-4 w-4" aria-hidden="true" />
            Crowd Monitor
          </Link>
        </Button>
      </div>
    </div>
  );
}
