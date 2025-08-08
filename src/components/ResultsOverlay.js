import { calculateAverage } from '../utils/performance'

function TestResultCard({ result, index }) {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-md">
      <h3 className="text-lg font-medium mb-2">
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {result.type}
        </span>
      </h3>
      <ul className="text-sm space-y-1 text-gray-200">
        <li><strong>Mesh tối đa:</strong> {result.meshCount}</li>
        <li><strong>Vertex tổng:</strong> {result.vertices}</li>
        <li><strong>Draw call:</strong> {result.drawCalls}</li>
      </ul>
    </div>
  )
}

function AverageSummary({ average }) {
  return (
    <div className="bg-green-500/20 border border-green-400 text-green-100 rounded-xl p-6 text-sm shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-green-100">🎯 Trung bình tổng hợp</h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li><strong>Mesh trung bình:</strong> {average.meshCount}</li>
        <li><strong>Vertex trung bình:</strong> {average.vertices}</li>
        <li><strong>Draw call trung bình:</strong> {average.drawCalls}</li>
      </ul>
    </div>
  )
}

export default function ResultsOverlay({ results }) {
  const average = calculateAverage(results)

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm text-white p-4">
      <div className="bg-white/10 border border-white/30 rounded-2xl p-8 w-full max-w-3xl backdrop-blur-lg shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">📊 Kết quả thử nghiệm hiệu năng WebGL</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {results.map((result, index) => (
            <TestResultCard key={index} result={result} index={index} />
          ))}
        </div>
        
        {average && <AverageSummary average={average} />}
        
        <p className="text-center mt-8 text-base text-white font-medium">
          🎉 <span className="text-lg font-semibold text-green-200">Chân thành cảm ơn bạn</span> đã tham gia thử nghiệm này. 
          Đóng góp của bạn sẽ giúp chúng tôi tối ưu hiệu năng 3D trên trình duyệt để mang lại trải nghiệm tốt nhất cho người dùng!
        </p>
      </div>
    </div>
  )
}
