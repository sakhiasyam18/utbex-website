"use client";
// components/section/footer/Footer.tsx
// Gen Z Light Glassmorphism Footer — elegant, clean, all-age friendly
// • Warm white canvas + frosted glass panels
// • Neumorphic CTA button
// • Soft neon maroon accents
// • Fully responsive: mobile-first grid

import { m as motion } from "framer-motion";
import Link from "next/link";
import { footerSocial } from "./data/footerSocial";

// ─── SVG Icons ─────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a4 4 0 0 1-8 0z" />
  </svg>
);
const ThreadsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const ICON_MAP: Record<string, React.ComponentType> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Threads: ThreadsIcon,
  Website: GlobeIcon,
  Blog: GlobeIcon,
};

// ─── Data ───────────────────────────────────────────────────────
const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Jejak Kolaborasi", href: "#portfolio" },
  { label: "Dampak", href: "#impact" },
];

// ─── Animation variants ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const staggerCols = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// ─── Component ─────────────────────────────────────────────────
export function Footer() {
  return (
    <footer
      id="contact"
      aria-label="UTBEX Footer — Kontak dan Navigasi"
      className="relative w-full overflow-hidden bg-utbex-canvas"
    >
      {/* ── Ambient background orbs ──────────────────────────── */}
      <div className="absolute top-0 left-1/4  w-[700px] h-[400px] bg-utbex-maroon/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-rose-200/[0.12]   rounded-full blur-[100px] pointer-events-none" />

      {/* ════════════════════════════════════════════════════════
          TOP CLOSING BAND — frosted glass CTA card
          ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-16 lg:mb-20
                     bg-gradient-to-br from-utbex-maroon to-[#5A0000]
                     shadow-[0_20px_60px_rgba(139,0,0,0.22),inset_0_2px_4px_rgba(255,255,255,0.18)]
                     hover:shadow-[0_28px_72px_rgba(139,0,0,0.32),inset_0_2px_4px_rgba(255,255,255,0.24)]
                     transition-all duration-700 cursor-default"
        >
          {/* Inner glass overlay */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none" />
          {/* Skeuomorphic top bevel */}
          <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[2rem] sm:rounded-[2.5rem] mix-blend-overlay pointer-events-none" />
          {/* Top shine line */}
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
          {/* Hover shimmer sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
          {/* Ambient glow top-left */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 sm:p-12 lg:p-14">
            {/* Left: copy */}
            <div className="max-w-lg">
              <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 mb-4">
                — Kolaborasi Berikutnya
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
                Mari bangun perubahan<br />
                <span className="italic font-light text-white/80">berikutnya bersama kami.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-sm">
                Dari desa, untuk Indonesia. Setiap kolaborasi dimulai dari satu percakapan.
              </p>
            </div>

            {/* Right: CTA button — neumorphic glass style */}
            <a
              href="https://wa.me/6282252358901"
              target="_blank"
              rel="noopener noreferrer"
              id="klik-whatsapp"
              aria-label="Mulai percakapan via WhatsApp"
              className="group/btn relative flex-shrink-0 flex items-center gap-3
                         px-8 py-5 rounded-[1.5rem]
                         bg-white/15 backdrop-blur-md
                         border border-white/25
                         shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.15)]
                         hover:bg-white/25 hover:border-white/40
                         hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.2),0_0_24px_rgba(255,255,255,0.15)]
                         transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsAppIcon />
              <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">
                Mulai Percakapan
              </span>
              <span className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center
                               group-hover/btn:bg-white group-hover/btn:text-utbex-maroon transition-all duration-300">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MAIN FOOTER INFO — glass columns
          ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">

        {/* Divider glass strip */}
        <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent mb-14" />

        {/* Columns */}
        <motion.div
          variants={staggerCols}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr_1.3fr] gap-10 lg:gap-8 pb-14"
        >

          {/* ── Col 1: Brand ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            {/* Logo wordmark */}
            <div>
              <p className="font-black text-[1.6rem] tracking-tight text-utbex-dark leading-none mb-0.5">
                UTBEX<span className="text-utbex-maroon" style={{ textShadow: "0 0 12px rgba(139,0,0,0.25)" }}>.</span>
              </p>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-utbex-text-secondary/40">
                Inovasi Indonesia
              </p>
            </div>

            <p className="text-sm text-utbex-text-secondary/65 leading-relaxed max-w-[24ch]">
              Unusually Think Become Extraordinary — Pusat Pengembangan Ekonomi Kreatif Desa &amp; Social Enterprise.
            </p>

            {/* Glass location pill */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-xl
                            bg-white/55 backdrop-blur-md border border-white/65
                            shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <span className="text-utbex-maroon flex-shrink-0"><MapPinIcon /></span>
              <span className="text-[11px] font-semibold text-utbex-text-secondary/70">Bantur, Malang</span>
            </div>
          </motion.div>

          {/* ── Col 2: Navigasi ───────────────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-utbex-text-secondary/35 mb-1">
              Navigasi
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      id={`klik-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-utbex-dark/65
                                 hover:text-utbex-maroon transition-all duration-300"
                    >
                      <span className="w-0 group-hover/link:w-3 h-px bg-utbex-maroon transition-all duration-300 overflow-hidden" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── Col 3: Kontak ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-utbex-text-secondary/35 mb-1">
              Kontak
            </p>

            {/* Email — glass card */}
            <a
              href="mailto:Utbexgrup.id!2026@gmail.com"
              id="klik-email"
              aria-label="Kirim email ke UTBEX"
              className="group/c flex items-start gap-3 p-4 rounded-2xl
                         bg-white/45 backdrop-blur-md border border-white/60
                         shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]
                         hover:bg-white/70 hover:border-white/80 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07),0_0_16px_rgba(139,0,0,0.05)]
                         transition-all duration-400"
            >
              <span className="mt-0.5 text-utbex-maroon flex-shrink-0
                               group-hover/c:drop-shadow-[0_0_6px_rgba(139,0,0,0.35)] transition-all duration-400">
                <MailIcon />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/35 mb-1">Email</p>
                <p className="text-[12px] sm:text-[13px] font-semibold text-utbex-dark/80 group-hover/c:text-utbex-maroon
                               transition-colors duration-300 leading-snug break-all">
                  Utbexgrup.id!2026@gmail.com
                </p>
              </div>
            </a>

            {/* Address — glass card */}
            <a
              href="https://maps.app.goo.gl/XK3o1qds4trNNwX86"
              target="_blank"
              rel="noopener noreferrer"
              id="klik-maps"
              aria-label="Buka lokasi UTBEX di Google Maps"
              className="group/c flex items-start gap-3 p-4 rounded-2xl
                         bg-white/45 backdrop-blur-md border border-white/60
                         shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]
                         hover:bg-white/70 hover:border-white/80 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07),0_0_16px_rgba(139,0,0,0.05)]
                         transition-all duration-400"
            >
              <span className="mt-0.5 text-utbex-maroon flex-shrink-0
                               group-hover/c:drop-shadow-[0_0_6px_rgba(139,0,0,0.35)] transition-all duration-400">
                <MapPinIcon />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/35 mb-1">Lokasi</p>
                <p className="text-[12px] sm:text-[13px] font-medium text-utbex-dark/70 group-hover/c:text-utbex-maroon
                               transition-colors duration-300 leading-relaxed">
                  Jl. Kyai Rajiman RT.06 RW.02<br />
                  Bantur, Kab. Malang, 65179
                </p>
              </div>
            </a>
          </motion.div>

          {/* ── Col 4: Sosial Media ───────────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-utbex-text-secondary/35 mb-1">
              Ikuti Kami
            </p>

            {/* Social grid — glass pill buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-2">
              {footerSocial.map((item) => {
                const Icon = ICON_MAP[item.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    id={item.platform === "Website" || item.platform === "Blog"
                      ? "klik-partner-bcn"
                      : `klik-${item.platform.toLowerCase()}`}
                    className="group/s flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
                               bg-white/45 backdrop-blur-sm border border-white/55
                               shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]
                               hover:bg-white/75 hover:border-utbex-maroon/15
                               hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_0_12px_rgba(139,0,0,0.06)]
                               transition-all duration-300 hover:-translate-y-0.5
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon/40"
                  >
                    <span className="text-utbex-text-secondary/55 group-hover/s:text-utbex-maroon
                                     transition-colors duration-300 flex-shrink-0">
                      <Icon />
                    </span>
                    <span className="text-[11px] font-semibold text-utbex-dark/65 group-hover/s:text-utbex-maroon
                                     transition-colors duration-300 truncate">
                      {item.platform}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Google Maps — Glass Card ─────────────────────────
            Placement: below info columns, above copyright.
            Split layout: address panel left + iframe right.
            ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 mb-14"
        >
          <div
            className="group relative rounded-[2rem] overflow-hidden
                       bg-white/50 backdrop-blur-xl
                       border border-white/65
                       shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]
                       hover:shadow-[0_16px_52px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                       transition-shadow duration-500"
          >
            {/* Top edge shine */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10" />
            {/* Left neon accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-utbex-maroon/50 shadow-[0_0_10px_rgba(139,0,0,0.25)] z-10" />

            <div className="flex flex-col lg:flex-row">

              {/* ── Left: Location info panel ── */}
              <div className="flex-shrink-0 lg:w-64 xl:w-72 flex flex-col justify-center gap-5 p-7 lg:p-8 pl-8 lg:pl-10">
                {/* Label */}
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/70 mb-3">
                    <span className="w-3 h-px bg-utbex-maroon/50" />
                    Temukan Kami
                  </span>
                  <h3 className="text-base font-black text-utbex-dark leading-snug tracking-tight">
                    UTBEX Indonesia
                  </h3>
                  <p className="text-xs text-utbex-text-secondary/55 font-medium mt-0.5">
                    Bantur, Malang — Jawa Timur
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-utbex-maroon flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <p className="text-[11px] text-utbex-text-secondary/65 leading-relaxed">
                    Jl. Kyai Rajiman RT.06 RW.02<br />
                    Bantur, Kab. Malang<br />
                    Jawa Timur 65179
                  </p>
                </div>

                {/* Open Maps CTA */}
                <a
                  href="https://maps.app.goo.gl/XK3o1qds4trNNwX86"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="klik-maps-cta"
                  aria-label="Buka di Google Maps"
                  className="group/m inline-flex items-center gap-2 self-start
                             px-4 py-2.5 rounded-xl text-[10px] font-bold tracking-widest uppercase
                             bg-utbex-maroon text-white
                             shadow-[0_4px_14px_rgba(139,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]
                             hover:shadow-[0_6px_20px_rgba(139,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                             hover:-translate-y-0.5 active:translate-y-0
                             transition-all duration-300 overflow-hidden relative"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[150%] group-hover/m:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="relative z-10">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="relative z-10">Buka Maps</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="relative z-10 group-hover/m:translate-x-0.5 group-hover/m:-translate-y-0.5 transition-transform duration-300">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>

              {/* ── Right: Map iframe ── */}
              <div className="relative flex-1 min-h-[220px] lg:min-h-[280px] overflow-hidden lg:rounded-r-[2rem]">
                {/* Frosted glass overlay on top of map (thin top fade) */}
                <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/20 to-transparent z-10 pointer-events-none" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-white/15 to-transparent z-10 pointer-events-none" />
                {/* Left fade — blends into the panel */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/25 to-transparent z-10 pointer-events-none" />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.1!2d112.626!3d-8.333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c7aec3b50001%3A0x3421bdb47a55fd34!2sBantur%2C%20Kec.%20Bantur%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1696000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "inherit" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi UTBEX Indonesia — Bantur, Malang"
                  className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />


        {/* ── Copyright bar ────────────────────────────────────── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-utbex-text-secondary/35 tracking-wide text-center sm:text-left">
            © 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-utbex-text-secondary/25">
            Unusually Think Become Extraordinary
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          UTBEX Wordmark — batik gradient watermark
          ════════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden select-none mt-1" aria-hidden="true">
        <style>{`
          .utbex-wordmark {
            font-size: clamp(72px, 17vw, 260px);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.04em;
            font-family: 'Arial Black', 'Impact', 'Helvetica Neue', sans-serif;
            text-align: center;
            width: 100%;
            display: block;
            background: linear-gradient(
              135deg,
              #3d0000 0%,
              #8B0000 30%,
              #C0392B 55%,
              #8B0000 75%,
              #4a0000 100%
            ),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cellipse cx='15' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='rgba(255,255,255,0.16)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(255,255,255,0.09)'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='rgba(255,255,255,0.07)' stroke-width='0.6'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='rgba(255,255,255,0.07)' stroke-width='0.6'/%3E%3C/svg%3E");
            background-blend-mode: normal, overlay;
            background-size: 100% 100%, 60px 60px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            opacity: 0.9;
          }
        `}</style>
        <span className="utbex-wordmark">UTBEX</span>
      </div>
    </footer>
  );
}
