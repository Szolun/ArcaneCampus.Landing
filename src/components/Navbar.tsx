import { useEffect, useRef, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import { STEAM_URL } from '../i18n/content'
import LanguageToggle from './LanguageToggle'
import Logo from './Logo'

export default function Navbar() {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#features', label: t.nav.features },
    { href: '#classes', label: t.nav.classes },
    { href: '#events', label: t.nav.events },
    { href: '#platforms', label: t.nav.platforms },
    { href: '#faq', label: t.nav.faq },
  ]

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? 'border-b border-line bg-night/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
        <a href="#top" className="shrink-0 rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-mist transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden min-h-11 px-4 text-sm whitespace-nowrap sm:inline-flex"
          >
            <Heart className="size-4" aria-hidden="true" />
            {t.nav.wishlist}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 text-ink transition-colors hover:bg-white/10 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-night/95 px-5 pt-6 pb-10 backdrop-blur-xl sm:px-8 md:h-[calc(100dvh-5rem)] xl:hidden"
      >
        <ul className="flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center rounded-xl px-4 font-display text-lg tracking-wide text-ink transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line px-4 pt-6 sm:hidden">
          <span className="text-sm text-mist">{t.nav.language}</span>
          <LanguageToggle />
        </div>
        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          <Heart className="size-5" aria-hidden="true" />
          {t.hero.primary}
        </a>
      </div>
    </header>
  )
}
