import { m as motion } from "framer-motion";

export function AboutQuote() {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-32 relative perspective-[1000px]">
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
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.04] backdrop-blur-[2px] pointer-events-none" />

        <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[2rem] sm:rounded-[2.5rem] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

        <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="absolute -top-10 -left-6 sm:-top-16 sm:-left-12 text-[120px] sm:text-[180px] font-serif leading-none text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700 group-hover:scale-110 group-hover:-rotate-6 origin-top-left">
          &ldquo;
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.4] text-transparent bg-clip-text bg-gradient-to-br from-white via-white/95 to-white/70 mb-10">
            UTBEX tidak hanya mengajari kami cara menjalankan bisnis.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white italic font-light drop-shadow-md pr-1">Mereka lebih dulu percaya</span>
              <motion.span
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-white/20 -z-10 -rotate-2 rounded-sm"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
              />
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-white/40 -z-10 -rotate-2 rounded-sm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out block
                               shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
            </span>
            {" "}pada kami.
          </p>

          <footer className="flex items-center gap-5 relative">
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
  );
}
