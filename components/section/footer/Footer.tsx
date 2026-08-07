"use client";
// components/section/footer/Footer.tsx
// Redesigned with Component Composition for maximum readability and performance.

import { FooterClosing } from "./components/FooterClosing";
import { FooterColumns } from "./components/FooterColumns";
import { FooterMap } from "./components/FooterMap";
import { FooterCopyright } from "./components/FooterCopyright";
import { FooterWordmark } from "./components/FooterWordmark";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-label="UTBEX Footer — Kontak dan Navigasi"
      className="relative w-full overflow-hidden bg-utbex-canvas"
    >
      {/* ── Ambient background orbs ──────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-utbex-maroon/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-rose-200/[0.12] rounded-full blur-[100px] pointer-events-none" />

      {/* ── CTA Top Band ─────────────────────────────────────── */}
      <FooterClosing />

      {/* ── Main Information & Navigation ────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent mb-14" />
        
        <FooterColumns />
        
        <FooterMap />
        
        <div className="h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />
        
        <FooterCopyright />
      </div>

      {/* ── Final Wordmark ───────────────────────────────────── */}
      <FooterWordmark />
    </footer>
  );
}
