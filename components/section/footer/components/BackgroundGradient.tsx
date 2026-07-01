// components/section/footer/components/BackgroundGradient.tsx
// REVISION 07: Added extremely subtle grain texture and a second soft light
//              variation. Visitors should feel the atmosphere, not see it.
"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../utils/footerHelpers";
import { ambientFloat } from "../../about/motion/aboutMotion";

/**
 * Background atmosphere for the Footer.
 *
 * Per 02_FOOTER_VISUAL_SYSTEM.md:
 * — Very soft warm gradient, almost invisible.
 * — No obvious color transition.
 * — The background should feel continuous with Portfolio.
 *
 * REVISION 07: Adds an editorial layer:
 * — SVG feTurbulence grain, opacity 0.018 — felt, not seen.
 * — A second soft warm radial from the top-right creates barely-visible
 *   light variation that gives the page a final warmth.
 *
 * Purely decorative — always aria-hidden.
 */
export default function BackgroundGradient() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Primary soft radial — mirrors the Portfolio BackgroundLighting */}
      <motion.div
        animate={prefersReducedMotion ? undefined : "animate"}
        variants={ambientFloat}
        className="absolute -top-32 left-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(122,31,43,0.035)_0%,rgba(122,31,43,0)_70%)] blur-[100px]"
      />

      {/* Secondary warmth — top right, almost invisible */}
      <div className="absolute -top-16 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(251,243,234,0.6)_0%,rgba(251,243,234,0)_70%)] blur-[80px]" />

      {/* Bottom closing warmth */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50/40 to-transparent" />

      {/* Extremely subtle film grain — felt, not seen (opacity 0.018) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.018] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="footer-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footer-grain)" />
      </svg>
    </div>
  );
}
