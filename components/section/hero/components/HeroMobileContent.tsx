// components/section/hero/components/HeroMobileContent.tsx

/**
 * HeroMobileContent Component
 * ----------------------------------------------------------------------
 * Komponen ini adalah versi Hero khusus untuk layar Mobile dan Tablet (hingga 1280px).
 * 
 * Keputusan Arsitektur:
 * Berbeda dengan versi Desktop, komponen Mobile ini sengaja TIDAK dibungkus 
 * dengan animasi Framer Motion (<motion.div>).
 * 
 * Mengapa? 
 * Untuk mempercepat proses LCP (Largest Contentful Paint). Jika kita menggunakan 
 * motion wrapper, gambar utama akan dirender tertunda menunggu JavaScript jalan. 
 * Dengan HTML/CSS standar, gambar "Arik Dwi Asmara" bisa langsung tampil 
 * dari proses SSR (Server-Side Rendering), menghemat waktu muat hingga ~1.1 detik.
 */
import Image from "next/image";
import Link from "next/link";

export function HeroMobileContent() {
  return (
    <div className="flex-1 w-full flex flex-col xl:hidden relative">
      {/* Photo Block — NO motion wrapper = image paints immediately from SSR (saves ~1.1s LCP) */}
      <div
        className="relative w-full overflow-hidden"
        style={{ flex: "0 0 58svh" }}
      >
        <Image
          src="/images/arik.webp"
          alt="Arik Dwi Asmara, Founder UTBEX Indonesia"
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover object-[center_15%]"
          priority
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, #FDFCFB, transparent)" }}
        />
        <div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-sm border border-black/[0.06] animate-fade-up opacity-0"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <p className="text-lg font-black text-utbex-maroon leading-none">10+</p>
          <p className="text-[9px] font-bold text-utbex-dark/60 uppercase tracking-wide leading-tight mt-0.5">Tahun</p>
        </div>
      </div>

      {/* Info Block */}
      <div
        className="flex-1 px-5 pt-5 pb-8 flex flex-col justify-between animate-fade-up opacity-0"
        style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
      >
        <div>
          <p className="text-[9px] font-black tracking-[0.22em] text-utbex-maroon uppercase mb-2.5">
            From Ideas To Impact
          </p>
          <h1 className="text-[clamp(1.85rem,7.5vw,3rem)] font-black text-utbex-dark leading-[0.92] tracking-[-0.03em] mb-5">
            Unusually Think<br />
            Become{" "}
            <em className="text-utbex-maroon not-italic">Extraordinary.</em>
          </h1>

          <div className="flex items-center gap-2.5">
            <div className="w-5 h-[1.5px] bg-utbex-maroon/40 flex-shrink-0" />
            <div>
              <p className="text-[11px] font-black text-utbex-dark leading-none">Arik Dwi Asmara</p>
              <p className="text-[10px] text-utbex-text-secondary/60 font-medium mt-0.5">
                CEO &amp; Founder UTBEX Indonesia Group
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 mt-6">
          <Link
            href="https://wa.me/6282252358901"
            target="_blank"
            rel="noopener noreferrer"
            id="klik-hero-kolaborasi"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-utbex-maroon text-white rounded-2xl text-[13px] font-bold tracking-wide shadow-[0_6px_20px_rgba(139,0,0,0.28)] active:scale-[0.97] transition-transform duration-100"
          >
            Mari Berkolaborasi
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href="#about"
            id="klik-hero-jelajahi"
            className="px-5 py-3.5 border border-black/[0.12] text-utbex-dark rounded-2xl text-[13px] font-bold bg-white/60 backdrop-blur-sm active:scale-[0.97] transition-transform duration-100"
          >
            Jelajahi Perjalanan
          </Link>
        </div>
      </div>
    </div>
  );
}
