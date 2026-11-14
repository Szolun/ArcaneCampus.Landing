import { useLocale } from '../i18n/useLocale'
import type { Locale } from '../i18n/content'

const options: { value: Locale; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
]

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-xl border border-white/15 bg-white/5 p-1">
      {options.map((o) => {
        const active = o.value === locale
        return (
          <button
            key={o.value}
            type="button"
            lang={o.value === 'pt' ? 'pt-BR' : 'en'}
            aria-pressed={active}
            aria-label={o.name}
            onClick={() => setLocale(o.value)}
            className={`min-h-9 min-w-10 cursor-pointer rounded-lg px-2 text-xs font-bold tracking-wider transition-colors duration-200 ${
              active ? 'bg-arcane text-night' : 'text-mist hover:text-ink'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
