import { useLocale } from '../i18n/useLocale'
import SectionHeading from './SectionHeading'

export default function About() {
  const { t } = useLocale()

  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 size-[min(36rem,100vw)] -translate-x-1/2 rounded-full bg-arcane-deep/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[1.75rem] bg-linear-to-br from-gold/40 via-arcane/30 to-rune/20 opacity-70 blur-xl"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface shadow-2xl shadow-black/50">
              <img
                src="/images/keyart-616.webp"
                width={616}
                height={353}
                alt={t.about.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[616/353] w-full object-cover"
              />
            </figure>
          </div>
          <p className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-1 font-display text-2xl font-semibold tracking-wide sm:text-3xl lg:justify-start">
            {t.about.motto.map((word, i) => (
              <span key={word} className={i === 1 ? 'gold-text' : 'text-ink'}>
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
          <div
            className="reveal mt-6 space-y-5 text-base leading-relaxed text-mist sm:text-lg"
            style={{ ['--delay' as string]: '100ms' }}
          >
            {t.about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {t.stats.map((s, i) => (
          <div
            key={s.value}
            className="reveal card flex flex-col items-center justify-center px-4 py-6 text-center md:py-8"
            style={{ ['--delay' as string]: `${i * 60}ms` }}
          >
            <dt className="order-2 mt-2 text-sm text-mist">{s.label}</dt>
            <dd className="gold-text order-1 font-display text-4xl font-bold tabular-nums md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
