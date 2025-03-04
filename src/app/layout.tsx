import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Instagram Auto Poster - 投稿を自動化",
  description: "Instagramの投稿を簡単に予約・自動化できるWebアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
