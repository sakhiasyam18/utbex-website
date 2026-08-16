/**
 * components/section/cta/CTA.tsx
 * ----------------------------------------------------------------------
 * Komponen Call to Action (CTA) utama yang mengajak pengguna untuk 
 * berkolaborasi atau mempelajari lebih lanjut tentang UTBEX.
 * 
 * Interaksi CTA:
 * - Tombol "Mulai Berkolaborasi" mengarah ke link WhatsApp secara eksternal (`target="_blank"`).
 * - Tombol "Pelajari Perjalanan Kami" mengarah ke anchor link `#about` untuk scroll ke atas.
 * 
 * Animasi Masuk:
 * - Teks dan tombol di-animasikan bertahap (staggered fade up) saat masuk viewport.
 */
"use client";

import { m as motion } from "framer-motion";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative w-full py-16 sm:py-32 bg-[#030003] text-white overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] bg-utbex-maroon/20 blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] text-utbex-maroon uppercase mb-6">
            Tagline UTBEX Indonesia
          </span>
          
          <h2 id="cta-heading" className="text-3xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 tracking-tight leading-[1.1] mb-8 sm:mb-10">
            FROM IDEAS TO <span className="text-utbex-maroon">IMPACT</span>
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-lg text-white/70 leading-relaxed font-medium">
              Setiap ide kecil yang lahir di desa, dengan keberanian dan kreativitas, akan membawa dampak besar bagi desa, daerah, hingga bangsa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-lg text-white/70 leading-relaxed font-medium">
              Masa depan UTBEX terlihat cerah dengan rencana untuk memperluas program dan menjangkau lebih banyak komunitas. Kami berkomitmen untuk terus berinovasi dan menciptakan dampak positif yang lebih besar di seluruh Indonesia.
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14"
        >
          <a
            href="https://wa.me/6282252358901"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-kolaborasi"
            aria-label="Mulai Berkolaborasi - Hubungi via WhatsApp"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-utbex-maroon text-white rounded-2xl text-sm font-bold tracking-wide
                       shadow-[0_8px_32px_rgba(139,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]
                       hover:shadow-[0_12px_40px_rgba(139,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]
                       hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Mulai Berkolaborasi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#about"
            id="cta-pelajari"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 rounded-2xl text-sm font-bold tracking-wide
                       bg-white/[0.04] backdrop-blur-sm
                       hover:bg-white/[0.08] hover:border-white/30 hover:text-white
                       hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Pelajari Perjalanan Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
