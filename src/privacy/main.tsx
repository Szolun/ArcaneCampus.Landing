import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/content'
import { privacy } from './content'
import PrivacyPage from './PrivacyPage'
import '../index.css'

const meta = (locale: Locale) => privacy[locale].meta

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider meta={meta}>
      <PrivacyPage />
    </LocaleProvider>
  </StrictMode>,
)
