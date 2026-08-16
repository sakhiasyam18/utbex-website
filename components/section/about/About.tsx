"use client";

/**
 * components/section/about/About.tsx
 * ----------------------------------------------------------------------
 * Komponen pembungkus (Wrapper) untuk seluruh seksi "Tentang UTBEX".
 * 
 * Seksi ini dibagi menjadi 4 sub-komponen utama yang di-render berurutan:
 * 1. AboutHeader       : Paragraf pengantar (Executive Summary) & Sejarah singkat.
 * 2. AboutVisionMission: Kartu Visi (Kiri) dan Misi (Kanan).
 * 3. AboutLongTermVision: Papan visi (Dream Board) & rincian target jangka panjang.
 * 4. AboutQuote        : Kutipan penutup berukuran besar dengan gaya desain mencolok.
 * 
 * Latar Belakang (Ambient Background):
 * Menggunakan dua elemen `div` (.about-orb) yang di-blur secara ekstrem 
 * untuk menciptakan efek pendaran cahaya (glow) merah marun dan rose 
 * yang bergerak perlahan di belakang konten.
 */
import { AboutHeader } from "./components/AboutHeader";
import { AboutVisionMission } from "./components/AboutVisionMission";
import { AboutLongTermVision } from "./components/AboutLongTermVision";
import { AboutQuote } from "./components/AboutQuote";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative w-full overflow-hidden"
    >
      {/* ── Ambient Gradient Orbs — 2 orbs max for performance ── */}
      <div className="about-orb about-orb-animate w-[450px] h-[450px] bg-utbex-maroon/[0.03] top-[5%] -left-[10%]" />
      <div className="about-orb about-orb-animate w-[350px] h-[350px] bg-rose-200/[0.15] bottom-[10%] right-[-5%]" style={{ animationDelay: "-8s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 py-14 lg:py-32">
        <h2 id="about-headline" className="sr-only">Tentang UTBEX</h2>
        <AboutHeader />
        <AboutVisionMission />
        <AboutLongTermVision />
        <AboutQuote />
      </div>
    </section>
  );
}
