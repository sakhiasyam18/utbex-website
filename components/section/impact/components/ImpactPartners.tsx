// components/section/impact/components/ImpactPartners.tsx
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";
import { partnersData } from "../data/impactData";

export const ImpactPartners = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
  >
    {partnersData.map((partner) => (
      <motion.article
        key={partner.id}
        variants={staggerChild}
        className={`group relative rounded-[2rem] p-6 lg:p-8 overflow-hidden cursor-default
                   bg-white border border-black/[0.04] h-full flex flex-col
                   transition-all duration-500 hover:-translate-y-2 min-h-[200px]
                   shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_2px_4px_rgba(255,255,255,1)]
                   backdrop-blur-xl ${partner.glow}`}
      >
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-b ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Top edge highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full text-left gap-3">
          <div className="mb-2">
            <span className="text-[10px] font-black text-black/20 tracking-[0.2em] group-hover:text-utbex-maroon/40 transition-colors duration-500">
              {partner.num}
            </span>
          </div>
          <h3 className={`text-xl font-bold tracking-tight text-utbex-dark/90 transition-colors duration-300 ${partner.textGlow}`}>
            {partner.title}
          </h3>
          <p className="text-sm font-medium text-utbex-dark/70 leading-relaxed mt-2">
            {partner.desc}
          </p>
        </div>
      </motion.article>
    ))}
  </motion.div>
);
