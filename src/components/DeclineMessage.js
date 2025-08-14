import { useI18n } from '../i18n'

export default function DeclineMessage() {
  const { t } = useI18n()
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-xl font-medium mb-4">{t('decline.title')}</h2>
        <p className="text-sm text-gray-300">{t('decline.description')}</p>
      </div>
    </div>
  )
}
