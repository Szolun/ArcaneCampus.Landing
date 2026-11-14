import { ChevronDown, Heart, Sparkles } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import { STEAM_URL } from '../i18n/content'
import SparkleField from './SparkleField'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section id="top" className="relative isolate flex min-h-dvh items-end overflow-hidden pt-24 pb-16 md:items-center md:pb-24">
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <img
          src="/images/campus-1438.webp"
          srcSet="/images/campus-768.webp 768w, /images/campus-1438.webp 1438w"
          sizes="100vw"
          width={1438}
          height={810}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="hero-zoom size-full object-cover object-[62%_center]"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/70 to-night/20 md:bg-linear-to-r md:from-night md:via-night/75 md:to-night/0"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-night to-transparent" aria-hidden="true" />
      <SparkleField />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-4 py-2 text-xs font-semibold tracking-wide text-gold backdrop-blur-md sm:text-sm">
            <span className="relative flex size-2">
              <span className="glow-pulse absolute inline-flex size-full rounded-full bg-rune" />
              <span className="relative inline-flex size-2 rounded-full bg-rune" />
            </span>
            {t.hero.badge}
          </p>

          <h1 className="reveal mt-6" style={{ ['--delay' as string]: '80ms' }}>
            <span className="block font-display text-lg font-semibold tracking-[0.2em] text-mist uppercase sm:text-xl">
              {t.hero.titleA}
            </span>
            <span className="gold-text mt-2 block font-display text-5xl leading-[1.05] font-bold drop-shadow-[0_4px_30px_rgba(236,202,128,0.25)] sm:text-6xl md:text-7xl lg:text-8xl">
              {t.hero.titleB}
            </span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-ink/90 sm:text-lg"
            style={{ ['--delay' as string]: '160ms' }}
          >
            {t.hero.lead}
          </p>

          <div
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ['--delay' as string]: '240ms' }}
          >
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold min-h-14 px-7 text-lg whitespace-nowrap">
              <Heart className="size-5" aria-hidden="true" />
              {t.hero.primary}
            </a>
            <a href="#about" className="btn btn-ghost min-h-14 px-7">
              <Sparkles className="size-5" aria-hidden="true" />
              {t.hero.secondary}
            </a>
          </div>

          <ul className="reveal mt-8 flex flex-wrap gap-2" style={{ ['--delay' as string]: '320ms' }}>
            {t.hero.chips.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-white/10 bg-night/50 px-3 py-1.5 text-xs font-medium text-mist backdrop-blur-sm sm:text-sm"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-mist transition-colors hover:text-ink md:flex"
      >
        {t.hero.scroll}
        <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
