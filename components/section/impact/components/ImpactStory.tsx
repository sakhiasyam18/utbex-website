// components/section/impact/components/ImpactStory.tsx
import Link from "next/link";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";

export const ImpactStory = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col gap-8 xl:gap-10"
  >
    {/* Opening paragraph — glass card */}
    <motion.div
      variants={staggerChild}
      className="relative p-6 sm:p-8 rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/70 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_0_6px_24px_rgba(0,0,0,0.04)]"
    >
      <p className="text-lg sm:text-xl xl:text-2xl text-utbex-text-secondary/90 leading-relaxed font-medium">
        Bagi kami, dampak bukan hanya tentang berapa banyak program yang telah berjalan. Dampak adalah{" "}
        <strong className="text-utbex-dark font-black bg-white/60 px-1 rounded-sm shadow-sm border border-white/80">perubahan yang tetap dirasakan</strong>{" "}
        setelah kegiatan selesai hubungan yang terus terjalin, dan peluang baru yang terus berkembang bersama masyarakat.
      </p>
    </motion.div>

    {/* Testimonial — Glassmorphism + Neumorphism blockquote */}
    <motion.blockquote
      variants={staggerChild}
      className="relative p-6 sm:p-8 xl:p-10 rounded-[2rem] xl:rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white/80 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_0_8px_32px_rgba(0,0,0,0.05)] group overflow-hidden transition-all duration-500 hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_0_16px_48px_rgba(139,0,0,0.06)] hover:border-utbex-maroon/10"
    >
      {/* Ambient glow inside card */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-utbex-maroon/[0.03] rounded-full blur-[80px] pointer-events-none group-hover:bg-utbex-maroon/[0.06] transition-colors duration-700" />

      {/* Decorative quote mark */}
      <div className="absolute -top-4 -left-1 xl:-top-6 xl:-left-2 text-[70px] xl:text-[80px] font-serif leading-none text-utbex-maroon/[0.06] select-none group-hover:text-utbex-maroon/[0.12] transition-colors duration-500 rotate-6">
        &ldquo;
      </div>

      <p className="relative z-10 text-base sm:text-lg xl:text-xl text-utbex-dark/90 italic leading-relaxed mb-6 xl:mb-8 font-medium">
        &ldquo;Mari bersama membangun desa, mencetak generasi kreatif, dari pinggiran menuju pusat kemajuan. Dari Desa, Untuk Dunia.&rdquo;
      </p>

      <footer className="relative z-10 flex items-start gap-4">
        <div className="w-8 xl:w-10 h-[2px] bg-utbex-maroon shrink-0 rounded-full mt-2.5" />
        <span className="text-xs sm:text-sm text-utbex-text-secondary/80 font-bold leading-relaxed">
          UTBEX Indonesia siap menjadi mitra strategis bagi perusahaan, lembaga, maupun pemerintah dalam membangun ekonomi kreatif desa berkelanjutan.
        </span>
      </footer>
    </motion.blockquote>

    {/* CTA Buttons — Neumorphism style */}
    <motion.div variants={staggerChild} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {/* Primary CTA — Maroon with glass inset */}
      <Link
        href="/layanan"
        aria-label="Mulai Berkolaborasi - Lihat Layanan"
        className="group relative flex items-center justify-center gap-3 px-7 sm:px-8 py-4 sm:py-5 bg-utbex-maroon text-white rounded-2xl text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden
                   transition-all duration-500 border border-transparent
                   shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_8px_24px_rgba(139,0,0,0.3)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),_0_16px_40px_rgba(139,0,0,0.4)]
                   hover:-translate-y-1 active:translate-y-0.5 hover:border-white/20 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]"
      >
        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

        <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
          Mulai Berkolaborasi
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-utbex-maroon transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </span>
      </Link>

      {/* Secondary CTA — Neumorphism glass button */}
      <Link
        href="#about"
        className="flex items-center justify-center gap-2 px-7 sm:px-8 py-4 sm:py-5 bg-white/60 backdrop-blur-sm border border-white/80 text-utbex-dark/80 rounded-2xl text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase
                   shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),_2px_2px_8px_rgba(0,0,0,0.05)]
                   hover:bg-white/80 hover:text-utbex-dark hover:border-utbex-maroon/10 hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),_4px_4px_16px_rgba(139,0,0,0.08)] hover:-translate-y-0.5
                   transition-all duration-300"
      >
        Pelajari Perjalanan Kami
      </Link>
    </motion.div>
  </motion.div>
);
