// components/section/impact/components/ImpactCollaborations.tsx
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/motion/variants/stagger";
import { collaborationItemsData } from "../data/impactData";

export const ImpactCollaborations = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="mt-16 mb-24 max-w-4xl mx-auto relative z-10"
  >
    <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-black/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1)] relative overflow-hidden">
      {/* Decorative Blur Orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-utbex-maroon/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <motion.h3 variants={staggerChild} className="text-xl sm:text-2xl font-black text-utbex-dark mb-6 tracking-tight uppercase text-center sm:text-left">
        Bentuk Kolaborasi Yang Ditawarkan
      </motion.h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {collaborationItemsData.map((item, i) => (
          <motion.div key={i} variants={staggerChild} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-utbex-maroon/10 text-utbex-maroon flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm sm:text-base font-semibold text-utbex-dark/80 leading-snug">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);
