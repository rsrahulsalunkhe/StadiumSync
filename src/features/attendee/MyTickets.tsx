import { useState } from 'react';
import { QrCode, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

type TicketStatus = 'upcoming' | 'used' | 'expired';

interface Ticket {
  id: string;
  eventName: string;
  date: string;
  venue: string;
  seat: string;
  status: TicketStatus;
  barcode: string;
}

const MOCK_TICKETS: Ticket[] = [
  {
    id: 't1',
    eventName: 'City FC vs United',
    date: '2026-04-12T19:00:00Z',
    venue: 'National Stadium · Gate C',
    seat: 'Block B · Row 14 · Seat 7',
    status: 'upcoming',
    barcode: 'SST-20260412-B14-7',
  },
  {
    id: 't2',
    eventName: 'All-Star Showcase',
    date: '2026-04-19T15:30:00Z',
    venue: 'Arena North · Gate A',
    seat: 'VIP Box 3 · Seat 2',
    status: 'upcoming',
    barcode: 'SST-20260419-VIP3-2',
  },
  {
    id: 't3',
    eventName: 'Youth Cup Final',
    date: '2026-03-08T13:00:00Z',
    venue: 'Central Ground · Gate B',
    seat: 'Block D · Row 2 · Seat 11',
    status: 'used',
    barcode: 'SST-20260308-D2-11',
  },
];

const statusConfig: Record<TicketStatus, { label: string; variant: 'success' | 'secondary' | 'warning' }> = {
  upcoming: { label: 'Upcoming', variant: 'success' },
  used: { label: 'Used', variant: 'secondary' },
  expired: { label: 'Expired', variant: 'warning' },
};

export default function MyTickets() {
  const [activeTicket, setActiveTicket] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">My Tickets</h1>
        <p className="mt-1 text-slate-400">
          {MOCK_TICKETS.filter((t) => t.status === 'upcoming').length} upcoming ·{' '}
          {MOCK_TICKETS.filter((t) => t.status === 'used').length} used
        </p>
      </div>

      <ul role="list" className="space-y-4" aria-label="Your tickets">
        {MOCK_TICKETS.map((ticket) => {
          const { label, variant } = statusConfig[ticket.status];
          const isExpanded = activeTicket === ticket.id;

          return (
            <li key={ticket.id}>
              <Card
                className={
                  ticket.status === 'upcoming'
                    ? 'border-neon/30 shadow-[0_0_0_1px_rgba(0,255,136,0.15)]'
                    : ''
                }
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{ticket.eventName}</CardTitle>
                    <Badge variant={variant}>{label}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <dl className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                      <dt className="sr-only">Date</dt>
                      <dd className="text-slate-300">{formatDate(ticket.date)}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                      <dt className="sr-only">Venue</dt>
                      <dd className="text-slate-300">{ticket.venue}</dd>
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2">
                      {ticket.status === 'used' ? (
                        <CheckCircle className="h-4 w-4 shrink-0 text-neon" aria-hidden="true" />
                      ) : (
                        <Clock className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                      )}
                      <dt className="sr-only">Seat</dt>
                      <dd className="font-medium text-slate-200">{ticket.seat}</dd>
                    </div>
                  </dl>

                  {ticket.status === 'upcoming' && (
                    <Button
                      variant="outline"
                      size="sm"
                      aria-expanded={isExpanded}
                      aria-controls={`qr-${ticket.id}`}
                      onClick={() =>
                        setActiveTicket(isExpanded ? null : ticket.id)
                      }
                    >
                      <QrCode className="mr-2 h-4 w-4" aria-hidden="true" />
                      {isExpanded ? 'Hide QR code' : 'Show QR code'}
                    </Button>
                  )}

                  {isExpanded && (
                    <div
                      id={`qr-${ticket.id}`}
                      role="region"
                      aria-label={`QR code for ${ticket.eventName}`}
                      className="rounded-lg border border-navy-600 bg-white p-4 text-center"
                    >
                      {/* Placeholder QR — replace with a real QR library in production */}
                      <div
                        className="mx-auto grid h-32 w-32 grid-cols-8 grid-rows-8 gap-px"
                        aria-hidden="true"
                      >
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={
                              (i + Math.floor(i / 8)) % 3 === 0
                                ? 'bg-navy-950'
                                : 'bg-white'
                            }
                          />
                        ))}
                      </div>
                      <p className="mt-2 font-mono text-xs text-navy-900">
                        {ticket.barcode}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
