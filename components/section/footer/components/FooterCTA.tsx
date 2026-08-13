import { m as motion } from "framer-motion";
import { WhatsAppIcon, ArrowIcon } from "./FooterIcons";

export function FooterCTA() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 pt-10 sm:pt-20 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden mb-10 lg:mb-16
                   bg-gradient-to-br from-utbex-maroon to-[#5A0000]
                   shadow-[0_20px_60px_rgba(139,0,0,0.22),inset_0_2px_4px_rgba(255,255,255,0.18)]
                   hover:shadow-[0_28px_72px_rgba(139,0,0,0.32),inset_0_2px_4px_rgba(255,255,255,0.24)]
                   transition-all duration-700 cursor-default"
      >
        {/* Inner glass overlay */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none" />
        {/* Skeuomorphic top bevel */}
        <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] mix-blend-overlay pointer-events-none" />
        {/* Top shine line */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
        {/* Hover shimmer sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
        {/* Ambient glow top-left */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 p-5 sm:p-12 lg:p-14">
          {/* Left: copy */}
          <div className="max-w-xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 mb-4">
              — Pesan Inspirasi
            </span>
            <blockquote className="relative">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 text-4xl sm:text-5xl text-white/10 font-serif leading-none select-none" aria-hidden="true">"</div>
              <h2 className="text-base sm:text-2xl lg:text-3xl font-light text-white leading-[1.35] tracking-tight mb-4 sm:mb-5 relative z-10">
                <span className="italic text-white/90">"Berpikirlah yang secara logika orang akan bilang tidak mungkin.</span>{" "}
                <span className="font-black text-white">Kemudian pikirkan lagi, cari caranya hingga hal tersebut berubah menjadi mungkin."</span>
              </h2>
            </blockquote>
            <p className="text-xs sm:text-base text-white/70 font-semibold tracking-wide flex items-center gap-3">
              <span className="w-6 h-px bg-utbex-maroon/50 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              Arik Dwi Asmara
            </p>
          </div>

          {/* Right: CTA button — neumorphic glass style */}
          <a
            href="https://wa.me/6282252358901"
            target="_blank"
            rel="noopener noreferrer"
            id="klik-whatsapp"
            aria-label="Mulai percakapan via WhatsApp"
            className="group/btn relative flex-shrink-0 flex items-center justify-center gap-2 sm:gap-3
                       w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-5 rounded-[1.25rem] sm:rounded-[1.5rem]
                       bg-white/15 backdrop-blur-md
                       border border-white/25
                       shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.15)]
                       hover:bg-white/25 hover:border-white/40
                       hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.2),0_0_24px_rgba(255,255,255,0.15)]
                       transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">
              Mulai Percakapan
            </span>
            <span className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center
                             group-hover/btn:bg-white group-hover/btn:text-utbex-maroon transition-all duration-300">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
