"use client";
// components/section/impact/Impact.tsx — Gen Z Light Skeuomorphic & Glassmorphic Redesign

import Image from "next/image";
import Link from "next/link";
import { m as motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const stats = [
  { id: "stat-villages", value: 45, suffix: "+", label: "Desa yang Berkolaborasi", description: "Dari Sabang sampai Merauke", color: "from-blue-500/10 to-transparent", glow: "group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30", textGlow: "text-utbex-dark group-hover:text-blue-600" },
  { id: "stat-msmes", value: 120, suffix: "+", label: "Pelaku UMKM Didampingi", description: "Transformasi digital & branding", color: "from-purple-500/10 to-transparent", glow: "group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] group-hover:border-purple-500/30", textGlow: "text-utbex-dark group-hover:text-purple-600" },
  { id: "stat-youth", value: 2500, suffix: "+", label: "Pemuda Terlatih", description: "Siap memimpin perubahan", color: "from-utbex-maroon/10 to-transparent", glow: "group-hover:shadow-[0_20px_40px_rgba(139,0,0,0.15)] group-hover:border-utbex-maroon/30", textGlow: "text-utbex-dark group-hover:text-utbex-maroon" },
  { id: "stat-programs", value: 6, suffix: "+", label: "Tahun Berkarya", description: "Konsisten sejak 2020", color: "from-amber-500/10 to-transparent", glow: "group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] group-hover:border-amber-500/30", textGlow: "text-utbex-dark group-hover:text-amber-600" },
];

function AnimatedCounter({ value, suffix, className }: { value: number; suffix: string; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={`tabular-nums transition-colors duration-500 ${className}`}>
      {count.toLocaleString("id-ID")}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative w-full text-utbex-dark overflow-hidden py-24 lg:py-36"
      aria-label="UTBEX Indonesia Impact and Statistics"
    >
      {/* Ambient background glows (Light Theme) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft light noise texture */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
        
        {/* Soft pastel orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-utbex-maroon/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 lg:mb-28 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={staggerChild} className="text-mask flex justify-center">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-black/5 backdrop-blur-md mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-utbex-maroon uppercase">
                Dampak Nyata
              </span>
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="text-mask">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tighter text-utbex-dark pb-4">
              Perubahan Tidak Berhenti Saat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-utbex-maroon via-red-600 to-utbex-maroon italic">
                Program Selesai.
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Stats Grid - Light Skeuomorphism & Glassmorphism */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={staggerChild}
              className={`group relative rounded-[2rem] p-6 lg:p-8 overflow-hidden cursor-default
                         bg-white border border-black/[0.04]
                         transition-all duration-500 hover:-translate-y-2
                         shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_2px_4px_rgba(255,255,255,1)]
                         backdrop-blur-xl ${stat.glow}`}
            >
              {/* Colored subtle gradient background per stat */}
              <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <p className="text-[3rem] lg:text-[3.5rem] font-black tracking-tighter leading-none mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} className={stat.textGlow} />
                  </p>
                  <p className="text-sm font-bold text-utbex-dark/90 tracking-wide mb-2 leading-tight">
                    {stat.label}
                  </p>
                </div>
                <p className="text-[11px] text-utbex-text-secondary/70 font-medium uppercase tracking-widest mt-4 pt-4 border-t border-black/[0.04] group-hover:border-black/[0.08] transition-colors duration-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story + Photo split - Light Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* Left: Story text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10"
          >
            <motion.p variants={staggerChild} className="text-xl sm:text-2xl text-utbex-text-secondary/90 leading-relaxed font-medium">
              Bagi kami, dampak bukan hanya tentang berapa banyak program yang telah berjalan. Dampak adalah{" "}
              <strong className="text-utbex-dark font-black">perubahan yang tetap dirasakan</strong>{" "}
              setelah kegiatan selesai hubungan yang terus terjalin, dan peluang baru yang terus berkembang bersama masyarakat.
            </motion.p>

            {/* Testimonial - Light Frosted Glass */}
            <motion.blockquote 
              variants={staggerChild} 
              className="relative p-7 sm:p-8 rounded-[2rem] bg-white/80 border border-black/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,1)] group hover:bg-white hover:border-black/10 transition-all duration-500"
            >
              <div className="absolute -top-6 -left-2 text-[80px] font-serif leading-none text-black/5 select-none group-hover:text-utbex-maroon/10 transition-colors duration-500 rotate-12">&ldquo;</div>
              <p className="relative z-10 text-lg sm:text-xl text-utbex-dark/90 italic leading-relaxed mb-6 font-medium">
                &ldquo;Pendampingan ini memberi kami kepercayaan diri untuk mengubah produk lokal menjadi merek yang diakui.&rdquo;
              </p>
              <footer className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-utbex-maroon rounded-full" />
                <span className="text-xs text-utbex-dark/60 font-bold tracking-[0.15em] uppercase">
                  Mitra UMKM, Bantul
                </span>
              </footer>
            </motion.blockquote>

            <motion.div variants={staggerChild} className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA - Maroon 3D Button */}
              <Link
                href="/layanan"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-utbex-maroon text-white rounded-[1.25rem] text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden
                           transition-all duration-500 border border-transparent
                           shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_20px_rgba(139,0,0,0.25)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_12px_30px_rgba(139,0,0,0.4)]
                           hover:-translate-y-1 active:translate-y-0.5 hover:border-white/20"
              >
                {/* Light sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                
                <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
                  Mulai Berkolaborasi
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-utbex-maroon transition-colors duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </span>
              </Link>
              
              {/* Secondary CTA - Light Glass Button */}
              <Link
                href="#about"
                className="flex items-center justify-center gap-2 px-8 py-4 sm:py-5 bg-white border border-black/[0.08] text-utbex-dark/80 rounded-[1.25rem] text-[11px] font-bold tracking-[0.1em] uppercase
                           hover:bg-black/[0.02] hover:text-utbex-dark hover:border-black/15 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                Pelajari Perjalanan Kami
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Masonry photos - Light 3D Perspective Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0 perspective-[1200px]"
          >
            {/* Column 1 */}
            <div className="space-y-4 sm:space-y-6 transform-gpu rotate-y-[6deg] rotate-x-[3deg] translate-y-4">
              <motion.div variants={staggerChild} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/arik-dwi-asmara-utbex-menyampaikan-materi.avif" alt="UTBEX workshop" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">Workshop</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerChild} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/foto-bersama-arik-dwi-asmara-utbex-dengan-pemerintah.avif" alt="UTBEX bersama pemerintah" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">Kemitraan</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Column 2 */}
            <div className="space-y-4 sm:space-y-6 transform-gpu -rotate-y-[6deg] -rotate-x-[3deg] -translate-y-8">
              <motion.div variants={staggerChild} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif" alt="Penghargaan UTBEX" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-utbex-maroon/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">Penghargaan</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerChild} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/sertifikat-haki-utbex.avif" alt="Sertifikat HAKI UTBEX" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">HAKI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}