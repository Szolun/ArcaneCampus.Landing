import { useLocale } from './i18n/useLocale'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Classes from './components/Classes'
import Events from './components/Events'
import Platforms from './components/Platforms'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  const { t } = useLocale()
  useReveal()

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-lg bg-gold px-4 py-3 font-semibold text-on-gold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-clip">
        <Hero />
        <About />
        <Features />
        <Classes />
        <Events />
        <Platforms />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
