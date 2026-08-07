// components/section/footer/components/FooterClosing.tsx
import { m as motion } from "framer-motion";
import { WhatsAppIcon, ArrowIcon } from "./Icons";

export function FooterClosing() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-16 lg:mb-20
                   bg-gradient-to-br from-utbex-maroon to-[#5A0000]
                   shadow-[0_20px_60px_rgba(139,0,0,0.22),inset_0_2px_4px_rgba(255,255,255,0.18)]
                   hover:shadow-[0_28px_72px_rgba(139,0,0,0.32),inset_0_2px_4px_rgba(255,255,255,0.24)]
                   transition-all duration-700 cursor-default"
      >
        {/* Inner glass overlay */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none" />
        {/* Skeuomorphic top bevel */}
        <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[2rem] sm:rounded-[2.5rem] mix-blend-overlay pointer-events-none" />
        {/* Top shine line */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
        {/* Hover shimmer sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
        {/* Ambient glow top-left */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 sm:p-12 lg:p-14">
          {/* Left: copy */}
          <div className="max-w-lg">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 mb-4">
              — Kolaborasi Berikutnya
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
              Mari bangun perubahan<br />
              <span className="italic font-light text-white/80">berikutnya bersama kami.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-sm">
              Dari desa, untuk Indonesia. Setiap kolaborasi dimulai dari satu percakapan.
            </p>
          </div>

          {/* Right: CTA button — neumorphic glass style */}
          <a
            href="https://wa.me/6282252358901"
            target="_blank"
            rel="noopener noreferrer"
            id="klik-whatsapp"
            aria-label="Mulai percakapan via WhatsApp"
            className="group/btn relative flex-shrink-0 flex items-center gap-3
                       px-8 py-5 rounded-[1.5rem]
                       bg-white/15 backdrop-blur-md
                       border border-white/25
                       shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.15)]
                       hover:bg-white/25 hover:border-white/40
                       hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.2),0_0_24px_rgba(255,255,255,0.15)]
                       transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon />
            <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">
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
