import { Heart, Sparkle, Users } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import { STEAM_COMMUNITY_URL, STEAM_URL } from '../i18n/content'
import SparkleField from './SparkleField'

export default function FinalCta() {
  const { t } = useLocale()

  return (
    <section aria-labelledby="cta-title" className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="reveal relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gold/30">
        <img
          src="/images/campus-1438.webp"
          srcSet="/images/campus-768.webp 768w, /images/campus-1438.webp 1438w"
          sizes="(min-width: 1152px) 1152px, 100vw"
          width={1438}
          height={810}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/85 to-arcane-deep/40" aria-hidden="true" />
        <SparkleField />

        <div className="grid items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.2fr_1fr] md:py-20 lg:px-16">
          <div className="text-center lg:text-left">
            <div className="rune-divider lg:mx-0" aria-hidden="true">
              <Sparkle className="size-4" />
            </div>
            <h2 id="cta-title" className="gold-text mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/90 sm:text-lg lg:mx-0">{t.cta.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold min-h-14 px-7 text-lg whitespace-nowrap">
                <Heart className="size-5" aria-hidden="true" />
                {t.cta.primary}
              </a>
              <a href={STEAM_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost min-h-14 px-7">
                <Users className="size-5" aria-hidden="true" />
                {t.cta.secondary}
              </a>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/60 lg:rotate-2">
            <img
              src="/images/header-460.webp"
              width={460}
              height={215}
              alt={t.cta.imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[460/215] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
