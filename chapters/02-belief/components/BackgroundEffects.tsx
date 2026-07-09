//app/sections/about/components/BackgroundEffects.tsx
"use client";

import { motion } from "framer-motion";
import { ambientFloat } from "../motion/aboutMotion";
import { usePrefersReducedMotion } from "../utils/aboutHelpers";

/**
 * About section micro-atmosphere.
 * Sits on top of GlobalAtmosphere, adding the section-specific maroon ambient glow.
 *
 * DS 02: "About — Soft clarity. Slightly calmer."
 * DS 04: "About receives neutral white diffusion."
 *
 * The solid background has been removed — GlobalAtmosphere provides the canvas.
 * This component only contributes the section-specific radial accents.
 */
export default function BackgroundEffects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      // bg color removed — global atmosphere provides the warm canvas beneath
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Maroon ambient float — section-specific warmth, gently breathing */}
      <motion.div
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={ambientFloat}
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(122,31,43,0.06)_0%,rgba(122,31,43,0)_70%)]"
      />
      {/* Neutral depth anchor — bottom right corner */}
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.025)_0%,rgba(0,0,0,0)_70%)]" />
    </div>
  );
}
