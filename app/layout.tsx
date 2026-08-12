// app/layout.tsx
//
// Root layout — provides html, body, fonts, metadata, and analytics.
// Navigation and page wrappers are handled by route group layouts:
//   (main)/layout.tsx  → includes Navigation + <main>
//
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UTBEX Indonesia | Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise",
    template: "%s | UTBEX Indonesia"
  },
  description: "UTBEX Indonesia Group adalah social enterprise yang berkomitmen memajukan kualitas hidup masyarakat di Bantur, Malang, Jawa Timur melalui ekonomi kreatif, pemberdayaan pemuda desa, dan inovasi UMKM.",
  keywords: ["UTBEX", "UTBEX Indonesia", "Arik Dwi Asmara", "Social Enterprise", "Ekonomi Kreatif", "Bantur", "Malang", "Jawa Timur", "Pemberdayaan Desa", "UMKM", "Inovasi"],
  metadataBase: new URL("https://utbex.id"),
  openGraph: {
    title: "UTBEX Indonesia | Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise",
    description: "UTBEX Indonesia Group adalah social enterprise yang berkomitmen memajukan kualitas hidup masyarakat di Bantur, Malang, Jawa Timur melalui ekonomi kreatif dan pemberdayaan pemuda desa.",
    url: "https://utbex.id",
    siteName: "UTBEX Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTBEX Indonesia | Pusat Pengembangan Ekonomi Kreatif",
    description: "Social enterprise yang memadukan prinsip bisnis berkelanjutan dengan misi sosial di wilayah Bantur, Malang.",
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
  },
  alternates: {
    canonical: "https://utbex.id",
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
      <GoogleTagManager gtmId="GTM-TK9VMJFV" />
      <body className={`${inter.className} antialiased bg-utbex-canvas flex flex-col min-h-screen selection:bg-utbex-maroon/20 selection:text-utbex-maroon overflow-x-hidden`}>
        {/* JSON-LD for Organization SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UTBEX Indonesia Group",
              "url": "https://utbex.id",
              "logo": "https://utbex.id/icon.png",
              "description": "UTBEX Indonesia Group adalah sebuah lembaga social enterprise yang berkomitmen untuk memajukan dan meningkatkan kualitas hidup masyarakat di wilayah Bantur, Jawa Timur, Indonesia.",
              "founder": {
                "@type": "Person",
                "name": "Arik Dwi Asmara"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Kyai Rajiman RT.06 RW.02",
                "addressLocality": "Bantur",
                "addressRegion": "Malang, Jawa Timur",
                "postalCode": "65179",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "Utbexgrup.id!2026@gmail.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/UtbexclothingIndonesia/",
                "https://instagram.com/utbexindonesia.group",
                "https://www.youtube.com/@utbexindonesia",
                "https://www.tiktok.com/@utbexindonesiagroup"
              ]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}