import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Locale } from './content'

type LocaleState = {
  locale: Locale
  t: Content
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleState | null>(null)

const STORAGE_KEY = 'arcane-campus-locale'

function detectLocale(): Locale {
  // ?lang=en / ?lang=pt lets a link (store listings, support replies) pick the language.
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'pt' || requested === 'en') return requested
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    return 'pt'
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

type PageMeta = { title: string; description: string }

export function LocaleProvider({ children, meta }: { children: ReactNode; meta?: (locale: Locale) => PageMeta }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      return
    }
  }, [])

  const t = content[locale]

  useEffect(() => {
    const page = meta?.(locale) ?? t.meta
    document.documentElement.lang = t.meta.htmlLang
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
  }, [t, locale, meta])

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
