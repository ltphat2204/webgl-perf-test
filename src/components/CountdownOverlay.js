export default function CountdownOverlay({ countdown }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 text-white text-6xl font-bold">
      {countdown}
    </div>
  )
}
