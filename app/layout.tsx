// app/layout.tsx
/**
 * app/layout.tsx
 * 
 * Root Layout Component
 * ----------------------------------------------------------------------
 * File ini adalah fondasi utama (Root) dari seluruh struktur HTML website UTBEX.
 * Di sini kita mengonfigurasi pengaturan global yang akan diwariskan ke seluruh halaman,
 * termasuk Metadata SEO, Google Fonts (Inter), Google Tag Manager (GTM), 
 * Vercel Analytics, serta skema JSON-LD untuk optimasi Local SEO.
 * 
 * Catatan untuk Developer Selanjutnya:
 * - Jangan letakkan komponen visual seperti Navbar atau Footer di file ini.
 * - Untuk komponen UI tingkat halaman, silakan modifikasi file `app/(main)/layout.tsx`.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

/**
 * Konfigurasi Metadata Global untuk SEO & Social Media Sharing (OpenGraph, Twitter).
 * Metadata ini akan menjadi default untuk semua rute. Jika suatu rute/halaman
 * memiliki spesifikasi khusus, ia dapat melakukan 'override' konfigurasi ini.
 */
export const metadata: Metadata = {
  title: {
    default: "UTBEX Indonesia | Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise",
    template: "%s | UTBEX Indonesia"
  },
  description: "UTBEX Indonesia Group adalah social enterprise yang berkomitmen memajukan kualitas hidup masyarakat di Bantur, Malang, Jawa Timur melalui ekonomi kreatif, pemberdayaan pemuda desa, dan inovasi UMKM.",
  keywords: [
    "UTBEX", 
    "UTBEX Indonesia", 
    "Arik Dwi Asmara", 
    "Social Enterprise", 
    "Ekonomi Kreatif", 
    "Bantur", 
    "Malang", 
    "Jawa Timur", 
    "Pemberdayaan Desa", 
    "UMKM", 
    "Inovasi",
    "Inkubasi Pemuda Desa",
    "Desa Wisata Pesisir Selatan",
    "Pusat Pelatihan Ekonomi Kreatif"
  ],
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

/**
 * RootLayout Component
 * @param children - Komponen anak (halaman atau layout turunan) yang akan di-render di dalam tag <body>.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <GoogleTagManager gtmId="GTM-TK9VMJFV" />
      <body className={`${inter.className} antialiased bg-utbex-canvas flex flex-col min-h-screen selection:bg-utbex-maroon/20 selection:text-utbex-maroon overflow-x-clip`}>
        {/* JSON-LD for Organization SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "UTBEX Indonesia Group",
              "url": "https://utbex.id",
              "logo": "https://utbex.id/icon.png",
              "description": "UTBEX Indonesia Group adalah sebuah lembaga social enterprise yang berkomitmen untuk memajukan dan meningkatkan kualitas hidup masyarakat di wilayah Bantur, Jawa Timur, Indonesia.",
              "priceRange": "$$",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -8.3283,
                "longitude": 112.5647
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@utbex.id",
                "telephone": "+6282252358901",
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