import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "중2 과학 오답 클리닉 | 기말고사 AI 1:1 과외선생님",
  description:
    "틀린 문제 사진만 올리면 중2 과학 교육과정에 맞춘 핵심 개념, 출제 의도, 오답 함정, 일상 비유 및 확인 퀴즈를 제공하는 AI 과외선생님",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "중2과학과외",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#4f46e5",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
