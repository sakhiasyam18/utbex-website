"use client";
// components/section/about/About.tsx — Gen Z Glassmorphism / Neumorphism Redesign

import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const popUpChild = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 1
    }
  }
};


const misiItems = [
  "Memberdayakan pemuda desa",
  "Mengembangkan produk lokal unggulan",
  "Menghubungkan dunia usaha, akademisi, dan komunitas",
  "Menguatkan ekosistem kreatif desa pesisir",
  "Mendorong wirausaha mandiri & tangguh",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative w-full overflow-hidden"
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
          <motion.div variants={staggerChild} className="text-mask flex justify-center lg:justify-start">
            <span className="inline-block px-4 py-1.5 rounded-full bg-utbex-maroon/10 border border-utbex-maroon/20 text-xs font-bold tracking-widest text-utbex-maroon uppercase mb-6 shadow-sm">
              EXECUTIVE SUMMARY
            </span>
          </motion.div>

          {/* Description in frosted glass card */}
          <motion.div variants={staggerChild} className="max-w-4xl">
            <div className="about-glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6">
              <p className="text-base sm:text-lg text-utbex-dark leading-relaxed font-medium">
                UTBEX Indonesia adalah lembaga <em className="text-utbex-dark not-italic font-bold">social enterprise</em> berbasis desa yang mengusung filosofi &ldquo;Unusually Think Become Extraordinary&rdquo; &mdash; berpikir kreatif, melahirkan dampak nyata. Sejak berdiri 2014, UTBEX terus mendorong pemuda desa untuk bangkit, berkarya, dan berwirausaha melalui ekosistem ekonomi kreatif, dengan fokus pengembangan fashion, kriya, UMKM kuliner, pariwisata pesisir, dan edukasi kewirausahaan.
              </p>
              <p className="text-base sm:text-lg text-utbex-dark leading-relaxed font-medium">
                <span className="font-bold text-utbex-maroon">Genap 1 Dekade</span> Kini UTBEX bertransformasi menjadi Creative Hub Pesisir, menggandeng berbagai sektor untuk membangun generasi kreatif desa yang berkelanjutan.
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
              &quot;Menjadi pusat pengembangan ekonomi kreatif berbasis pemuda desa yang berdampak nasional dan global, mendorong Indonesia Emas 2045.&quot;
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
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.5] text-transparent bg-clip-text bg-gradient-to-br from-white via-white/95 to-white/70 mb-10">
                Sebuah ruang kreatif diciptakan untuk mereka yang ingin berkarya, sehingga mampu menumbuhkan{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white italic font-light drop-shadow-md px-1">wirausahawan baru</span>
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
                {" "}yang saling membantu untuk bertumbuh.
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
                  <p className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:translate-x-1 transition-transform duration-500 drop-shadow-sm">DakoMagz #20</p>
                  <div className="flex items-center gap-2 mt-1 group-hover:translate-x-2 transition-transform duration-700 delay-75">
                    <div className="w-5 h-px bg-white/60" />
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Edisi Tokoh Inspiratif</p>
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
