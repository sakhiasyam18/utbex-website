// components/section/portfolio/components/BackgroundLighting.tsx
"use client";

import { motion } from "framer-motion";

/**
 * Very subtle atmosphere. Golden Hour emotional temperature.
 * Lighting should feel like sunlight entering a room.
 * Pure white remains dominant. Lighting is created using extremely soft radial gradients.
 */
export default function BackgroundLighting() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft warm gradient top left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/40 via-amber-100/10 to-transparent blur-[120px]"
      />

      {/* Very soft secondary warmth bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[60%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-orange-50/5 to-transparent blur-[140px]"
      />
    </div>
  );
}
