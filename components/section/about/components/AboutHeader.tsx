import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../../motion/variants/stagger";

export function AboutHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 lg:mb-24"
    >
      <motion.div variants={staggerChild} className="text-mask">
        <span className="inline-block text-xs font-semibold tracking-widest text-utbex-maroon uppercase mb-4 neon-text-maroon">
          — Executive Summary
        </span>
      </motion.div>

      <motion.div variants={staggerChild} className="text-mask">
        <h2
          id="about-headline"
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark leading-[0.95] tracking-tighter max-w-4xl"
        >
          Unusually Think{" "}
          <span className="text-utbex-maroon italic neon-text-maroon">Become Extraordinary.</span>
        </h2>
      </motion.div>

      {/* ── Editorial UI Card ── */}
      <motion.div variants={staggerChild} className="mt-12 lg:mt-16">
        <div className="relative group rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 
                        bg-white/60 backdrop-blur-xl border border-white/80
                        shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]
                        hover:shadow-[0_16px_48px_rgba(139,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)]
                        transition-all duration-700 ease-out overflow-hidden">
          
          {/* Glass glare effect */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
          
          {/* Subtle animated background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-utbex-maroon/[0.02] rounded-full blur-[80px] group-hover:bg-utbex-maroon/[0.04] transition-colors duration-1000 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left: Decorative Neumorphic Icon */}
            <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl items-center justify-center
                            bg-utbex-canvas shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_-4px_12px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(255,255,255,0.5)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-utbex-maroon drop-shadow-sm">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>

            {/* Right: Typography */}
            <div className="flex-1 relative">
              {/* Neon accent line (Mobile mostly, but adds a nice touch on desktop too) */}
              <div className="absolute -left-4 sm:-left-8 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-utbex-maroon/60 to-transparent shadow-[0_0_8px_rgba(139,0,0,0.2)]" />
              
              <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-utbex-dark leading-[1.6] font-medium tracking-tight mb-8">
                UTBEX Indonesia adalah lembaga <span className="font-bold text-utbex-maroon relative inline-block">social enterprise<span className="absolute bottom-1 left-0 right-0 h-2 bg-utbex-maroon/10 -z-10 rounded-sm" /></span> berbasis desa yang mengusung filosofi &quot;Unusually Think Become Extraordinary&quot; — berpikir kreatif, melahirkan dampak nyata.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <p className="text-sm sm:text-base text-utbex-text-secondary leading-relaxed">
                  Sejak berdiri 2014, UTBEX terus mendorong pemuda desa untuk bangkit, berkarya, dan berwirausaha melalui <strong className="text-utbex-dark font-semibold">ekosistem ekonomi kreatif</strong>, dengan fokus pengembangan fashion, kriya, UMKM kuliner, pariwisata pesisir, dan edukasi kewirausahaan.
                </p>
                <div className="flex flex-col h-full justify-between gap-6">
                  <p className="text-sm sm:text-base text-utbex-text-secondary leading-relaxed">
                    Genap 1 Dekade, Kini UTBEX bertransformasi menjadi <strong className="text-utbex-dark font-semibold">Creative Hub Pesisir</strong>, menggandeng berbagai sektor untuk membangun generasi kreatif desa yang berkelanjutan.
                  </p>
                  
                  {/* Signature */}
                  <div className="flex items-center gap-3 pt-4 border-t border-black/5 self-start md:self-end mt-auto">
                    <div className="w-8 h-[1px] bg-utbex-maroon/40" />
                    <span className="font-bold text-sm tracking-widest text-utbex-dark uppercase">Arik Dwi Asmara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
