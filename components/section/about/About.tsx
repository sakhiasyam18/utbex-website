"use client";
// components/section/about/About.tsx — Gen Z Glassmorphism / Neumorphism Redesign

import Image from "next/image";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const milestones = [
  {
    year: "'14",
    title: "Titik Awal UTBEX",
    story:
      "UTBEX resmi berdiri dengan keyakinan bahwa setiap ide, sekecil apa pun, dapat menjadi kekuatan besar jika dipikirkan secara berbeda dan dieksekusi secara nyata.",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    alt: "Arik Dwi Asmara",
    tag: "Pendirian",
    evidence: "Akte Notaris & Legitimasi Desa",
  },
  {
    year: "'16",
    title: "Inovasi Kaos Lukis",
    story:
      "Kami meluncurkan inovasi Kaos Lukis Tanpa Tinta Pertama di Indonesia, membuktikan bahwa kreativitas tanpa batas bisa lahir dari ide-ide sederhana di desa.",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    alt: "Kaos Lukis Tanpa Tinta",
    tag: "Inovasi",
    evidence: "Paten Hak Cipta & Liputan DakoMagz",
  },
  {
    year: "'19",
    title: "Penghargaan Malaysia",
    story:
      "Mewakili Indonesia dan meraih Juara I Penemu Ide Kreatif di Malaysia, membuktikan bahwa gagasan pemuda desa mampu bersaing di panggung internasional.",
    image: "/images/awarding-inotek-award-ceremony-2023-utbex.avif",
    alt: "Penghargaan Ide Kreatif",
    tag: "Prestasi Global",
    evidence: "Sertifikat Juara I Malaysia",
  },
  {
    year: "'21",
    title: "Social Enterprise",
    story:
      "Resmi bertransformasi menjadi Social Enterprise yang fokus pada pemberdayaan pemuda desa dan pelaku UMKM melalui ekonomi kreatif berkelanjutan.",
    image: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif",
    alt: "Pemberdayaan UMKM",
    tag: "Transformasi",
    evidence: "Dokumentasi Inkubasi UMKM",
  },
  {
    year: "'22",
    title: "MotoGP Mandalika",
    story:
      "Produk inovasi UTBEX terpilih dan dipercaya menjadi Merchandise Resmi untuk ajang internasional MotoGP Mandalika.",
    image: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
    alt: "Produk UTBEX MotoGP",
    tag: "Kolaborasi",
    evidence: "Merchandise Resmi Mandalika",
  },
  {
    year: "'23",
    title: "Penghargaan Nasional",
    story:
      "Meraih Juara II INOTEK Award Provinsi Jawa Timur dan menerima Penghargaan Sumpah Pemuda dari Bupati Malang atas dedikasi pemberdayaan masyarakat.",
    image: "/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif",
    alt: "Penghargaan INOTEK",
    tag: "Penghargaan",
    evidence: "Piagam INOTEK & Pemkab Malang",
  },
];

