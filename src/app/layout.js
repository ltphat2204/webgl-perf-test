import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khảo sát hiệu năng WebGL 2.0 thực tế trên trình duyệt",
  description:
    "Trang thử nghiệm nhằm khảo sát hiệu năng WebGL 2.0 thông qua số lượng draw call, mesh và vertex có thể xử lý ổn định ở tốc độ 60FPS. Kết quả được thu thập phục vụ nghiên cứu tối ưu hóa các ứng dụng 3D trên web.",
  keywords: [
    "webgl 2 performance test",
    "webgl benchmark",
    "browser gpu benchmark",
    "drawcall measurement",
    "webgl survey",
    "3D graphics browser test",
    "react three fiber test"
  ],
  metadataBase: new URL("https://webgl-perf-test.vercel.app/"),
  openGraph: {
    title: "Khảo sát hiệu năng WebGL 2.0 thực tế trên trình duyệt",
    description:
      "Trang thử nghiệm nhằm khảo sát hiệu năng WebGL 2.0 thông qua số lượng draw call, mesh và vertex có thể xử lý ổn định ở tốc độ 60FPS. Kết quả được thu thập phục vụ nghiên cứu tối ưu hóa các ứng dụng 3D trên web.",
    url: "https://webgl-perf-test.vercel.app/",
    siteName: "WebGL 2.0 Survey",
    images: [
      {
        url: "https://res.cloudinary.com/ltphat2204/image/upload/v1754614540/webgl-survey.png",
        width: 1200,
        height: 630,
        alt: "WebGL 2 Performance Survey"
      }
    ],
    locale: "vi_VN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Khảo sát hiệu năng WebGL 2.0 thực tế trên trình duyệt",
    description:
      "Trang thử nghiệm nhằm khảo sát hiệu năng WebGL 2.0 thông qua số lượng draw call, mesh và vertex có thể xử lý ổn định ở tốc độ 60FPS. Kết quả được thu thập phục vụ nghiên cứu tối ưu hóa các ứng dụng 3D trên web.",
    images: ["https://res.cloudinary.com/ltphat2204/image/upload/v1754614540/webgl-survey.png"]
  },
  alternates: {
    canonical: "https://webgl-perf-test.vercel.app/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
