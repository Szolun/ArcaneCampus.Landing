import { Plus } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import SectionHeading from './SectionHeading'

export default function Faq() {
  const { t } = useLocale()

  return (
    <section id="faq" aria-labelledby="faq-title" className="section max-w-3xl">
      <SectionHeading id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} />

      <div className="mt-12 space-y-3">
        {t.faq.items.map((item, i) => (
          <details
            key={i}
            className="reveal group card overflow-hidden open:border-arcane/50"
            style={{ ['--delay' as string]: `${i * 50}ms` }}
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink transition-colors hover:text-gold sm:px-6 [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <Plus
                className="size-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-mist sm:px-6">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
