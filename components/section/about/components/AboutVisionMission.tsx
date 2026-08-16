/**
 * components/section/about/components/AboutVisionMission.tsx
 * ----------------------------------------------------------------------
 * Menampilkan kartu Visi dan Misi perusahaan secara bersisian (Grid 2 kolom).
 * 
 * Desain UI / UX:
 * 1. Kartu Visi (Kiri): Menggunakan gaya "Neumorphic Raised Glass" (terang, timbul).
 * 2. Kartu Misi (Kanan): Menggunakan gaya "Glassmorphic Dark" (gelap, elegan).
 * 
 * Interaktivitas:
 * - Efek hover 3D: Kartu akan sedikit terangkat saat di-hover.
 * - Efek "Shimmer Sweep": Saat di-hover, ada animasi kilauan cahaya yang menyapu 
 *   melewati kartu (menggunakan properti `translate-x`).
 * 
 * Data Misi diambil dari file statis `aboutData.ts` lalu di-looping (map).
 */
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";
import { misiItems } from "../data/aboutData";

export function AboutVisionMission() {
  return (
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
          &quot;Menjadi pusat pengembangan kreativitas dan pemberdayaan pemuda desa berbasis ekonomi kreatif yang berkelanjutan dan berdampak nasional hingga global.&quot;
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
  );
}
