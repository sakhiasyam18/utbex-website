// components/section/impact/components/ImpactCollaborations.tsx
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";
import { collaborationItemsData } from "../data/impactData";

export const ImpactCollaborations = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="mt-16 mb-24 max-w-4xl mx-auto relative z-10"
  >
    {/* Ambient glow behind the card */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-utbex-maroon/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />

    <div className="relative p-6 sm:p-8 xl:p-10 rounded-[2rem] xl:rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-white/80 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Decorative Blur Orb — maroon ambient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-utbex-maroon/[0.04] rounded-full blur-[90px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      {/* Secondary orb — bottom-left */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-900/[0.02] rounded-full blur-[70px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Glass pill label */}
      <motion.span
        variants={staggerChild}
        className="inline-block text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/80 mb-5 xl:mb-6 px-3 sm:px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-utbex-maroon/10 shadow-sm"
      >
        Peluang Kemitraan
      </motion.span>

      <motion.h3 variants={staggerChild} className="text-xl sm:text-2xl xl:text-3xl font-black text-utbex-dark mb-8 tracking-tight bg-gradient-to-br from-utbex-dark via-utbex-dark to-utbex-maroon/70 bg-clip-text text-transparent leading-[1.15]">
        Bentuk Kolaborasi Yang Ditawarkan
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {collaborationItemsData.map((item, i) => (
          <motion.div
            key={i}
            variants={staggerChild}
            className="group flex items-start gap-3 xl:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),_2px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),_4px_4px_16px_rgba(139,0,0,0.08)] hover:border-utbex-maroon/15 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Neumorphism check circle */}
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-white/80 border border-white flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_2px_2px_6px_rgba(0,0,0,0.05)] group-hover:bg-utbex-maroon/10 group-hover:border-utbex-maroon/20 group-hover:shadow-[0_0_12px_rgba(139,0,0,0.12)] transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-utbex-maroon/70 group-hover:text-utbex-maroon transition-colors duration-300">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm sm:text-[15px] xl:text-base font-semibold text-utbex-text-secondary leading-snug group-hover:text-utbex-dark transition-colors duration-300 pt-0.5">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);
