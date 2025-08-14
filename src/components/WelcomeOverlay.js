import { useState, useEffect } from 'react'
import { getHardwareInfo } from '../utils/performance'
import { useI18n } from '../i18n'

export default function WelcomeOverlay({ onAccept, onDecline }) {
  const [hardware, setHardware] = useState({ cpuCores: '...', gpu: '...', platform: '...' })
  const { t } = useI18n()

  useEffect(() => {
    setHardware(getHardwareInfo())
  }, [])

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full text-white shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">{t('welcome.title')}</h2>
        <p className="mb-2 text-sm">{t('welcome.intro')}</p>
        <div className="mb-4">
          <h3 className="font-medium mb-1">{t('welcome.hardwareTitle')}</h3>
          <ul className="list-disc list-inside text-sm pl-4">
            <li><strong>CPU:</strong> {hardware.cpuCores} {t('welcome.cores')}</li>
            <li><strong>GPU:</strong> {hardware.gpu}</li>
            <li><strong>{t('welcome.platform')}:</strong> {hardware.platform}</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-medium mb-1">{t('welcome.metricsTitle')}</h3>
          <ul className="list-disc list-inside text-sm pl-4 text-gray-200">
            <li><strong>{t('welcome.metricMeshLabel')}</strong> {t('welcome.metricMeshTail')}</li>
            <li><strong>{t('welcome.metricVerticesLabel')}</strong> {t('welcome.metricVerticesTail')}</li>
            <li><strong>{t('welcome.metricDrawCallsLabel')}</strong> {t('welcome.metricDrawCallsTail')}</li>
          </ul>
        </div>
        <p className="text-sm text-yellow-300 mb-4">{t('welcome.warning')}</p>
        <p className="text-sm text-gray-300 mb-6">{t('welcome.privacy')}</p>
        <p className="text-sm text-blue-300 mb-6">{t('welcome.sourceLead')}{' '}
          <a
            href="https://github.com/ltphat2204/webgl-perf-test"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400"
          >
            github.com/ltphat2204/webgl-perf-test
          </a>{' '}
          {t('welcome.sourceTail')}
        </p>
        <div className="flex justify-end gap-4">
          <button onClick={onDecline} className="px-4 py-2 text-sm rounded-lg bg-red-500/70 hover:bg-red-600/80">
            {t('welcome.decline')}
          </button>
          <button onClick={onAccept} className="px-4 py-2 text-sm rounded-lg bg-green-500/70 hover:bg-green-600/80">
            {t('welcome.agree')}
          </button>
        </div>
      </div>
    </div>
  )
}
