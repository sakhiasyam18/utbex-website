"use client";

import { m as motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#030003] text-white overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] bg-utbex-maroon/20 blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] text-utbex-maroon uppercase mb-6">
            Tagline UTBEX Indonesia
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 tracking-tight leading-[1.1] mb-10">
            FROM IDEAS TO <span className="text-utbex-maroon">IMPACT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-medium">
              Setiap ide kecil yang lahir di desa, dengan keberanian dan kreativitas, akan membawa dampak besar bagi desa, daerah, hingga bangsa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-medium">
              Masa depan UTBEX terlihat cerah dengan rencana untuk memperluas program dan menjangkau lebih banyak komunitas. Kami berkomitmen untuk terus berinovasi dan menciptakan dampak positif yang lebih besar di seluruh Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
