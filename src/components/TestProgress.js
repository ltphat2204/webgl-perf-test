import { GEOMETRIES } from '../constants/geometries'

export default function TestProgress({ currentIndex }) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-2 rounded-xl shadow">
      <h2 className="text-lg font-medium">
        Bước {currentIndex + 1}/{GEOMETRIES.length} – Thử nghiệm: <span className="font-bold">{GEOMETRIES[currentIndex].name}</span>
      </h2>
    </div>
  )
}
