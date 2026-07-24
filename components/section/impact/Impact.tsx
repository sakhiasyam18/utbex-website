"use client";
// components/section/impact/Impact.tsx — Back to light, animated stats

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const stats = [
  { id: "stat-villages", value: 45, suffix: "+", label: "Desa yang Berkolaborasi", description: "Dari Sabang sampai Merauke" },
  { id: "stat-msmes", value: 120, suffix: "+", label: "Pelaku UMKM Didampingi", description: "Transformasi digital & branding" },
  { id: "stat-youth", value: 2500, suffix: "+", label: "Pemuda Terlatih", description: "Siap memimpin perubahan" },
  { id: "stat-programs", value: 6, suffix: "+", label: "Tahun Berkarya", description: "Konsisten sejak 2020" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
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
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("id-ID")}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative w-full bg-utbex-canvas overflow-hidden"
      aria-label="UTBEX Indonesia Impact and Statistics"
    >
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,0,0,0.04)_0%,_transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24 max-w-3xl"
        >
          <motion.div variants={staggerChild} className="text-mask">
            <span className="inline-block text-xs font-semibold tracking-widest text-utbex-maroon uppercase mb-4">
              — Dampak Nyata
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="text-mask">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark leading-[0.95] tracking-tighter">
              Perubahan Tidak Berhenti Saat{" "}
              <span className="text-utbex-maroon italic">Program Selesai.</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={staggerChild}
              className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-black text-utbex-dark mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold text-utbex-dark/80 mb-1">{stat.label}</p>
              <p className="text-xs text-utbex-text-secondary">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story + Photo split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Story text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={staggerChild} className="text-lg sm:text-xl text-utbex-text-secondary leading-relaxed mb-8">
              Bagi kami, dampak bukan hanya tentang berapa banyak program yang telah berjalan. Dampak adalah{" "}
              <strong className="text-utbex-dark font-semibold">perubahan yang tetap dirasakan</strong>{" "}
              setelah kegiatan selesai — hubungan yang terus terjalin, dan peluang baru yang terus berkembang bersama masyarakat.
            </motion.p>

            {/* Testimonial */}
            <motion.blockquote variants={staggerChild} className="border-l-2 border-utbex-maroon pl-6">
              <p className="text-base text-utbex-dark/80 italic leading-relaxed mb-3">
                "Pendampingan ini memberi kami kepercayaan diri untuk mengubah produk lokal menjadi merek yang diakui."
              </p>
              <footer className="text-xs text-utbex-text-secondary font-medium">
                — Mitra UMKM, Bantul
              </footer>
            </motion.blockquote>

            <motion.div variants={staggerChild} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/layanan"
                id="impact-cta-layanan"
                className="group flex items-center gap-2 px-6 py-3 bg-utbex-maroon text-white rounded-full text-sm font-semibold hover:bg-[#6A0000] transition-all duration-300 shadow-[0_8px_24px_rgba(139,0,0,0.2)]"
              >
                Mulai Berkolaborasi
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#about"
                id="impact-cta-about"
                className="flex items-center gap-2 px-6 py-3 border border-black/15 text-utbex-dark rounded-full text-sm font-semibold hover:border-black/25 hover:bg-black/[0.03] transition-all duration-300 hover:shadow-sm"
              >
                Pelajari Perjalanan Kami
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Masonry photos */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="space-y-3">
              <motion.div variants={staggerChild} className="relative aspect-square rounded-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <Image src="/images/arik-dwi-asmara-utbex-menyampaikan-materi.avif" alt="UTBEX workshop" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.div>
              <motion.div variants={staggerChild} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <Image src="/images/foto-bersama-arik-dwi-asmara-utbex-dengan-pemerintah.avif" alt="UTBEX bersama pemerintah" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.div>
            </div>
            <div className="space-y-3 mt-6">
              <motion.div variants={staggerChild} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <Image src="/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif" alt="Penghargaan UTBEX" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.div>
              <motion.div variants={staggerChild} className="relative aspect-square rounded-2xl overflow-hidden group">
                <div className="absolute inset-0">
                  <Image src="/images/sertifikat-haki-utbex.avif" alt="Sertifikat HAKI UTBEX" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}