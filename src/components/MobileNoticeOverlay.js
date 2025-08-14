'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'

// Simple mobile detection using user agent; runs only on client
function isMobileUA() {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent || navigator.vendor || (window.opera ?? '')
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
}

export default function MobileNoticeOverlay({ forceShow = false, dismissible = false }) {
  const [show, setShow] = useState(forceShow)
  const { t } = useI18n()

  useEffect(() => {
    if (forceShow) return
    // Delay detection to client to avoid hydration mismatch
    if (isMobileUA()) setShow(true)
  }, [forceShow])

  if (!show) return null

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-6 max-w-md w-[92%] text-white shadow-xl">
    <h2 className="text-xl font-semibold mb-3">{t('mobile.title')}</h2>
    <p className="text-sm text-gray-200 mb-3">{t('mobile.body1')}</p>
    <p className="text-sm text-gray-300 mb-6">{t('mobile.body2')}</p>
        {dismissible && (
          <div className="flex justify-end">
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 text-sm rounded-lg bg-blue-500/80 hover:bg-blue-600/80"
              aria-label="Đóng thông báo thiết bị di động"
            >
      {t('mobile.ok')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
