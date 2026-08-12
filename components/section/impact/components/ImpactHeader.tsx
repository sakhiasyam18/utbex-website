// components/section/impact/components/ImpactHeader.tsx
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";

export const ImpactHeader = () => (
  <motion.header
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16 lg:mb-24 max-w-4xl mx-auto text-center"
  >
    {/* Label */}
    <motion.div variants={staggerChild} className="text-mask flex justify-center">
      <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-black/5 backdrop-blur-md mb-6 shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-utbex-maroon uppercase">
          Peluang Kemitraan
        </span>
      </span>
    </motion.div>
    
    {/* Main Headline (SEO optimized with H2) */}
    <motion.div variants={staggerChild} className="text-mask">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.92] tracking-tighter text-utbex-dark">
        OPEN KERJASAMA &amp;{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-utbex-maroon via-red-600 to-utbex-maroon italic pr-2 lg:pr-4">
          KOLABORASI
        </span>
      </h2>
    </motion.div>
  </motion.header>
);
