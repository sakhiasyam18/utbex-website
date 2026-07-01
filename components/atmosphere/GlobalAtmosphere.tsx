"use client";

import { motion, useReducedMotion } from "framer-motion";

// components/atmosphere/GlobalAtmosphere.tsx
//
// UTBEX Global Atmosphere System - True Invisibility
// Source of truth: /docs/atmosphere/ (all documents) & 12_MASTER_PROMPT.md
//
// ONE BACKGROUND.
// This is the single, continuous environmental layer for the entire website.
// It breathes. It flows. It is never recognizable as "a blur".
//
// Depth Layering:
//   Canvas -> Ambient Gradient -> Light -> Noise -> Content

export function GlobalAtmosphere() {
  const prefersReducedMotion = useReducedMotion();

  // Ultra-slow breathing animation (DS 09: "Movement should require many seconds")
  const breatheAnimation: any = prefersReducedMotion ? {} : {
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.05, 1],
    transition: {
      duration: 18, // 18 seconds per cycle
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  const subtleBreathe: any = prefersReducedMotion ? {} : {
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 24, // 24 seconds, different phase
      repeat: Infinity,
      ease: "easeInOut",
      delay: 5,
    }
  };

  return (
    <div
      aria-hidden="true"
      // 1. CANVAS
      // The foundational climate. FDFCFB to FAF9F7. 
      // It is a real physical space, not a void white hex.
      className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FDFCFB] to-[#FAF9F7] pointer-events-none"
    >
      {/* 2 & 3. AMBIENT GRADIENTS & LIGHT */}
      {/* 
        Extreme scale (2000px+), extreme blur (400px), extreme low opacity.
        The light travels slowly from Top-Left to Bottom-Right.
      */}

      {/* HERO: Top-Left Origin. Clean, soft, warm ivory. */}
      {/* DS 08: Keep Hero clean. No strong colors. */}
      <motion.div 
        animate={breatheAnimation}
        className="absolute -top-[10%] -left-[20vw] w-[2500px] h-[2500px] rounded-full blur-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(255,252,245,0.3)_0%,_rgba(255,252,245,0)_70%)]" 
      />

      {/* ABOUT: Sweeping right. Imperceptible maroon warmth. */}
      {/* It's so faint it just feels like the air is slightly warmer. */}
      <motion.div 
        animate={subtleBreathe}
        className="absolute top-[20%] right-[-15vw] w-[2800px] h-[2800px] rounded-full blur-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.008)_0%,_rgba(139,0,0,0)_70%)]" 
      />

      {/* PORTFOLIO: Sweeping left. Neutral diffusion. */}
      <motion.div 
        animate={breatheAnimation}
        className="absolute top-[45%] -left-[20vw] w-[2400px] h-[2400px] rounded-full blur-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0)_70%)]" 
      />

      {/* IMPACT: Subtle optimism. */}
      <motion.div 
        animate={subtleBreathe}
        className="absolute top-[65%] right-[-10vw] w-[2000px] h-[2000px] rounded-full blur-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(255,248,235,0.15)_0%,_rgba(255,248,235,0)_70%)]" 
      />

      {/* FOOTER: Fading closure. Back to center-bottom. */}
      <div 
        className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[2500px] h-[1500px] rounded-full blur-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.005)_0%,_rgba(139,0,0,0)_70%)]" 
      />

      {/* 4. NOISE TEXTURE */}
      {/* 
        Must sit ON TOP of the light to make the light feel physical.
        DS 06: Monochromatic. 1-2% max. Felt, not seen.
      */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-normal"
        style={{
          backgroundImage: 'url("/images/noise.png")',
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
