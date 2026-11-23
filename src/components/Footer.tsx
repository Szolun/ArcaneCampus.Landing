import { ExternalLink } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import { STEAM_COMMUNITY_URL, STEAM_URL } from '../i18n/content'
import Logo from './Logo'

export default function Footer() {
  const { t } = useLocale()

  const links = [
    { href: STEAM_URL, label: t.footer.store },
    { href: STEAM_COMMUNITY_URL, label: t.footer.community },
  ]

  return (
    <footer className="border-t border-line bg-abyss/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-4 font-display text-mist">{t.footer.tagline}</p>
          <p className="mt-2 text-sm text-mist">{t.footer.developer}</p>
        </div>
        <nav aria-label={t.footer.links}>
          <p className="eyebrow">{t.footer.links}</p>
          <ul className="mt-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-ink transition-colors hover:text-gold"
                >
                  {l.label}
                  <ExternalLink className="size-4 text-mist" aria-hidden="true" />
                </a>
              </li>
            ))}
            {[
              { href: '/terms/', label: t.footer.terms },
              { href: '/privacy/', label: t.footer.privacy },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center gap-2 text-ink transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-3 px-5 py-8 text-xs leading-relaxed text-mist sm:px-8">
          <p>{t.footer.disclosure}</p>
          <p>
            {t.footer.rights} {t.footer.fanNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
