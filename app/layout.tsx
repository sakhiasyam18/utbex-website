// app/layout.tsx
//
// Root layout — provides html, body, fonts, metadata, and analytics.
// Navigation and page wrappers are handled by route group layouts:
//   (main)/layout.tsx  → includes Navigation + <main>
//   (explore)/explore/layout.tsx → immersive fullscreen, no Navigation
//
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UTBEX Indonesia | From Ideas To Impact",
    template: "%s | UTBEX Indonesia"
  },
  description: "Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise. Membantu UMKM dan komunitas lokal bertransformasi digital.",
  metadataBase: new URL("https://utbex.id"),
  openGraph: {
    title: "UTBEX Indonesia | From Ideas To Impact",
    description: "Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise.",
    url: "https://utbex.id",
    siteName: "UTBEX Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTBEX Indonesia | From Ideas To Impact",
    description: "Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased bg-utbex-canvas flex flex-col min-h-screen selection:bg-utbex-maroon/20 selection:text-utbex-maroon`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}