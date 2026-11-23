import { ArrowLeft } from 'lucide-react'
import { useLocale } from '../i18n/useLocale'
import Footer from '../components/Footer'
import LanguageToggle from '../components/LanguageToggle'
import Logo from '../components/Logo'
import type { Block, LegalDocs } from './types'

// URLs written in the policy text become links.
function linkify(text: string) {
  return text.split(/(https:\/\/[^\s)]+)/).map((part, i) =>
    part.startsWith('https://') ? (
      <a
        key={i}
        href={part}
        {...(part.startsWith('https://arcanecampus.com/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        className="break-all text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
      >
        {part}
      </a>
    ) : (
      part
    ),
  )
}

function renderBlock(block: Block, key: number) {
  if (typeof block === 'string') {
    return (
      <p key={key} className="text-mist">
        {linkify(block)}
      </p>
    )
  }
  return (
    <ul key={key} className="list-disc space-y-2 pl-5 text-mist marker:text-arcane">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function LegalPage({ docs }: { docs: LegalDocs }) {
  const { locale, t } = useLocale()
  const p = docs[locale]

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-lg bg-gold px-4 py-3 font-semibold text-on-gold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-night/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
          <a href="/" className="shrink-0 rounded-lg" aria-label={p.home}>
            <Logo />
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <a href="/" className="btn btn-ghost hidden min-h-11 px-4 text-sm sm:inline-flex">
              <ArrowLeft className="size-4" aria-hidden="true" />
              {p.home}
            </a>
          </div>
        </nav>
      </header>

      <main id="main" tabIndex={-1} className="overflow-x-clip">
        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-wide text-ink sm:text-4xl">{p.title}</h1>
          <p className="mt-3 text-sm text-mist">{p.updated}</p>
          <div className="mt-8 space-y-4 leading-relaxed">{p.intro.map(renderBlock)}</div>

          <nav aria-label={p.tocLabel} className="mt-10 rounded-2xl border border-line bg-surface/60 p-6">
            <p className="font-display text-sm font-semibold tracking-wider text-gold uppercase">{p.tocLabel}</p>
            <ol className="mt-4 grid gap-1 sm:grid-cols-2">
              {p.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex min-h-11 items-center gap-3 rounded-lg px-2 text-sm text-mist transition-colors hover:text-ink"
                  >
                    <span className="w-5 shrink-0 text-right font-semibold text-arcane">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {p.sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-12 scroll-mt-24">
              <h2 id={`${s.id}-title`} className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
                <span className="mr-2 text-arcane">{i + 1}.</span>
                {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed">{s.blocks.map(renderBlock)}</div>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  )
}
