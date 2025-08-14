import { calculateAverage } from '../utils/performance'
import { useI18n } from '../i18n'

function TestResultCard({ result }) {
  const { t } = useI18n()
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-md">
      <h3 className="text-lg font-medium mb-2">
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {result.type}
        </span>
      </h3>
      <ul className="text-sm space-y-1 text-gray-200">
        <li><strong>{t('results.meshMax')}:</strong> {result.meshCount}</li>
        <li><strong>{t('results.verticesTotal')}:</strong> {result.vertices}</li>
        <li><strong>{t('results.drawCalls')}:</strong> {result.drawCalls}</li>
      </ul>
    </div>
  )
}

function AverageSummary({ average }) {
  const { t } = useI18n()
  return (
    <div className="bg-green-500/20 border border-green-400 text-green-100 rounded-xl p-6 text-sm shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-green-100">🎯 {t('results.avgTitle')}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li><strong>{t('results.avgMesh')}:</strong> {average.meshCount}</li>
        <li><strong>{t('results.avgVertices')}:</strong> {average.vertices}</li>
        <li><strong>{t('results.avgDrawCalls')}:</strong> {average.drawCalls}</li>
      </ul>
    </div>
  )
}

export default function ResultsOverlay({ results }) {
  const average = calculateAverage(results)
  const { t } = useI18n()

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm text-white p-4">
      <div className="bg-white/10 border border-white/30 rounded-2xl p-8 w-full max-w-3xl backdrop-blur-lg shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">📊 {t('results.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {results.map((result, index) => (
            <TestResultCard key={index} result={result} />
          ))}
        </div>
        
        {average && <AverageSummary average={average} />}
        
        <p className="text-center mt-8 text-base text-white font-medium">
          🎉 <span className="text-lg font-semibold text-green-200">{t('results.thanksLead')}</span> {t('results.thanksTail')}
        </p>
      </div>
    </div>
  )
}