const misiItems = [
  "Mengembangkan potensi pemuda desa melalui program pelatihan, produksi, dan pengelolaan usaha.",
  "Mendorong lahirnya wirausahawan muda desa yang mandiri, kreatif, dan inovatif.",
  "Menjadi rumah kolaborasi antar pelaku ekonomi kreatif lintas sektor.",
  "Mengangkat kearifan lokal menjadi produk berkualitas dan berdaya saing.",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative w-full bg-utbex-canvas overflow-hidden"
    >
      {/* ── Ambient Gradient Orbs ── */}
      {/* These give the white canvas warmth and depth without being distracting */}
      <div className="about-orb about-orb-animate w-[500px] h-[500px] bg-utbex-maroon/[0.035] top-[5%] -left-[10%]" />
      <div className="about-orb about-orb-animate w-[400px] h-[400px] bg-rose-200/[0.18] top-[30%] right-[-8%]" style={{ animationDelay: "-7s" }} />
      <div className="about-orb about-orb-animate w-[350px] h-[350px] bg-orange-100/[0.15] bottom-[15%] left-[20%]" style={{ animationDelay: "-13s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

        {/* ═══════════════════════════════════════════
            Section Intro — Neon label + Glass description
            ═══════════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          {/* Label with subtle neon glow */}
          <motion.div variants={staggerChild} className="text-mask">
            <span className="inline-block text-xs font-semibold tracking-widest text-utbex-maroon uppercase mb-4 neon-text-maroon">
              — Tentang Kami
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={staggerChild} className="text-mask">
            <h2
              id="about-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark leading-[0.95] tracking-tighter max-w-3xl"
            >
              Perubahan Besar Selalu Dimulai dari{" "}
              <span className="text-utbex-maroon italic neon-text-maroon">Langkah Kecil.</span>
            </h2>
          </motion.div>

          {/* Description in frosted glass card */}
          <motion.div variants={staggerChild} className="mt-8 max-w-2xl">
            <div className="about-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-base sm:text-lg text-utbex-text-secondary/80 leading-relaxed font-medium">
                UTBEX Indonesia Group adalah sebuah lembaga <em className="text-utbex-dark not-italic font-semibold">social enterprise</em> yang berkomitmen untuk memajukan dan meningkatkan kualitas hidup masyarakat di wilayah Bantur, Jawa Timur, Indonesia, serta daerah sekitarnya. Kami memiliki visi yang kuat untuk menciptakan perubahan positif melalui inovasi, pembangunan berkelanjutan, dan kemitraan yang berdampak.
              </p>
              <p className="text-sm sm:text-base text-utbex-text-secondary/60 leading-relaxed">
                Sebagai lembaga social enterprise, kami memadukan prinsip bisnis yang berkelanjutan dengan misi sosial yang tulus mengatasi berbagai tantangan sosial, ekonomi, dan lingkungan di wilayah Bantur dengan pendekatan yang berfokus pada pendidikan, lingkungan, dan pengembangan ekonomi masyarakat.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            Visi & Misi — Neumorphic + Glassmorphic Dark
            ═══════════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 lg:mb-32 grid md:grid-cols-2 gap-6 lg:gap-16 items-stretch"
        >
          {/* ── Visi — Neumorphic Raised Glass ── */}
          <motion.div
            variants={staggerChild}
            className="group relative rounded-[2rem] p-8 sm:p-12 h-full flex flex-col
                       about-neumorph about-neumorph-hover
                       border border-white/60
                       transition-all duration-500 hover:-translate-y-1"
          >
            {/* Skeuomorphic top-edge highlight */}
            <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

            {/* Icon — neumorphic inset circle */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8
                            bg-utbex-maroon/[0.08]
                            shadow-[inset_3px_3px_8px_rgba(139,0,0,0.08),inset_-2px_-2px_6px_rgba(255,255,255,0.9)]
                            group-hover:shadow-[inset_3px_3px_8px_rgba(139,0,0,0.12),inset_-2px_-2px_6px_rgba(255,255,255,0.95),0_0_16px_rgba(139,0,0,0.1)]
                            transition-shadow duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-utbex-maroon drop-shadow-[0_0_4px_rgba(139,0,0,0.2)]">
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>

            <h3 className="text-3xl font-black text-utbex-dark mb-5 tracking-tight">Visi Kami</h3>
            <p className="text-utbex-text-secondary text-lg leading-relaxed font-medium">
              Menjadi pusat pengembangan kreativitas dan pemberdayaan pemuda desa berbasis ekonomi kreatif yang berkelanjutan dan berdampak nasional hingga global.
            </p>

            {/* Subtle shimmer on hover */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            </div>
          </motion.div>

          {/* ── Misi — Glassmorphic Dark ── */}
          <motion.div
            variants={staggerChild}
            className="group relative rounded-[2rem] p-8 sm:p-12 text-white h-full flex flex-col overflow-hidden
                       bg-[#111111]/[0.92] backdrop-blur-xl
                       border border-white/[0.08]
                       shadow-[0_16px_48px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]
                       hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12),0_0_40px_rgba(139,0,0,0.08)]
                       transition-all duration-500 hover:-translate-y-1"
          >
            {/* Glass inner border (skeuomorphic) */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.05] pointer-events-none" />
            {/* Top-edge glass shine */}
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

            <h3 className="text-3xl font-black mb-8 text-white tracking-tight">Misi Utama</h3>
            <ul className="space-y-6 flex-1">
              {misiItems.map((misi, i) => (
                <li key={i} className="group/item flex gap-4 items-start">
                  {/* Neon numbered circle */}
                  <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-bold mt-0.5
                                   bg-utbex-maroon/20 border border-utbex-maroon/30 text-white/90
                                   shadow-[0_0_10px_rgba(139,0,0,0.25),0_0_3px_rgba(139,0,0,0.4)]
                                   group-hover/item:shadow-[0_0_16px_rgba(139,0,0,0.4),0_0_6px_rgba(139,0,0,0.6)]
                                   group-hover/item:bg-utbex-maroon/30
                                   transition-all duration-400">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-white/75 leading-relaxed font-medium
                                   group-hover/item:text-white/90 group-hover/item:translate-x-1
                                   transition-all duration-400">
                    {misi}
                  </span>
                </li>
              ))}
            </ul>

            {/* Shimmer sweep on hover */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            Timeline — Neumorphic Glass Cards + Neon Accents
            ═══════════════════════════════════════════ */}
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">

          {/* Sticky left label (desktop) — neon styled */}
          <div className="hidden lg:block">
            <div className="sticky top-1/3">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-widest text-utbex-text-secondary/50 uppercase neon-text-maroon">Perjalanan</p>
                <p className="text-xs text-utbex-text-secondary/50">2014 — Sekarang</p>
              </div>
              {/* Neon glowing line */}
              <motion.div className="mt-8 w-px h-40 bg-gradient-to-b from-utbex-maroon/40 to-transparent
                                     shadow-[0_0_8px_rgba(139,0,0,0.2)]" />
            </div>
          </div>

          {/* Right: Scroll cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 lg:space-y-10"
          >
            {milestones.map((item) => (
              <motion.div
                key={item.year}
                variants={staggerChild}
                className="group relative rounded-2xl overflow-hidden
                           bg-white/65 backdrop-blur-lg
                           border border-white/60
                           shadow-[6px_6px_20px_rgba(0,0,0,0.05),-4px_-4px_16px_rgba(255,255,255,0.9)]
                           hover:shadow-[6px_6px_24px_rgba(0,0,0,0.08),-4px_-4px_20px_rgba(255,255,255,0.95),0_0_20px_rgba(139,0,0,0.06)]
                           transition-all duration-500 hover:-translate-y-0.5"
              >
                {/* Left neon accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-utbex-maroon/50
                                shadow-[0_0_8px_rgba(139,0,0,0.3),0_0_16px_rgba(139,0,0,0.15)]
                                group-hover:shadow-[0_0_12px_rgba(139,0,0,0.5),0_0_24px_rgba(139,0,0,0.2)]
                                transition-shadow duration-500" />

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px]">
                  {/* Text content */}
                  <div className="p-7 lg:p-9 pl-8 lg:pl-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-black text-utbex-maroon neon-text-maroon">{item.year}</span>
                      {/* Glass tag pill */}
                      <span className="text-xs font-semibold tracking-wider text-utbex-text-secondary/70 uppercase
                                       bg-utbex-maroon/[0.04] backdrop-blur-sm border border-utbex-maroon/[0.08]
                                       rounded-full px-3 py-1
                                       shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-utbex-dark mb-3 leading-snug group-hover:text-utbex-maroon transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-utbex-text-secondary leading-relaxed mb-4">
                      {item.story}
                    </p>
                    {/* Evidence — glass pill badge */}
                    {item.evidence && (
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-utbex-maroon/90
                                      bg-utbex-maroon/[0.04] backdrop-blur-sm w-fit px-3 py-1.5 rounded-lg
                                      border border-utbex-maroon/[0.08]
                                      shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(139,0,0,0.04)]
                                      group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(139,0,0,0.04),0_0_12px_rgba(139,0,0,0.06)]
                                      transition-shadow duration-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_3px_rgba(139,0,0,0.3)]">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <span>Bukti: {item.evidence}</span>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video sm:aspect-auto sm:h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Glass overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]" />
                  </div>
                </div>

                {/* Shimmer sweep */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            Quote Block — Neon Ring + Enhanced Glass
            ═══════════════════════════════════════════ */}
        <div className="mt-16 sm:mt-20 lg:mt-32 relative perspective-[1000px]">
          {/* Neon outer ring (pulsing glow) */}
          <div className="absolute -inset-1 rounded-[2.2rem] sm:rounded-[2.7rem] neon-pulse pointer-events-none" />

          <motion.blockquote
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-utbex-maroon to-[#5A0000] p-8 sm:p-14 lg:p-16 text-white overflow-hidden
                       transition-all duration-700 hover:scale-[1.02]
                       shadow-[0_20px_60px_rgba(139,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.2)]
                       hover:shadow-[0_30px_80px_rgba(139,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] transform-gpu cursor-default"
          >
            {/* Glassmorphic overlay layer */}
            <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.04] backdrop-blur-[2px] pointer-events-none" />

            {/* Skeuomorphic inner bevel */}
            <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[2rem] sm:rounded-[2.5rem] mix-blend-overlay pointer-events-none" />
            {/* Top-edge glass shine */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Neon Sweep Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/40 blur-[100px] rounded-full pointer-events-none" />

            {/* Giant quote mark (glass effect) */}
            <div className="absolute -top-10 -left-6 sm:-top-16 sm:-left-12 text-[120px] sm:text-[180px] font-serif leading-none text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700 group-hover:scale-110 group-hover:-rotate-6 origin-top-left">
              &ldquo;
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.4] text-transparent bg-clip-text bg-gradient-to-br from-white via-white/95 to-white/70 mb-10">
                UTBEX tidak hanya mengajari kami cara menjalankan bisnis.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white italic font-light drop-shadow-md pr-1">Mereka lebih dulu percaya</span>
                  {/* Highlight marker (animated on hover) */}
                  <motion.span
                    className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-white/20 -z-10 -rotate-2 rounded-sm"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                  />
                  {/* Secondary highlight + neon glow on hover */}
                  <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-white/40 -z-10 -rotate-2 rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out block
                                   shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
                </span>
                {" "}pada kami.
              </p>

              <footer className="flex items-center gap-5 relative">
                {/* Neumorphic + Neon User Icon Container */}
                <div className="relative w-14 h-14 rounded-full
                                bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md
                                border border-white/20
                                shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_16px_rgba(0,0,0,0.2),0_0_12px_rgba(139,0,0,0.15)]
                                flex items-center justify-center flex-shrink-0
                                group-hover:bg-white/30 transition-all duration-500
                                group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.4),0_0_20px_rgba(139,0,0,0.3)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white filter drop-shadow-md group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] transition-all">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <p className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:translate-x-1 transition-transform duration-500 drop-shadow-sm">Mitra Komunitas</p>
                  <div className="flex items-center gap-2 mt-1 group-hover:translate-x-2 transition-transform duration-700 delay-75">
                    <div className="w-5 h-px bg-white/60" />
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Jawa Timur</p>
                  </div>
                </div>
              </footer>
            </div>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
