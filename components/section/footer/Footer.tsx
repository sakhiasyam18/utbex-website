"use client";
// components/section/footer/Footer.tsx
// Gen Z Light Glassmorphism Footer — elegant, clean, all-age friendly

import { FooterCTA } from "./components/FooterCTA";
import { FooterColumns } from "./components/FooterColumns";
import { FooterMap } from "./components/FooterMap";
import { FooterBottom } from "./components/FooterBottom";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-label="UTBEX Footer — Kontak dan Navigasi"
      className="relative w-full overflow-hidden"
    >
      {/* ── Ambient background orbs ──────────────────────────── */}
      <div className="absolute top-0 left-1/4  w-[700px] h-[400px] bg-utbex-maroon/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-rose-200/[0.12]   rounded-full blur-[100px] pointer-events-none" />

      {/* ════════════════════════════════════════════════════════
          TOP CLOSING BAND — frosted glass CTA card
          ════════════════════════════════════════════════════════ */}
      <FooterCTA />

      {/* ════════════════════════════════════════════════════════
          MAIN FOOTER INFO — glass columns
          ════════════════════════════════════════════════════════ */}
      <FooterColumns />

      {/* ── Google Maps — Glass Card ───────────────────────── */}
      <FooterMap />

      {/* ── Copyright bar & Wordmark ───────────────────────── */}
      <FooterBottom />
    </footer>
  );
}
