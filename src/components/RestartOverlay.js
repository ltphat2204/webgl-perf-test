import { useI18n } from '../i18n'

export default function RestartOverlay({ currentIndex, onRestart }) {
  const { t } = useI18n()
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white z-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-400">{t('restart.title')}</h2>
        <p className="text-sm mb-4 text-gray-200">{t('restart.body')}</p>
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white"
        >
          {t('restart.button', { step: currentIndex + 1 })}
        </button>
      </div>
    </div>
  )
}
