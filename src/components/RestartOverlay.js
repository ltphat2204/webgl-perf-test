export default function RestartOverlay({ currentIndex, onRestart }) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white z-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Đã phát hiện gián đoạn!</h2>
        <p className="text-sm mb-4 text-gray-200">
          Có thể bạn đã chuyển tab hoặc máy bị giảm FPS đột ngột.
          Vui lòng thử lại để đảm bảo kết quả chính xác.
        </p>
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white"
        >
          Bắt đầu lại bước {currentIndex + 1}
        </button>
      </div>
    </div>
  )
}
