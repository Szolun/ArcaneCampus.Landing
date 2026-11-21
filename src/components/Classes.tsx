import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import {
  BadgeCheck,
  Check,
  Crosshair,
  HandFist,
  MoveHorizontal,
  Swords,
  WandSparkles,
  type LucideIcon,
} from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import type { ClassKey, DamageType, Gender, Range } from '../i18n/content'
import SectionHeading from './SectionHeading'

const classes: { key: ClassKey; accent: string }[] = [
  { key: 'fighter', accent: '#ff8a3d' },
  { key: 'engineer', accent: '#ff5d6c' },
  { key: 'medic', accent: '#4fe0a0' },
  { key: 'musician', accent: '#f4c76a' },
  { key: 'hunter', accent: '#4d8dff' },
  { key: 'gunner', accent: '#9b7bff' },
  { key: 'lancer', accent: '#6fd8ff' },
  { key: 'soulmage', accent: '#b76bff' },
]

const genders: Gender[] = ['f', 'm']

const damageIcon: Record<DamageType, LucideIcon> = { physical: HandFist, magical: WandSparkles }
const rangeIcon: Record<Range, LucideIcon> = { melee: Swords, ranged: Crosshair, hybrid: MoveHorizontal }

const art = (key: ClassKey, gender: Gender) => ({
  src: `/images/classes/${key}-${gender}-720.webp`,
  srcSet: `/images/classes/${key}-${gender}-400.webp 400w, /images/classes/${key}-${gender}-720.webp 720w`,
})

const ART_SIZES = '(min-width: 1024px) 440px, (min-width: 640px) 420px, 88vw'

const prefetched = new Set<string>()

function prefetch(key: ClassKey, gender: Gender) {
  const id = `${key}-${gender}`
  if (prefetched.has(id)) return
  prefetched.add(id)
  const img = new Image()
  img.sizes = ART_SIZES
  img.srcset = art(key, gender).srcSet
}

