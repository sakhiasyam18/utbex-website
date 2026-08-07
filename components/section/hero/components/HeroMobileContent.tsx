// components/section/hero/components/HeroMobileContent.tsx
import Image from "next/image";
import Link from "next/link";
import { m as motion } from "framer-motion";
import { HeroMotionProps } from "./types";

export function HeroMobileContent({ blur, scale, opacity }: HeroMotionProps) {
  return (
    <div className="flex-1 relative lg:hidden overflow-hidden" style={{ minHeight: "90svh" }}>
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ filter: blur, scale, opacity, transformOrigin: "center bottom" }}
      >
        <Image
          src="/images/arik.webp"
          alt="Arik Dwi Asmara, Founder UTBEX Indonesia"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[center_20%] sm:object-center"
          priority
          loading="eager"
        />
        <div
          className="absolute bottom-0 inset-x-0 pointer-events-none"
          style={{
            height: "70%",
            background: "linear-gradient(to top, #FDFCFB 30%, rgba(253,252,251,0.7) 60%, transparent 100%)",
          }}
        />
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

      <div
        className="absolute bottom-0 inset-x-0 px-6 sm:px-12 pb-10 pt-8 animate-fade-up opacity-0"
        style={{ animationDelay: "140ms", animationFillMode: "forwards", zIndex: 20 }}
      >
        <p className="text-[10px] sm:text-xs font-bold tracking-widest text-utbex-text-secondary/70 uppercase mb-3">
          From Ideas To Impact
        </p>
        <h1 className="text-[clamp(2.25rem,9vw,4.5rem)] font-black text-utbex-dark leading-[0.9] tracking-tighter mb-6 sm:mb-8 max-w-[90%]">
          Unusually Think Become{" "}
          <span className="text-utbex-maroon italic">Extraordinary.</span>
        </h1>

        <div className="mb-6 border-l-2 border-utbex-maroon pl-3 sm:pl-4 flex flex-col">
          <span className="text-[clamp(1.75rem,6vw,2.5rem)] font-black text-utbex-maroon leading-none tracking-tight">
            10+ Tahun
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-utbex-dark/80 tracking-wide uppercase mt-1">
            Membangun Potensi Desa
          </span>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-utbex-maroon/40" />
          <div>
            <p className="text-sm font-black text-utbex-dark">Arik Dwi Asmara</p>
            <p className="text-xs font-semibold text-utbex-text-secondary/70">CEO &amp; Founder UTBEX Indonesia Group</p>
          </div>
        </div>

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
  );
}
