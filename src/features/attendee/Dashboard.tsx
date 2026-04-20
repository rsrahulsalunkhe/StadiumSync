import { useState } from 'react';
import { Ticket, MapPin, Bell, Calendar, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IncidentSheet } from '@/components/incident/IncidentSheet';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/router/routes';
import { cn } from '@/lib/utils';

const upcomingEvent = {
  name: 'City FC vs United',
  date: 'Sat 12 Apr 2026 · 19:00',
  venue: 'National Stadium, Gate C',
  seat: 'Block B · Row 14 · Seat 7',
};

export default function AttendeeDashboard() {
  const { currentUser: user } = useAuth();
  const [incidentOpen, setIncidentOpen] = useState(false);

  return (
    <div className="relative space-y-6 animate-fade-in">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, {user?.displayName ?? 'Fan'}!
        </h1>
        <p className="mt-1 text-slate-400">Here's what's happening at your next event.</p>
      </div>

      {/* Stats row */}
      <div
        role="list"
        aria-label="Your stats"
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {[
          { label: 'Upcoming events', value: '1', Icon: Calendar },
          { label: 'Active tickets', value: '2', Icon: Ticket },
          { label: 'Saved seats', value: '5', Icon: MapPin },
          { label: 'Alerts', value: '3', Icon: Bell },
        ].map(({ label, value, Icon }) => (
          <Card key={label} role="listitem">
            <CardContent className="flex items-center gap-3 p-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon/10"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5 text-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Next event */}
      <Card aria-labelledby="next-event-heading">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardTitle id="next-event-heading">Next Event</CardTitle>
              <CardDescription>Your upcoming match ticket</CardDescription>
            </div>
            <Badge variant="success">Confirmed</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-lg font-semibold text-white">{upcomingEvent.name}</p>
          <dl className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
            {[
              { term: 'Date & Time', detail: upcomingEvent.date },
              { term: 'Venue', detail: upcomingEvent.venue },
              { term: 'Seat', detail: upcomingEvent.seat },
            ].map(({ term, detail }) => (
              <div key={term} className="flex gap-1.5">
                <dt className="text-slate-500">{term}:</dt>
                <dd className="font-medium text-slate-200">{detail}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="outline" size="sm" className="mt-2">
            <Link to={ROUTES.ATTENDEE_TICKETS}>View all tickets</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Floating Action Button — Report Incident */}
      <button
        type="button"
        onClick={() => setIncidentOpen(true)}
        aria-label="Report an incident"
        className={cn(
          'fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full shadow-lg',
          'bg-amber-500 text-white hover:bg-amber-400 active:scale-95',
          'transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-navy-950',
        )}
      >
        <AlertTriangle className="h-6 w-6" aria-hidden="true" />
      </button>

      <IncidentSheet open={incidentOpen} onOpenChange={setIncidentOpen} />
    </div>
  );
}
