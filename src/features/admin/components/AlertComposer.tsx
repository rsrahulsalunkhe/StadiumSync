import { Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertForm } from './AlertForm';

/**
 * AlertComposer Component
 * Renders the wrapper card for the alert composer form.
 */
export function AlertComposer() {
  return (
    <Card aria-labelledby="composer-heading">
      <CardHeader>
        <CardTitle id="composer-heading" className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-neon" aria-hidden="true" />
          Compose Broadcast Alert
        </CardTitle>
        <CardDescription>
          Send a push notification to all registered devices in the selected zones.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AlertForm />
      </CardContent>
    </Card>
  );
}
