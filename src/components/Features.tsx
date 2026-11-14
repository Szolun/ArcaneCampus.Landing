import { CalendarDays, GraduationCap, Library, Swords, Trophy, Users, type LucideIcon } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import type { FeatureKey } from '../i18n/content'
import SectionHeading from './SectionHeading'

const order: { key: FeatureKey; icon: LucideIcon; tone: string }[] = [
  { key: 'academies', icon: Library, tone: 'from-arcane/30 text-arcane' },
  { key: 'mentors', icon: GraduationCap, tone: 'from-gold/25 text-gold' },
  { key: 'party', icon: Users, tone: 'from-rune/25 text-rune' },
  { key: 'events', icon: CalendarDays, tone: 'from-arcane/30 text-arcane' },
  { key: 'pvp', icon: Swords, tone: 'from-gold/25 text-gold' },
  { key: 'guilds', icon: Trophy, tone: 'from-rune/25 text-rune' },
]

export default function Features() {
  const { t } = useLocale()

  return (
    <section id="features" aria-labelledby="features-title" className="relative border-y border-line bg-abyss/60">
      <div className="section">
        <SectionHeading id="features-title" eyebrow={t.features.eyebrow} title={t.features.title} lead={t.features.lead} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {order.map(({ key, icon: Icon, tone }, i) => {
            const item = t.features.items[key]
            return (
              <li
                key={key}
                className="reveal group card relative overflow-hidden p-6 transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-arcane/60 sm:p-7"
                style={{ ['--delay' as string]: `${(i % 3) * 70}ms` }}
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-arcane/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br to-transparent ${tone}`}
                >
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{item.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
