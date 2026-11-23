import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/content'
import { terms } from './content'
import LegalPage from '../legal/LegalPage'
import '../index.css'

const meta = (locale: Locale) => terms[locale].meta

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider meta={meta}>
      <LegalPage docs={terms} />
    </LocaleProvider>
  </StrictMode>,
)
