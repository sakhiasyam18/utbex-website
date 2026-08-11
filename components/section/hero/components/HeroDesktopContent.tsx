// components/section/hero/components/HeroDesktopContent.tsx
import Image from "next/image";
import Link from "next/link";
import { m as motion } from "framer-motion";
import { HeroMotionProps } from "./types";

export function HeroDesktopContent({ blur, scale, opacity }: HeroMotionProps) {
  return (
    <div
      className="flex-1 hidden lg:grid"
      style={{ gridTemplateColumns: "2fr 3fr 2fr", minHeight: 0 }}
    >
      {/* ═══════════════════════════════════════════════════
          COL 1 — LEFT: Label + Headline + Buttons ONLY
      ═══════════════════════════════════════════════════ */}
      <div
        className="flex flex-col justify-center pl-10 pr-6 py-8 animate-fade-up opacity-0"
        style={{ animationDelay: "140ms", animationFillMode: "forwards", zIndex: 20 }}
      >
        <p className="text-xs font-bold tracking-widest text-utbex-text-secondary/70 uppercase mb-5">
          From Ideas To Impact
        </p>

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

        <div className="my-6 border-l-2 border-utbex-maroon pl-4 flex flex-col justify-center">
          <span className="text-[clamp(2rem,3vw,3rem)] font-black text-utbex-maroon leading-none tracking-tight">
            10+ Tahun
          </span>
          <span className="text-[clamp(10px,1vw,14px)] font-bold text-utbex-dark/80 tracking-wide mt-1 uppercase">
            Membangun Potensi Desa
          </span>
        </div>

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
      ═══════════════════════════════════════════════════ */}
      <div className="relative" style={{ zIndex: 10 }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-black whitespace-nowrap"
            style={{
              fontSize: "clamp(100px, 14vw, 240px)",
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
              color: "#8B0000",
            }}
          >
            UTBEX
          </span>
        </div>

        <motion.div
          className="absolute inset-0 flex justify-center pointer-events-none select-none will-change-transform"
          style={{ 
            filter: blur, 
            scale, 
            opacity, 
            zIndex: 10, 
            transformOrigin: "center bottom",
            WebkitMaskImage: "linear-gradient(to top, transparent 0px, transparent 40px, black 220px)",
            maskImage: "linear-gradient(to top, transparent 0px, transparent 40px, black 220px)"
          }}
        >
          <Image
            src="/images/arik.webp"
            alt="Arik Dwi Asmara, Founder UTBEX Indonesia"
            fill
            className="object-contain object-bottom"
            priority
            loading="eager"
            sizes="43vw"
          />
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
        className="flex flex-col justify-center pr-10 pl-6 py-8 animate-fade-left opacity-0"
        style={{ animationDelay: "220ms", animationFillMode: "forwards", zIndex: 20 }}
      >
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
          <div
            className="absolute inset-x-0 top-0 pointer-events-none rounded-t-2xl"
            style={{
              height: "55%",
              background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none rounded-b-2xl"
            style={{
              height: "38%",
              background: "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
              backdropFilter: "blur(3px)",
            }}
          />

          <div
            className="relative font-black text-utbex-maroon/20 leading-none select-none"
            style={{ fontSize: "64px", lineHeight: 1, marginBottom: "-4px", marginTop: "-8px" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <p
            className="relative font-bold text-utbex-dark leading-relaxed"
            style={{ fontSize: "clamp(12px, 1vw, 15px)" }}
          >
            Pusat pengembangan ekonomi kreatif dan pemberdayaan pemuda desa
            yang mengubah ide sederhana menjadi karya luar biasa
            dan berdampak nyata.
          </p>

          <div
            className="relative font-black text-utbex-maroon/20 leading-none select-none text-right"
            style={{ fontSize: "64px", lineHeight: 1, marginTop: "-4px", marginBottom: "-12px" }}
            aria-hidden="true"
          >
            &rdquo;
          </div>
        </div>

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
  );
}
