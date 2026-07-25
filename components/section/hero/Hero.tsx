"use client";
// Hero.tsx — 3-column strict zone layout
// COL 1 (left)  : Label + Headline + Buttons ONLY
// COL 2 (center): Photo + UTBEX bg (self-contained, no bleed)
// COL 3 (right) : Description quote + Arik profile
// UTBEX is clipped inside center col via overflow-hidden wrapper

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m as motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "2016", label: "Pionir Kaos Lukis Tanpa Tinta Pertama" },
  { value: "2019", label: "Juara I Penemu Ide Kreatif Malaysia" },
  { value: "2022", label: "Merchandise Resmi MotoGP Mandalika" },
];

const tags = ["Inovatif", "Berdampak", "Kolaboratif", "Berkelanjutan", "Lokal"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "60% start"],
  });

  // GPU-composited — tidak menyentuh main thread
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(14px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full bg-utbex-canvas flex flex-col"
      style={{ minHeight: "100svh" }}
      aria-label="Beranda UTBEX Indonesia"
    >
      {/* ── Top bar ─────────────────────────────────────────── */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-10 pt-8 lg:pt-10
                   animate-fade-up opacity-0"
        style={{ animationDelay: "60ms", animationFillMode: "forwards" }}
      >
        <div className="relative group cursor-default">
          {/* Subtle glow behind the badge */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-utbex-maroon to-red-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          {/* The badge itself */}
          <span className="relative inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-white/90 backdrop-blur-md text-utbex-dark text-xs font-black tracking-[0.15em] border border-black/5 shadow-sm uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-utbex-maroon opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-utbex-maroon"></span>
            </span>
            PT. UTBEX INOVASI INDONESIA
          </span>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-3 mt-1">
          {tags.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-utbex-dark uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                {t}
              </span>
              {i < tags.length - 1 && (
                <span className="text-black/20 text-[10px] select-none">/</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3-Column Main Area ──────────────────────────────── */}
      <div
        className="flex-1 hidden lg:grid"
        style={{ gridTemplateColumns: "2fr 3fr 2fr", minHeight: 0 }}
      >
        {/* ═══════════════════════════════════════════════════
            COL 1 — LEFT: Label + Headline + Buttons ONLY
        ═══════════════════════════════════════════════════ */}
        <div
          className="flex flex-col justify-center pl-10 pr-6 py-8
                     animate-fade-up opacity-0"
          style={{ animationDelay: "140ms", animationFillMode: "forwards", zIndex: 20 }}
        >
          {/* Small label */}
          <p className="text-xs font-bold tracking-widest text-utbex-text-secondary/70 uppercase mb-5">
            From Ideas To Impact
          </p>

          {/* Headline */}
          <h1
            className="font-black text-utbex-dark leading-[0.9] tracking-tighter mb-8"
            style={{ fontSize: "clamp(34px, 4vw, 56px)" }}
          >
            Unusually Think
            <br />
            Become
            <br />
            <span className="text-utbex-maroon italic">Extraordinary.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/6282252358901"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2 px-6 py-3
                         bg-utbex-maroon text-white rounded-full text-sm font-semibold
                         hover:bg-[#6A0000] transition-colors duration-200
                         shadow-[0_6px_20px_rgba(139,0,0,0.3)]"
            >
              Hubungi
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="#about"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-6 py-3
                         border-2 border-utbex-dark/20 text-utbex-dark rounded-full
                         text-sm font-semibold bg-white/60 backdrop-blur-sm
                         hover:border-utbex-dark/35 hover:bg-white/80 transition-all duration-200"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            COL 2 — CENTER: Photo + UTBEX (self-contained)
            UTBEX is clipped inside this column — no bleed
        ═══════════════════════════════════════════════════ */}
        <div className="relative" style={{ zIndex: 10 }}>

          {/* UTBEX clipping wrapper — overflow:hidden keeps letters inside col */}
          <div
            className="absolute inset-0 flex items-center justify-center
                       pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <span
              className="font-black whitespace-nowrap"
              style={{
                // font-size tuned so UTBEX fills ~center column width
                // at 3/7 viewport: 14vw per char × 5 letters ≈ fills column
                fontSize: "clamp(100px, 14vw, 240px)",
                lineHeight: 0.8,
                letterSpacing: "-0.04em",
                color: "#8B0000",
                // opacity kept at 100% per user instruction
              }}
            >
              UTBEX
            </span>
          </div>

          {/* Pak Arik portrait — above UTBEX, scroll-blurs out */}
          <motion.div
            className="absolute inset-0 flex justify-center
                       pointer-events-none select-none will-change-transform"
            style={{ filter: blur, scale, opacity, zIndex: 10, transformOrigin: "center bottom" }}
          >
            <Image
              src="/images/arik.webp"
              alt="Arik Dwi Asmara, Founder UTBEX Indonesia"
              fill
              className="object-contain object-bottom"
              priority
              sizes="43vw"
            />
            {/* Bottom fade — smooth white transition */}
            <div
              className="absolute bottom-0 inset-x-0 pointer-events-none"
              style={{
                height: "220px",
                background:
                  "linear-gradient(to top, #FDFCFB 0%, #FDFCFB 15%, rgba(253,252,251,0.7) 50%, transparent 100%)",
                zIndex: 20,
              }}
            />
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            COL 3 — RIGHT: Description quote + Arik profile
        ═══════════════════════════════════════════════════ */}
        <div
          className="flex flex-col justify-center pr-10 pl-6 py-8
                     animate-fade-left opacity-0"
          style={{ animationDelay: "220ms", animationFillMode: "forwards", zIndex: 20 }}
        >
          {/* Glassmorphism quote card — like glass/kaca with sheen */}
          <div
            className="relative rounded-2xl overflow-hidden mb-6"
            style={{
              background: "rgba(255,255,255,0.38)",
              backdropFilter: "blur(22px) saturate(1.5)",
              WebkitBackdropFilter: "blur(22px) saturate(1.5)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.06), " +
                "inset 0 1px 0 rgba(255,255,255,1), " +
                "inset 0 -1px 0 rgba(255,255,255,0.25)",
              padding: "24px 24px 20px",
            }}
          >
            {/* Top glass sheen — mengkilau */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none rounded-t-2xl"
              style={{
                height: "55%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            {/* Bottom blur band */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none rounded-b-2xl"
              style={{
                height: "38%",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
                backdropFilter: "blur(3px)",
              }}
            />

            {/* Opening quote — decorative typography */}
            <div
              className="relative font-black text-utbex-maroon/20 leading-none select-none"
              style={{ fontSize: "64px", lineHeight: 1, marginBottom: "-4px", marginTop: "-8px" }}
              aria-hidden="true"
            >
              "
            </div>

            {/* Description text */}
            <p
              className="relative font-bold text-utbex-dark leading-relaxed"
              style={{ fontSize: "clamp(12px, 1vw, 15px)" }}
            >
              Pusat pengembangan ekonomi kreatif dan pemberdayaan pemuda desa
              yang mengubah ide sederhana menjadi karya luar biasa
              dan berdampak nyata.
            </p>

            {/* Closing quote */}
            <div
              className="relative font-black text-utbex-maroon/20 leading-none select-none text-right"
              style={{ fontSize: "64px", lineHeight: 1, marginTop: "-4px", marginBottom: "-12px" }}
              aria-hidden="true"
            >
              "
            </div>
          </div>

          {/* Arik profile — below glass card, plain bold text only, no box */}
          <div>
            <p className="text-base font-black text-utbex-dark leading-tight tracking-tight">
              Arik Dwi Asmara
            </p>
            <p className="text-sm font-semibold text-utbex-text-secondary mt-0.5">
              CEO & Founder UTBEX Indonesia Group
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile layout: full-screen photo + text overlay ─── */}
      <div className="flex-1 relative lg:hidden overflow-hidden" style={{ minHeight: "85svh" }}>

        {/* Pak Arik — fills the entire mobile screen */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ filter: blur, scale, opacity, transformOrigin: "center bottom" }}
        >
          <Image
            src="/images/arik.webp"
            alt="Arik Dwi Asmara, Founder UTBEX Indonesia"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Bottom fade so text is readable */}
          <div
            className="absolute bottom-0 inset-x-0 pointer-events-none"
            style={{
              height: "70%",
              background: "linear-gradient(to top, #FDFCFB 30%, rgba(253,252,251,0.7) 60%, transparent 100%)",
            }}
          />
          {/* UTBEX watermark behind Pak Arik — partially clipped */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-black whitespace-nowrap opacity-80"
              style={{
                fontSize: "clamp(80px, 30vw, 160px)",
                lineHeight: 0.8,
                letterSpacing: "-0.04em",
                color: "#8B0000",
              }}
            >
              UTBEX
            </span>
          </div>
        </motion.div>

        {/* Text overlay — positioned at bottom */}
        <div
          className="absolute bottom-0 inset-x-0 px-6 pb-8 pt-4 animate-fade-up opacity-0"
          style={{ animationDelay: "140ms", animationFillMode: "forwards", zIndex: 20 }}
        >
          <p className="text-xs font-bold tracking-widest text-utbex-text-secondary/70 uppercase mb-3">
            From Ideas To Impact
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-utbex-dark leading-[0.9] tracking-tighter mb-5">
            Unusually Think Become{" "}
            <span className="text-utbex-maroon italic">Extraordinary.</span>
          </h1>

          {/* Founder info */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-utbex-maroon/40" />
            <div>
              <p className="text-sm font-black text-utbex-dark">Arik Dwi Asmara</p>
              <p className="text-xs font-semibold text-utbex-text-secondary/70">CEO &amp; Founder UTBEX Indonesia Group</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/6282252358901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-utbex-maroon text-white
                         rounded-full text-sm font-semibold shadow-[0_6px_20px_rgba(139,0,0,0.3)]
                         hover:bg-[#6A0000] transition-colors duration-200"
            >
              Hubungi
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-utbex-dark/20
                         text-utbex-dark rounded-full text-sm font-semibold bg-white/60 backdrop-blur-sm
                         hover:bg-white/80 transition-all duration-200"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div
        className="grid grid-cols-3 border-t border-black/[0.07] px-4 sm:px-10
                   bg-utbex-canvas/90 backdrop-blur-sm
                   animate-fade-up opacity-0"
        style={{
          animationDelay: "300ms",
          animationFillMode: "forwards",
          position: "relative",
          zIndex: 30,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-4 sm:py-6 flex flex-col items-center justify-center text-center gap-1 px-2 sm:px-4
              ${i < stats.length - 1 ? "border-r border-black/[0.07]" : ""}`}
          >
            <span className="text-xl sm:text-3xl font-black text-utbex-dark">{s.value}</span>
            <span className="text-[10px] sm:text-xs text-utbex-text-secondary leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}