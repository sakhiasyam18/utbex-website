"use client";

import {  m as motion, useReducedMotion  } from "framer-motion";

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
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FDFCFB] to-[#FAF9F7] pointer-events-none"
    >
      {/* 2 & 3. AMBIENT GRADIENTS & LIGHT */}
      {/* HERO: Clean, soft, warm ivory. */}
      <div className="absolute -top-[10%] -left-[20vw] w-[600px] h-[600px] rounded-full blur-[80px] bg-[rgba(255,252,245,0.3)]" />

      {/* ABOUT: Sweeping right. Imperceptible maroon warmth. */}
      <div className="absolute top-[20%] right-[-15vw] w-[500px] h-[500px] rounded-full blur-[60px] bg-[rgba(139,0,0,0.008)]" />

      {/* PORTFOLIO: Sweeping left. Neutral diffusion. */}
      <div className="absolute top-[45%] -left-[20vw] w-[550px] h-[550px] rounded-full blur-[80px] bg-[rgba(255,255,255,0.4)]" />

      {/* IMPACT: Subtle optimism. */}
      <div className="absolute top-[65%] right-[-10vw] w-[450px] h-[450px] rounded-full blur-[60px] bg-[rgba(255,248,235,0.15)]" />

      {/* FOOTER: Fading closure. Back to center-bottom. */}
      <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[80px] bg-[rgba(139,0,0,0.005)]" />

      {/* 4. NOISE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-normal"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
