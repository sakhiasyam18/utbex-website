"use client";
// components/section/impact/Impact.tsx — Gen Z Light Skeuomorphic & Glassmorphic Redesign

import Image from "next/image";
import Link from "next/link";
import { m as motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const partners = [
  {
    id: "partner-1",
    num: "01",
    title: "Pemerintah Daerah & Provinsi",
    desc: "Berkolaborasi merancang dan mengeksekusi program pemberdayaan masyarakat serta pengembangan UMKM berbasis potensi lokal.",
    color: "from-blue-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30",
    textGlow: "group-hover:text-blue-700",
  },
  {
    id: "partner-2",
    num: "02",
    title: "Kementerian / Lembaga Negara",
    desc: "Menjadi mitra pelaksana program-program strategis nasional dalam memajukan ekonomi kreatif dan kemandirian desa.",
    color: "from-red-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] group-hover:border-red-500/30",
    textGlow: "group-hover:text-red-700",
  },
  {
    id: "partner-3",
    num: "03",
    title: "Program CSR Swasta & BUMN",
    desc: "Menyalurkan dana tanggung jawab sosial perusahaan (CSR) ke dalam program berdampak nyata dan berkelanjutan bagi masyarakat.",
    color: "from-purple-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] group-hover:border-purple-500/30",
    textGlow: "group-hover:text-purple-700",
  },
  {
    id: "partner-4",
    num: "04",
    title: "Lembaga Pendidikan & Kampus",
    desc: "Bersinergi dalam penelitian, pengabdian masyarakat, dan transfer pengetahuan untuk menciptakan inovasi terapan.",
    color: "from-green-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] group-hover:border-green-500/30",
    textGlow: "group-hover:text-green-700",
  },
  {
    id: "partner-5",
    num: "05",
    title: "Lembaga Sosial & Komunitas Ekonomi Kreatif",
    desc: "Membangun jaringan dan ekosistem yang saling mendukung antar penggerak sosial untuk memperluas jangkauan kebermanfaatan.",
    color: "from-orange-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] group-hover:border-orange-500/30",
    textGlow: "group-hover:text-orange-700",
  },
  {
    id: "partner-6",
    num: "06",
    title: "Organisasi Internasional Pemberdayaan",
    desc: "Mengadaptasi standar global dan membawa potensi desa ke kancah internasional melalui program kolaborasi lintas batas.",
    color: "from-teal-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] group-hover:border-teal-500/30",
    textGlow: "group-hover:text-teal-700",
  },
];

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
          className="mb-16 lg:mb-24 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={staggerChild} className="text-mask flex justify-center">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-black/5 backdrop-blur-md mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-utbex-maroon uppercase">
                Peluang Kemitraan
              </span>
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="text-mask">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.92] tracking-tighter text-utbex-dark">
              OPEN KERJASAMA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-utbex-maroon via-red-600 to-utbex-maroon italic">
                &amp; KOLABORASI
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Partners Grid - Light Skeuomorphism & Glassmorphism */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={staggerChild}
              className={`group relative rounded-[2rem] p-6 lg:p-8 overflow-hidden cursor-default
                         bg-white border border-black/[0.04] h-full flex flex-col
                         transition-all duration-500 hover:-translate-y-2 min-h-[200px]
                         shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_2px_4px_rgba(255,255,255,1)]
                         backdrop-blur-xl ${partner.glow}`}
            >
              {/* Colored subtle gradient background per stat */}
              <div className={`absolute inset-0 bg-gradient-to-b ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full text-left gap-3">
                <div className="mb-2">
                  <span className="text-[10px] font-black text-black/20 tracking-[0.2em] group-hover:text-utbex-maroon/40 transition-colors duration-500">
                    {partner.num}
                  </span>
                </div>
                <h3 className={`text-xl font-bold tracking-tight text-utbex-dark/90 transition-colors duration-300 ${partner.textGlow}`}>
                  {partner.title}
                </h3>
                <p className="text-sm font-medium text-utbex-dark/70 leading-relaxed mt-2">
                  {partner.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bentuk Kolaborasi */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 mb-24 max-w-4xl mx-auto relative z-10"
        >
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-black/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-utbex-maroon/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <motion.h3 variants={staggerChild} className="text-xl sm:text-2xl font-black text-utbex-dark mb-6 tracking-tight uppercase text-center sm:text-left">
              Bentuk Kolaborasi Yang Ditawarkan
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Program Inkubasi Pemuda Desa",
                "Co-Branding Produk Lokal",
                "CSR Pendidikan & Pelatihan Wirausaha",
                "Program Desa Wisata Kreatif",
                "Pendampingan UMKM Digital",
                "Program Anti Stunting Berbasis Ekonomi Kreatif"
              ].map((item, i) => (
                <motion.div key={i} variants={staggerChild} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-utbex-maroon/10 text-utbex-maroon flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-utbex-dark/80 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
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
              className="relative p-7 sm:p-10 rounded-[2.5rem] bg-white border border-black/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1)] group hover:bg-white hover:border-black/10 transition-all duration-500"
            >
              <div className="absolute -top-6 -left-2 text-[80px] font-serif leading-none text-black/5 select-none group-hover:text-utbex-maroon/10 transition-colors duration-500 rotate-12">&ldquo;</div>
              <p className="relative z-10 text-lg sm:text-xl text-utbex-dark/90 italic leading-relaxed mb-8 font-medium">
                &ldquo;Mari bersama membangun desa, mencetak generasi kreatif, dari pinggiran menuju pusat kemajuan. Dari Desa, Untuk Dunia.&rdquo;
              </p>
              <footer className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-[2px] bg-utbex-maroon shrink-0 rounded-full" />
                <span className="text-sm text-utbex-dark/80 font-bold uppercase leading-snug">
                  UTBEX Indonesia siap menjadi mitra strategis bagi perusahaan, lembaga, maupun pemerintah dalam membangun ekonomi kreatif desa berkelanjutan.
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
                  <Image src="/images/mockup-utbex-papan-poster-ekslusif.avif" alt="UTBEX workshop" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">UTBEX.id</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={staggerChild} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/sertifikat-merek-utbex.avif" alt="UTBEX bersama pemerintah" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">Sertifikat Merek</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Column 2 */}
            <div className="space-y-4 sm:space-y-6 transform-gpu -rotate-y-[6deg] -rotate-x-[3deg] -translate-y-8">
              <motion.div variants={staggerChild} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image src="/images/mockup-stempel-utbex.avif" alt="Penghargaan UTBEX" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-utbex-maroon/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">PT. Utbex Inovasi Indonesia</p>
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