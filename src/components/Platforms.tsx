import { useRef, useState, type KeyboardEvent } from 'react'
import { Apple, Check, Languages, Monitor, Server, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import type { PlatformKey } from '../i18n/content'
import SectionHeading from './SectionHeading'

const platforms: { key: PlatformKey; icon: LucideIcon }[] = [
  { key: 'windows', icon: Monitor },
  { key: 'macos', icon: Apple },
  { key: 'linux', icon: Server },
]

export default function Platforms() {
  const { t } = useLocale()
  const [active, setActive] = useState<PlatformKey>('windows')
  const tabRefs = useRef<Record<PlatformKey, HTMLButtonElement | null>>({ windows: null, macos: null, linux: null })

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = platforms.findIndex((p) => p.key === active)
    let next = idx
    if (e.key === 'ArrowRight') next = (idx + 1) % platforms.length
    else if (e.key === 'ArrowLeft') next = (idx - 1 + platforms.length) % platforms.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = platforms.length - 1
    else return
    e.preventDefault()
    const key = platforms[next].key
    setActive(key)
    tabRefs.current[key]?.focus()
  }

  const panel = t.platforms.tabs[active]

  return (
    <section id="platforms" aria-labelledby="platforms-title" className="relative border-y border-line bg-abyss/60">
      <div className="section">
        <SectionHeading
          id="platforms-title"
          eyebrow={t.platforms.eyebrow}
          title={t.platforms.title}
          lead={t.platforms.lead}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="reveal card p-5 sm:p-8 lg:col-span-3">
            <div
              role="tablist"
              aria-label={t.platforms.tabsLabel}
              className="grid grid-cols-3 gap-2 rounded-xl border border-line bg-night/60 p-1.5"
              onKeyDown={onKeyDown}
            >
              {platforms.map(({ key, icon: Icon }) => {
                const selected = key === active
                return (
                  <button
                    key={key}
                    ref={(el) => {
                      tabRefs.current[key] = el
                    }}
                    id={`tab-${key}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="platform-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(key)}
                    className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-2 text-sm font-semibold transition-colors duration-200 sm:text-base ${
                      selected ? 'bg-arcane text-night shadow-lg shadow-arcane/30' : 'text-mist hover:bg-white/5 hover:text-ink'
                    }`}
                  >
                    <Icon className="hidden size-5 shrink-0 sm:block" aria-hidden="true" />
                    {t.platforms.tabs[key].name}
                  </button>
                )
              })}
            </div>

            <div id="platform-panel" role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0} className="mt-6 rounded-lg">
              <p className="eyebrow">{t.platforms.minimum}</p>
              <dl className="mt-4 divide-y divide-line">
                {panel.reqs.map((r) => (
                  <div key={r.label} className="grid gap-1 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-mist">{r.label}</dt>
                    <dd className="font-medium text-ink">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-2">
            <div className="reveal card p-6 sm:p-8" style={{ ['--delay' as string]: '80ms' }}>
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
                <Languages className="size-5 text-rune" aria-hidden="true" />
                {t.platforms.langsTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {t.platforms.langs.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="text-right text-sm text-mist">{l.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal card p-6 sm:p-8" style={{ ['--delay' as string]: '160ms' }}>
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
                <ShieldCheck className="size-5 text-gold" aria-hidden="true" />
                {t.platforms.featuresTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.platforms.steamFeatures.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-night/50 px-3 py-1.5 text-sm text-ink"
                  >
                    <Check className="size-3.5 text-rune" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
