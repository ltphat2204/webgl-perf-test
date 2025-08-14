import { GEOMETRIES } from '../constants/geometries'
import { useI18n } from '../i18n'

export default function TestProgress({ currentIndex }) {
  const { t } = useI18n()
  const nameKey = GEOMETRIES[currentIndex]?.i18nKey || GEOMETRIES[currentIndex]?.name
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-2 rounded-xl shadow">
      <h2 className="text-lg font-medium">
        {t('progress.title', { step: currentIndex + 1, total: GEOMETRIES.length })} – {t('progress.test')}: <span className="font-bold">{t(nameKey)}</span>
      </h2>
    </div>
  )
}
