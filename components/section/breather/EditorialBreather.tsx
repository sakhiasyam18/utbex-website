"use client";

import { m as motion } from "framer-motion";

export function EditorialBreather() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#111111] text-white overflow-hidden my-8">
      {/* Decorative subtle gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-utbex-maroon uppercase">
            — Filosofi Perjalanan
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light italic leading-relaxed text-white/95 max-w-3xl">
            &ldquo;Berpikirlah yang secara logika orang akan bilang tidak mungkin. 
            Kemudian pikirkan lagi, cari caranya hingga hal tersebut berubah 
            menjadi mungkin.&rdquo;
          </blockquote>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-px bg-white/30" />
            <cite className="not-italic text-sm font-semibold tracking-wider uppercase text-white/70">
              Arik Dwi Asmara — CEO &amp; Founder UTBEX
            </cite>
            <div className="w-8 h-px bg-white/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
