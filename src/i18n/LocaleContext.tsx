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
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    return 'pt'
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
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
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
