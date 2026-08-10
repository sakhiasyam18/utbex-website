"use client";

import { m as motion, useReducedMotion } from "framer-motion";

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
//   Canvas -> Mega Mendung Pattern -> Ambient Gradient -> Light -> Noise -> Content

export function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-white pointer-events-none"
    >
      {/* CSS Keyframes for ambient breathing and clouds */}
      <style>{`
        @keyframes ambientBreathe {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
          33% { transform: scale(1.05) translate(2%, 2%); opacity: 0.8; }
          66% { transform: scale(0.95) translate(-2%, 1%); opacity: 0.5; }
        }
        @keyframes ambientDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3%, -2%); }
        }
        @keyframes cloudFloat {
          0% { background-position: 0px 0px; }
          50% { background-position: 200px -100px; }
          100% { background-position: 0px 0px; }
        }
        .animate-ambient-breathe {
          animation: ambientBreathe 20s ease-in-out infinite;
        }
        .animate-ambient-drift {
          animation: ambientDrift 25s ease-in-out infinite;
        }
        .animate-cloud-float {
          animation: cloudFloat 45s ease-in-out infinite;
        }
      `}</style>

      {/* 1.5. MEGA MENDUNG CLOUD PATTERN */}
      <div 
        className="fixed -inset-[5%] pointer-events-none opacity-[0.04] animate-cloud-float"
        style={{
          backgroundImage: "url('/images/mega-mendung.jpg')",
          backgroundSize: "1200px",
          backgroundRepeat: "repeat",
          willChange: "background-position",
          zIndex: -5
        }}
        aria-hidden="true"
      />

      {/* 2 & 3. AMBIENT GRADIENTS & LIGHT */}
      {/* HERO: Clean, soft, warm ivory. */}
      <div className="absolute -top-[10%] -left-[20vw] w-[600px] h-[600px] rounded-full blur-[80px] bg-[rgba(255,252,245,0.3)] animate-ambient-breathe" />

      {/* ABOUT: Sweeping right. Imperceptible maroon warmth. */}
      <div className="absolute top-[20%] right-[-15vw] w-[500px] h-[500px] rounded-full blur-[60px] bg-[rgba(139,0,0,0.015)] animate-ambient-drift" />

      {/* PORTFOLIO: Sweeping left. Neutral diffusion. */}
      <div className="absolute top-[45%] -left-[20vw] w-[550px] h-[550px] rounded-full blur-[80px] bg-[rgba(255,255,255,0.4)] animate-ambient-breathe" style={{ animationDelay: "-5s" }} />

      {/* IMPACT: Subtle optimism. */}
      <div className="absolute top-[65%] right-[-10vw] w-[450px] h-[450px] rounded-full blur-[60px] bg-[rgba(255,248,235,0.15)] animate-ambient-drift" style={{ animationDelay: "-10s" }} />

      {/* FOOTER: Fading closure. Back to center-bottom. */}
      <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[80px] bg-[rgba(139,0,0,0.01)] animate-ambient-breathe" style={{ animationDelay: "-15s" }} />

      {/* 4. NOISE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-normal pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
