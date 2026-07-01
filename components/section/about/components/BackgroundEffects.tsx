//app/sections/about/components/BackgroundEffects.tsx
"use client";

import { motion } from "framer-motion";
import { ambientFloat } from "../motion/aboutMotion";
import { usePrefersReducedMotion } from "../utils/aboutHelpers";

/**
 * Continues the Hero atmosphere: soft white background, a very subtle
 * gradient, and a light radial glow. Purely decorative — never a focal
 * point, always aria-hidden.
 */
export default function BackgroundEffects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[color:var(--utbex-off-white,#FAF9F7)]"
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={ambientFloat}
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(122,31,43,0.06)_0%,rgba(122,31,43,0)_70%)]"
      />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_70%)]" />
    </div>
  );
}
