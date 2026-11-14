import { useLocale } from '../i18n/useLocale'
import SectionHeading from './SectionHeading'

export default function Events() {
  const { t } = useLocale()

  return (
    <section id="events" aria-labelledby="events-title" className="section">
      <SectionHeading id="events-title" eyebrow={t.events.eyebrow} title={t.events.title} lead={t.events.lead} />

      <div className="relative mt-16">
        <div
          className="absolute top-0 bottom-0 left-[1.375rem] w-px bg-linear-to-b from-gold/0 via-gold/50 to-gold/0 lg:top-[1.375rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-linear-to-r"
          aria-hidden="true"
        />
        <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
          {t.events.cadence.map((c, i) => (
            <li
              key={i}
              className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              style={{ ['--delay' as string]: `${i * 80}ms` }}
            >
              <span
                className="relative z-10 flex size-11 shrink-0 rotate-45 items-center justify-center rounded-lg border border-gold/60 bg-night shadow-[0_0_24px_-4px_rgba(236,202,128,0.5)]"
                aria-hidden="true"
              >
                <span className="-rotate-45 font-display text-sm font-bold text-gold">{i + 1}</span>
              </span>
              <div className="card flex-1 p-5 lg:mt-6 lg:w-full">
                <h3 className="font-display text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
