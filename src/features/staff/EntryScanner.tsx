import { useState, useRef, useId } from 'react';
import { ScanLine, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ScanResult = 'idle' | 'valid' | 'invalid' | 'scanning';

interface ScanRecord {
  id: string;
  barcode: string;
  result: 'valid' | 'invalid';
  time: string;
  name?: string;
}

// Simulated validation — replace with real API call
function validateBarcode(code: string): Promise<{ valid: boolean; name?: string }> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const valid = code.startsWith('SST-') && code.length >= 16;
      if (valid) {
        resolve({ valid, name: 'Jane Smith · Block B, Row 14' });
      } else {
        resolve({ valid });
      }
    }, 600),
  );
}

export default function EntryScanner() {
  const [barcodeInput, setBarcodeInput] = useState('');
  const [scanStatus, setScanStatus] = useState<ScanResult>('idle');
  const [lastScan, setLastScan] = useState<{ valid: boolean; name?: string } | null>(null);
  const [history, setHistory] = useState<ScanRecord[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRegionId = useId();
  const inputId = useId();

  const handleScan = async () => {
    const code = barcodeInput.trim();
    if (!code) return;

    setScanStatus('scanning');
    const result = await validateBarcode(code);
    const record: ScanRecord = {
      id: `${Date.now()}`,
      barcode: code,
      result: result.valid ? 'valid' : 'invalid',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      ...(result.name ? { name: result.name } : {}),
    };

    setLastScan(result);
    setScanStatus(result.valid ? 'valid' : 'invalid');
    setHistory((prev) => [record, ...prev].slice(0, 20));
    setBarcodeInput('');

    // Auto-focus input for rapid sequential scanning
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleReset = () => {
    setScanStatus('idle');
    setLastScan(null);
    setBarcodeInput('');
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Entry Scanner</h1>
        <p className="mt-1 text-slate-400">Scan or type a ticket barcode to validate entry.</p>
      </div>

      {/* Scanner card */}
      <Card aria-labelledby="scanner-heading">
        <CardHeader>
          <CardTitle id="scanner-heading" className="flex items-center gap-2">
            <ScanLine className="h-5 w-5 text-neon" aria-hidden="true" />
            Ticket Validation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input */}
          <div className="space-y-1.5">
            <Label htmlFor={inputId}>Barcode / ticket ID</Label>
            <div className="flex gap-2">
              <Input
                id={inputId}
                ref={inputRef}
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') void handleScan();
                }}
                placeholder="SST-YYYYMMDD-BLOCK-SEAT"
                autoComplete="off"
                autoFocus
                aria-describedby={resultRegionId}
                disabled={scanStatus === 'scanning'}
              />
              <Button
                onClick={() => void handleScan()}
                disabled={!barcodeInput.trim() || scanStatus === 'scanning'}
                aria-busy={scanStatus === 'scanning'}
                className="shrink-0"
              >
                {scanStatus === 'scanning' ? 'Checking…' : 'Validate'}
              </Button>
            </div>
          </div>

          {/* Result display */}
          <div
            id={resultRegionId}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={cn(
              'rounded-lg border p-4 transition-all',
              scanStatus === 'valid' && 'border-emerald-500/40 bg-emerald-950/50',
              scanStatus === 'invalid' && 'border-red-500/40 bg-red-950/50',
              scanStatus === 'idle' && 'border-navy-700 bg-navy-800',
              scanStatus === 'scanning' && 'border-neon/30 bg-navy-800',
            )}
          >
            {scanStatus === 'idle' && (
              <p className="text-center text-sm text-slate-500">
                Scan result will appear here
              </p>
            )}
            {scanStatus === 'scanning' && (
              <p className="text-center text-sm text-neon">Validating…</p>
            )}
            {(scanStatus === 'valid' || scanStatus === 'invalid') && lastScan && (
              <div className="flex items-center gap-3">
                {lastScan.valid ? (
                  <CheckCircle2
                    className="h-8 w-8 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                ) : (
                  <XCircle className="h-8 w-8 shrink-0 text-red-400" aria-hidden="true" />
                )}
                <div>
                  <p
                    className={`font-semibold ${lastScan.valid ? 'text-emerald-300' : 'text-red-300'}`}
                  >
                    {lastScan.valid ? 'Entry Granted' : 'Entry Denied'}
                  </p>
                  {lastScan.name && (
                    <p className="text-sm text-slate-400">{lastScan.name}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Reset scanner"
                  onClick={handleReset}
                  className="ml-auto"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Scan history */}
      {history.length > 0 && (
        <Card aria-labelledby="scan-history-heading">
          <CardHeader>
            <CardTitle id="scan-history-heading">
              Scan History
              <span className="ml-2 text-sm font-normal text-slate-400">
                ({history.length} scans this session)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm" aria-label="Scan history">
              <thead>
                <tr className="border-b border-navy-700 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th scope="col" className="pb-2 font-medium">Barcode</th>
                  <th scope="col" className="pb-2 font-medium">Time</th>
                  <th scope="col" className="pb-2 font-medium">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800">
                {history.map(({ id, barcode, time, result }) => (
                  <tr key={id}>
                    <td className="py-2 font-mono text-xs text-slate-300">{barcode}</td>
                    <td className="py-2 text-slate-400">{time}</td>
                    <td className="py-2">
                      <Badge variant={result === 'valid' ? 'success' : 'destructive'}>
                        {result === 'valid' ? 'Valid' : 'Invalid'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
