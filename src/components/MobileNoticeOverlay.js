'use client'

import { useEffect, useState } from 'react'

// Simple mobile detection using user agent; runs only on client
function isMobileUA() {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent || navigator.vendor || (window.opera ?? '')
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
}

export default function MobileNoticeOverlay({ forceShow = false, dismissible = false }) {
  const [show, setShow] = useState(forceShow)

  useEffect(() => {
    if (forceShow) return
    // Delay detection to client to avoid hydration mismatch
    if (isMobileUA()) setShow(true)
  }, [forceShow])

  if (!show) return null

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-6 max-w-md w-[92%] text-white shadow-xl">
        <h2 className="text-xl font-semibold mb-3">Thiết bị di động được phát hiện</h2>
        <p className="text-sm text-gray-200 mb-3">
          Bài kiểm tra hiệu năng WebGL này không hướng tới người dùng trên thiết bị di động.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Vui lòng truy cập bằng máy tính để bàn hoặc laptop để có kết quả chính xác và trải nghiệm tốt hơn.
        </p>
        {dismissible && (
          <div className="flex justify-end">
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 text-sm rounded-lg bg-blue-500/80 hover:bg-blue-600/80"
              aria-label="Đóng thông báo thiết bị di động"
            >
              Đã hiểu
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
