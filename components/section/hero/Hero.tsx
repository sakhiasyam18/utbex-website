"use client";

/**
 * components/section/hero/Hero.tsx
 * ----------------------------------------------------------------------
 * Komponen utama (Entry Point) untuk bagian Hero (Above the Fold).
 * 
 * Arsitektur Komponen:
 * Hero dibagi menjadi beberapa sub-komponen agar file tidak membengkak:
 * 1. HeroTopBar: Baris paling atas (Logo & Sosmed).
 * 2. HeroDesktopContent: Tampilan khusus layar besar (Grid 3 kolom).
 * 3. HeroMobileContent: Tampilan khusus layar HP/Tablet.
 * 4. HeroStatsBar: Barisan angka statistik/prestasi di bagian paling bawah Hero.
 * 
 * Animasi Scroll (Parallax & Fade):
 * Saat pengunjung men-scroll ke bawah, elemen Hero (di versi Desktop) 
 * akan perlahan memudar (opacity turun), mengecil (scale turun), dan nge-blur.
 * Efek ini ditangani oleh Framer Motion `useScroll` dan `useTransform`.
 */
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroTopBar } from "./components/HeroTopBar";
import { HeroDesktopContent } from "./components/HeroDesktopContent";
import { HeroMobileContent } from "./components/HeroMobileContent";
import { HeroStatsBar } from "./components/HeroStatsBar";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "60% start"],
  });

  // GPU-composited — tidak menyentuh main thread
  // Engine motion di-reuse untuk versi mobile dan desktop
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(14px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full flex flex-col"
      style={{ minHeight: "100svh" }}
      aria-label="Beranda UTBEX Indonesia"
    >
      <HeroTopBar />
      
      {/* Layout untuk Desktop (Grid 3 Kolom) */}
      <HeroDesktopContent blur={blur} scale={scale} opacity={opacity} />
      
      {/* Layout untuk Mobile & Tablet (Full screen — no motion wrapper for fast LCP) */}
      <HeroMobileContent />
      
      <HeroStatsBar />
    </section>
  );
}
