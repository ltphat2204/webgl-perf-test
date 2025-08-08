import { useState, useEffect } from 'react'
import { getHardwareInfo } from '../utils/performance'

export default function WelcomeOverlay({ onAccept, onDecline }) {
  const [hardware, setHardware] = useState({ cpuCores: '...', gpu: '...', platform: '...' })

  useEffect(() => {
    setHardware(getHardwareInfo())
  }, [])

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full text-white shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">🧪 Chào mừng bạn đến với thử nghiệm hiệu năng WebGL</h2>
        <p className="mb-2 text-sm">
          Ứng dụng sẽ hiển thị nhiều đối tượng 3D để đánh giá hiệu năng trình duyệt. Trong quá trình thử nghiệm,
          chúng tôi sẽ thu thập các thông tin sau:
        </p>
        <div className="mb-4">
          <h3 className="font-medium mb-1">🖥️ Thông tin phần cứng:</h3>
          <ul className="list-disc list-inside text-sm pl-4">
            <li><strong>CPU:</strong> {hardware.cpuCores} lõi</li>
            <li><strong>GPU:</strong> {hardware.gpu}</li>
            <li><strong>Nền tảng:</strong> {hardware.platform}</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-medium mb-1">📊 Thông tin hiệu năng sẽ ghi nhận:</h3>
          <ul className="list-disc list-inside text-sm pl-4 text-gray-200">
            <li><strong>Số lượng mesh tối đa</strong> mà máy bạn xử lý mượt ở 60FPS</li>
            <li><strong>Tổng số vertex</strong> đã render tại ngưỡng hiệu năng</li>
            <li><strong>Số draw call</strong> GPU đã thực hiện mỗi frame</li>
          </ul>
        </div>
        <p className="text-sm text-yellow-300 mb-4">
          ⚠️ Vui lòng không bật thêm tab, ứng dụng nặng hoặc phần mềm ghi màn hình trong lúc thử nghiệm
          để đảm bảo kết quả chính xác nhất.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Dữ liệu chỉ phục vụ cho mục đích nghiên cứu và cải thiện trải nghiệm 3D trên trình duyệt.
        </p>
        <div className="flex justify-end gap-4">
          <button onClick={onDecline} className="px-4 py-2 text-sm rounded-lg bg-red-500/70 hover:bg-red-600/80">
            Tôi không đồng ý
          </button>
          <button onClick={onAccept} className="px-4 py-2 text-sm rounded-lg bg-green-500/70 hover:bg-green-600/80">
            Tôi đồng ý, bắt đầu
          </button>
        </div>
      </div>
    </div>
  )
}
