interface MapLegendProps {
  className?: string;
}

const LEGEND_ITEMS = [
  { label: 'Low  (0–33%)',    from: '#00ff88', to: '#00ff88' },
  { label: 'Medium (34–66%)', from: '#fbbf24', to: '#fbbf24' },
  { label: 'High  (67–100%)', from: '#ef4444', to: '#ef4444' },
] as const;

/**
 * Explains the green→yellow→red heatmap colour scale to the user.
 * Positioned as an overlay on top of the map container.
 */
export function MapLegend({ className }: MapLegendProps) {
  return (
    <figure
      className={className}
      aria-label="Heatmap colour scale legend"
      role="figure"
    >
      <figcaption className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
        Crowd density
      </figcaption>

      {/* Continuous gradient bar */}
      <div
        aria-hidden="true"
        className="mb-1.5 h-2.5 w-full rounded-full"
        style={{
          background: 'linear-gradient(to right, #00ff88, #fbbf24, #ef4444)',
        }}
      />

      {/* Labels below the bar */}
      <div className="flex justify-between text-[10px] text-slate-400" aria-hidden="true">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>

      {/* Screen-reader text describing each band */}
      <ul className="sr-only">
        {LEGEND_ITEMS.map(({ label }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </figure>
  );
}
