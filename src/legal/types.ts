import type { Locale } from '../i18n/content'

export type Block = string | { list: string[] }

// A legal document (privacy policy, terms of service) rendered by LegalPage.
export type LegalDoc = {
  meta: { title: string; description: string }
  home: string
  eyebrow: string
  title: string
  updated: string
  tocLabel: string
  intro: Block[]
  sections: { id: string; title: string; blocks: Block[] }[]
}

export type LegalDocs = Record<Locale, LegalDoc>
