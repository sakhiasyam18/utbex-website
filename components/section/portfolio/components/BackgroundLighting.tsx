// components/section/portfolio/components/BackgroundLighting.tsx
"use client";

import { motion } from "framer-motion";

/**
 * DS-compliant atmosphere for Portfolio section.
 * DS 02: Allowed: white radial light, warm ivory glow, soft maroon diffusion, neutral light bloom.
 * DS 06: Opacity below 5%. Lighting should feel natural. Never amber/orange saturated.
 */
export default function BackgroundLighting() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft maroon ambient glow top-left — DS: "soft maroon diffusion" */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-utbex-maroon/[0.025] via-utbex-maroon/[0.008] to-transparent blur-[140px]"
      />

      {/* Warm ivory neutral bloom bottom-right — DS: "warm ivory glow", "neutral light bloom" */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-[55%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-100/40 via-stone-50/10 to-transparent blur-[160px]"
      />
    </div>
  );
}

