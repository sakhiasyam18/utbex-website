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
      <div className="absolute -top-6 -left-2 text-[80px] font-serif leading-none text-black/5 select-none group-hover:text-utbex-maroon/10 transition-colors duration-500 rotate-12">
        &ldquo;
      </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

        <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
          Mulai Berkolaborasi
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-utbex-maroon transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
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
);
