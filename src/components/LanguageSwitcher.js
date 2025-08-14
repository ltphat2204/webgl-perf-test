'use client'

import { useI18n } from '../i18n'
import Image from 'next/image'

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useI18n()
  
  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '/flags/vn.svg' },
    { code: 'en', name: 'English', flag: '/flags/us.svg' }
  ]

  return (
    <div className={`absolute top-3 right-3 z-[70] ${className}`}>
      <div className="relative">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-black/40 text-white border border-white/30 rounded-md px-8 py-1 text-xs appearance-none hover:bg-black/60 transition-colors cursor-pointer"
          style={{
            backgroundImage: `url(${languages.find(l => l.code === lang)?.flag})`,
            backgroundSize: '16px 12px',
            backgroundPosition: '6px center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-label="Change language"
        >
          {languages.map(({ code, name }) => (
            <option 
              key={code} 
              value={code}
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
