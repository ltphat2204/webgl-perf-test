# Khảo sát hiệu năng WebGL 2.0

Dự án này cung cấp mã nguồn cho một khảo sát đánh giá hiệu năng WebGL 2.0 trong trình duyệt, nhằm thu thập dữ liệu thực tế về khả năng xử lý đồ họa 3D từ các thiết bị phổ biến. Bạn có thể tham gia khảo sát [tại đây](https://webgl-perf-test.vercel.app/).

## 🎯 Mục đích khảo sát

- Đo lường số lượng mesh 3D, vertex và draw call mà trình duyệt có thể xử lý ổn định ở 60 FPS.
- Thu thập thông tin phần cứng cơ bản (CPU, GPU, nền tảng) từ trình duyệt.
- Hỗ trợ đánh giá và tối ưu hóa hiệu suất cho các ứng dụng WebGL trên nền web.

## 🔍 Thông tin được thu thập

- Tên GPU (qua WebGL API)
- Số nhân CPU (qua `navigator.hardwareConcurrency`)
- Nền tảng hệ điều hành (qua `navigator.platform`)
- Số lượng mesh tối đa trước khi tụt FPS
- Tổng số vertex và draw call thực tế

Tất cả dữ liệu được thu thập **ẩn danh** và không bao gồm bất kỳ thông tin cá nhân nào.

## 🛠️ Công nghệ sử dụng

- Next.js (App Router)
- React Three Fiber (WebGL 2)
- TailwindCSS
- Supabase (lưu trữ dữ liệu khảo sát)

## 🔒 Minh bạch & quyền riêng tư

Dự án này **không thu thập dữ liệu nhạy cảm**, không yêu cầu đăng nhập và toàn bộ mã nguồn khảo sát đều được công khai tại đây.

Người dùng có thể kiểm tra, kiểm định hoặc triển khai lại mã nguồn để đảm bảo tính minh bạch.

## 📄 Giấy phép

Mã nguồn được phát hành theo giấy phép [MIT](/LICENSE).

---

Xin trân trọng cảm ơn sự tham gia của bạn vào khảo sát!