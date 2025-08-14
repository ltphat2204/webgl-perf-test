'use client'

import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import vi from './locales/vi.json'
import en from './locales/en.json'

const dictionaries = { vi, en }

const I18nContext = createContext({
  lang: 'vi',
  t: (key) => key,
  setLang: () => {},
})

export function I18nProvider({ initialLang = 'vi', children }) {
  const [lang, setLang] = useState(initialLang)

  // Persist language choice in localStorage
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('lang')
    if (saved && (saved === 'vi' || saved === 'en')) setLang(saved)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang)
      // Keep <html lang> in sync on the client
      try {
        document.documentElement.setAttribute('lang', lang)
      } catch {}
    }
  }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.vi
    return (key, vars) => {
      const text = key.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict)
      if (typeof text !== 'string') return key
      if (!vars) return text
      return Object.keys(vars).reduce((s, name) => s.replaceAll(`{${name}}`, vars[name]), text)
    }
  }, [lang])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
