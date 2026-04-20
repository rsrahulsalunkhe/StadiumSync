import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clamp, occupancyColor } from '@/lib/utils';
import type { CrowdSnapshot } from '@/types/crowd';

export interface ZoneControlProps {
  snapshot: CrowdSnapshot;
}

export function ZoneControl({ snapshot }: ZoneControlProps) {
  return (
    <Card aria-labelledby="zones-heading">
      <CardHeader>
        <CardTitle id="zones-heading">Zone Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ul role="list" className="space-y-4" aria-label="Zone occupancy details">
          {snapshot.zones.map((zone) => {
            const pct = clamp(zone.occupancyPercent, 0, 100);
            return (
              <li key={zone.zoneId}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-300">{zone.zoneName}</span>
                  <span className="text-slate-400 text-xs">
                    {zone.current.toLocaleString()} / {zone.capacity.toLocaleString()}
                    <span className={`ml-2 font-bold ${occupancyColor(pct)}`}>
                      {pct}%
                    </span>
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${zone.zoneName} occupancy`}
                  className="h-2.5 w-full rounded-full bg-navy-700"
                >
                  <div
                    aria-hidden="true"
                    className={`h-2.5 rounded-full transition-all ${
                      pct >= 90 ? 'bg-red-500' : pct >= 70 ? 'bg-amber-400' : 'bg-neon'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