export default function Classes() {
  const { t } = useLocale()
  const [active, setActive] = useState<ClassKey>('fighter')
  const [gender, setGender] = useState<Gender>('f')
  const tabRefs = useRef<Partial<Record<ClassKey, HTMLButtonElement | null>>>({})

  const index = classes.findIndex((c) => c.key === active)
  const current = t.classes.items[active]
  const accent = classes[index].accent
  const DamageIcon = damageIcon[current.damage]
  const RangeIcon = current.range ? rangeIcon[current.range] : null
  const image = art(active, gender)

  const select = (key: ClassKey) => {
    setActive(key)
    genders.forEach((g) => prefetch(key, g))
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = index
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % classes.length
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + classes.length) % classes.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = classes.length - 1
    else return
    e.preventDefault()
    const key = classes[next].key
    select(key)
    tabRefs.current[key]?.focus()
  }

  const tags: { label: string; value: string; icon: LucideIcon }[] = [
    { label: t.classes.damageLabel, value: t.classes.damage[current.damage], icon: DamageIcon },
    ...(current.range && RangeIcon
      ? [{ label: t.classes.rangeLabel, value: t.classes.range[current.range], icon: RangeIcon }]
      : []),
    { label: t.classes.roleLabel, value: current.role, icon: BadgeCheck },
  ]

  return (
    <section id="classes" aria-labelledby="classes-title" className="section">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[min(40rem,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px] transition-[background-color] duration-700"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <SectionHeading id="classes-title" eyebrow={t.classes.eyebrow} title={t.classes.title} lead={t.classes.lead} />

      <div
        role="tablist"
        aria-label={t.classes.pickerLabel}
        onKeyDown={onKeyDown}
        className="reveal mt-12 grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8"
      >
        {classes.map(({ key, accent: tone }) => {
          const selected = key === active
          const item = t.classes.items[key]
          return (
            <button
              key={key}
              ref={(el) => {
                tabRefs.current[key] = el
              }}
              id={`class-tab-${key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="class-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(key)}
              onPointerEnter={() => prefetch(key, gender)}
              onFocus={() => prefetch(key, gender)}
              style={{ '--tone': tone } as CSSProperties}
              className={`group flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-1.5 text-center transition-[border-color,background-color,transform] duration-200 active:scale-[0.97] sm:p-2 ${
                selected
                  ? 'border-(--tone) bg-surface-2 shadow-[0_0_24px_-6px_var(--tone)]'
                  : 'border-line bg-surface/60 hover:border-white/30 hover:bg-surface'
              }`}
            >
              <span className="relative block aspect-square w-full overflow-hidden rounded-lg bg-night/70">
                <img
                  src={`/images/classes/${key}-${gender}-thumb.webp`}
                  width={192}
                  height={192}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`size-full object-cover transition-[filter,transform] duration-300 ${
                    selected ? 'scale-105' : 'grayscale-[45%] group-hover:grayscale-0'
                  }`}
                />
              </span>
              <span
                className={`sr-only px-0.5 pb-1 text-xs leading-tight font-semibold sm:not-sr-only sm:min-h-[2lh] ${
                  selected ? 'text-ink' : 'text-mist group-hover:text-ink'
                }`}
              >
                {item.name}
              </span>
            </button>
          )
        })}
      </div>

      <div
        id="class-panel"
        role="tabpanel"
        aria-labelledby={`class-tab-${active}`}
        className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="reveal lg:col-span-5" style={{ ['--delay' as string]: '80ms' }}>
          <div className="card relative mx-auto max-w-[27.5rem] overflow-hidden">
            <div
              className="absolute inset-x-0 bottom-0 h-3/4 transition-[background] duration-700"
              style={{ background: `radial-gradient(60% 55% at 50% 70%, ${accent}55, transparent 70%)` }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-[6%] left-1/2 h-6 w-3/5 -translate-x-1/2 rounded-[50%] bg-black/50 blur-md"
              aria-hidden="true"
            />
            <img
              key={`${active}-${gender}`}
              src={image.src}
              srcSet={image.srcSet}
              sizes={ART_SIZES}
              width={720}
              height={960}
              alt={t.classes.artAlt(current.name, t.classes.gender[gender])}
              decoding="async"
              loading="lazy"
              className="class-swap relative aspect-[3/4] w-full object-contain"
            />
          </div>

          <div
            role="group"
            aria-label={t.classes.genderLabel}
            className="mx-auto mt-4 grid max-w-[27.5rem] grid-cols-2 gap-2 rounded-xl border border-line bg-night/60 p-1.5"
          >
            {genders.map((g) => {
              const pressed = g === gender
              return (
                <button
                  key={g}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setGender(g)}
                  onPointerEnter={() => prefetch(active, g)}
                  className={`min-h-11 cursor-pointer rounded-lg px-3 text-sm font-semibold transition-colors duration-200 ${
                    pressed ? 'bg-arcane text-night shadow-lg shadow-arcane/30' : 'text-mist hover:bg-white/5 hover:text-ink'
                  }`}
                >
                  {t.classes.gender[g]}
                </button>
              )
            })}
          </div>
        </div>

        <div key={active} className="class-swap lg:col-span-7">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-mist tabular-nums">
            {String(index + 1).padStart(2, '0')} <span className="text-mist/60">/ {String(classes.length).padStart(2, '0')}</span>
          </p>
          <h3 className="mt-2 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl md:text-5xl">
            {current.name}
          </h3>
          <span
            className="mt-4 block h-1 w-16 rounded-full transition-[background-color] duration-500"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />

          <dl className="mt-6 flex flex-wrap gap-2">
            {tags.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-night/50 px-3 py-2 text-sm"
              >
                <Icon className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{current.summary}</p>

          <h4 className="eyebrow mt-8">{t.classes.traitsTitle}</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {current.traits.map((trait) => (
              <li key={trait} className="card flex items-start gap-3 p-4 text-sm leading-snug font-medium text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-rune" aria-hidden="true" />
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
