import { useId } from 'react'

export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const gid = `logo-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const text = size === 'lg' ? 'text-2xl' : 'text-base sm:text-lg'
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className={size === 'lg' ? 'size-9' : 'size-7'} aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F6DFA4" />
            <stop offset="1" stopColor="#C9963F" />
          </linearGradient>
        </defs>
        <path d="M16 2l3 10 10 4-10 4-3 10-3-10-10-4 10-4z" fill={`url(#${gid})`} />
        <circle cx="16" cy="16" r="2.6" fill="#8B7BFF" />
      </svg>
      <span className={`font-display font-bold tracking-[0.14em] ${text}`}>
        <span className="gold-text">ARCANE</span> <span className="text-ink">CAMPUS</span>
      </span>
    </span>
  )
}
