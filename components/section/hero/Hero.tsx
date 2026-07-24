"use client";
// Hero.tsx — 3-column strict zone layout
// COL 1 (left)  : Label + Headline + Buttons ONLY
// COL 2 (center): Photo + UTBEX bg (self-contained, no bleed)
// COL 3 (right) : Description quote + Arik profile
// UTBEX is clipped inside center col via overflow-hidden wrapper

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const stats = [
  { value: "45+", label: "Desa Kolaborasi" },
  { value: "120+", label: "UMKM Didampingi" },
  { value: "2500+", label: "Pemuda Terlatih" },
];

const tags = ["Inovatif", "Berdampak", "Kolaboratif", "Berkelanjutan", "Lokal"];

export default function Hero() {
  const photoWrapRef = useRef<HTMLDivElement>(null);

  // Scroll: photo blurs + recedes (heynesh style)
  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!photoWrapRef.current || !heroEl) return;
    const onScroll = () => {
      const p = Math.min(window.scrollY / (heroEl.offsetHeight * 0.6), 1);
      if (photoWrapRef.current) {
        photoWrapRef.current.style.filter  = `blur(${p * 14}px)`;
        photoWrapRef.current.style.transform = `scale(${1 - p * 0.08})`;
        photoWrapRef.current.style.opacity  = `${1 - p * 0.75}`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
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
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full
                         bg-utbex-maroon/10 text-utbex-maroon text-[11px] font-bold
                         tracking-widest border border-utbex-maroon/20 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-utbex-maroon animate-pulse" />
          PT. UTBEX INOVASI INDONESIA
        </span>
        <div className="hidden md:flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-semibold text-utbex-text-secondary/70
                                     border border-black/10 rounded-full px-3 py-1">
              {t}
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
            Pusat Pengembangan Ekonomi Kreatif Malang Selatan
          </p>

          {/* Headline */}
          <h1
            className="font-black text-utbex-dark leading-[0.9] tracking-tighter mb-8"
            style={{ fontSize: "clamp(36px, 4vw, 62px)" }}
          >
            Mengubah
            <br />
            Ide Menjadi
            <br />
            <span className="text-utbex-maroon italic">Dampak</span>
            <br />
            Nyata.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="#portfolio"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2 px-6 py-3
                         bg-utbex-maroon text-white rounded-full text-sm font-semibold
                         hover:bg-[#6A0000] transition-colors duration-200
                         shadow-[0_6px_20px_rgba(139,0,0,0.3)]"
            >
              Lihat Kolaborasi Kami
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
          <div
            ref={photoWrapRef}
            className="absolute inset-0 flex justify-center
                       pointer-events-none select-none will-change-transform"
            style={{ zIndex: 10, transformOrigin: "center bottom" }}
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
          </div>
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
              Bersama desa, UMKM, dan komunitas — kami membangun inovasi
              yang tumbuh dari kebutuhan nyata dan menciptakan perubahan
              yang terus dirasakan.
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
              Founder UTBEX Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile fallback (stacked) ────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8 lg:hidden gap-5">
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "140ms", animationFillMode: "forwards" }}
        >
          <p className="text-xs font-bold tracking-widest text-utbex-text-secondary/70 uppercase mb-3">
            Pusat Pengembangan Ekonomi Kreatif Malang Selatan
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-utbex-dark leading-[0.9] tracking-tighter mb-4">
            Mengubah Ide Menjadi{" "}
            <span className="text-utbex-maroon italic">Dampak</span> Nyata.
          </h1>
          {/* Mobile glass card */}
          <div
            className="rounded-2xl p-5 mb-4"
            style={{
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <span className="font-black text-utbex-maroon/25 text-5xl leading-none block -mt-2 mb-1">"</span>
            <p className="text-sm font-bold text-utbex-dark leading-relaxed">
              Bersama desa, UMKM, dan komunitas — kami membangun inovasi yang tumbuh dari kebutuhan
              nyata dan menciptakan perubahan yang terus dirasakan.
            </p>
            <span className="font-black text-utbex-maroon/25 text-5xl leading-none block text-right -mb-2">"</span>
          </div>
          <div className="mb-5">
            <p className="text-sm font-black text-utbex-dark">Arik Dwi Asmara</p>
            <p className="text-xs font-semibold text-utbex-text-secondary">Founder UTBEX Indonesia</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-utbex-maroon text-white
                         rounded-full text-sm font-semibold shadow-[0_6px_20px_rgba(139,0,0,0.3)]">
              Lihat Kolaborasi Kami
            </Link>
            <Link href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-utbex-dark/20
                         text-utbex-dark rounded-full text-sm font-semibold bg-white/50">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div
        className="grid grid-cols-3 border-t border-black/[0.07] px-10
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
            className={`py-5 flex flex-col items-start gap-0.5 px-8 first:pl-0
              ${i < stats.length - 1 ? "border-r border-black/[0.07]" : ""}`}
          >
            <span className="text-2xl sm:text-3xl font-black text-utbex-dark">{s.value}</span>
            <span className="text-xs text-utbex-text-secondary">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}