import Image from "next/image";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../../motion/variants/stagger";
import { milestones } from "../data/aboutData";

export function AboutMilestones() {
  return (
    <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-1/3">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-widest text-utbex-text-secondary/50 uppercase neon-text-maroon">Perjalanan</p>
            <p className="text-xs text-utbex-text-secondary/50">2014 — Sekarang</p>
          </div>
          <motion.div className="mt-8 w-px h-40 bg-gradient-to-b from-utbex-maroon/40 to-transparent shadow-[0_0_8px_rgba(139,0,0,0.2)]" />
        </div>
      </div>

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
            <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-utbex-maroon/50
                            shadow-[0_0_8px_rgba(139,0,0,0.3),0_0_16px_rgba(139,0,0,0.15)]
                            group-hover:shadow-[0_0_12px_rgba(139,0,0,0.5),0_0_24px_rgba(139,0,0,0.2)]
                            transition-shadow duration-500" />

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px]">
              <div className="p-7 lg:p-9 pl-8 lg:pl-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-black text-utbex-maroon neon-text-maroon">{item.year}</span>
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

              <div className="relative aspect-video sm:aspect-auto sm:h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]" />
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
