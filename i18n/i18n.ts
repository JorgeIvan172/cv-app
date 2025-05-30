// i18n/i18n.ts
'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { HTTPAccessFallbackBoundary } from 'next/dist/server/app-render/entry-base'
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
