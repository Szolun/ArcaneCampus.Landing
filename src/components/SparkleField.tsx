import type { CSSProperties } from 'react'

const sparkles = Array.from({ length: 22 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280
  const r = seed / 233280
  return {
    left: `${(i * 37 + r * 20) % 100}%`,
    size: 2 + Math.round(r * 4),
    dur: `${9 + ((i * 7) % 9)}s`,
    delay: `${-((i * 1.7) % 12)}s`,
    drift: `${Math.round((r - 0.5) * 80)}px`,
  }
})

export default function SparkleField({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={
            {
              left: s.left,
              bottom: '-10px',
              width: s.size,
              height: s.size,
              '--dur': s.dur,
              '--delay': s.delay,
              '--drift': s.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
