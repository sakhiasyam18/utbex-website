"use client";
// components/section/footer/Footer.tsx — REDESIGN: Converto-style with UTBEX watermark + batik motif

import { m as motion } from "framer-motion";
import Link from "next/link";
import { footerSocial } from "./data/footerSocial";

// ─── Icons ────────────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a4 4 0 0 1-8 0z" />
  </svg>
);
const ThreadsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowUpRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const PLATFORM_ICON_MAP: Record<string, React.ComponentType> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Threads: ThreadsIcon,
  Website: GlobeIcon,
  Blog: GlobeIcon,
};

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Jejak Kolaborasi", href: "#portfolio" },
  { label: "Dampak", href: "#impact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export function Footer() {
  return (
    <footer
      id="contact"
      aria-label="UTBEX Footer — Kontak dan Navigasi"
      className="relative overflow-hidden w-full bg-white"
    >
      {/* ── Top section: info columns ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-0">

        {/* Top grid: tagline + nav + contact + social */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1.5fr] gap-8 lg:gap-12 pb-14 border-b border-black/[0.07]"
        >
          {/* Col 1 — Brand statement */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="font-black text-2xl text-utbex-dark tracking-tight">
              UTBEX<span className="text-utbex-maroon">.</span>
            </p>
            <p className="text-sm text-utbex-text-secondary/70 leading-relaxed max-w-[22ch]">
              Unusually Think Become Extraordinary — Pusat Pengembangan Ekonomi Kreatif Desa &amp; Social Enterprise.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6282252358901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start mt-2 bg-utbex-maroon text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-[#6A0000] transition-all duration-300 shadow-[0_4px_14px_rgba(139,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(139,0,0,0.35)]"
            >
              <WhatsAppIcon />
              Mari Berdiskusi
              <ArrowUpRightIcon />
            </a>
          </motion.div>

          {/* Col 2 — Navigasi */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-utbex-text-secondary/40 mb-1">Navigasi</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-utbex-dark/70 hover:text-utbex-maroon hover:translate-x-1 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Col 3 — Kontak */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-utbex-text-secondary/40 mb-1">Kontak</p>

            {/* Email — besar dan klik-able */}
            <a
              href="mailto:Utbexgrup.id!2026@gmail.com"
              aria-label="Kirim email ke UTBEX"
              className="group flex items-start gap-3 hover:text-utbex-maroon transition-colors duration-300"
            >
              <span className="mt-0.5 text-utbex-maroon shrink-0"><MailIcon /></span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/40 mb-0.5">Email</p>
                <p className="text-base font-semibold text-utbex-dark group-hover:text-utbex-maroon transition-colors duration-300 leading-snug break-all">
                  Utbexgrup.id!2026@gmail.com
                </p>
              </div>
            </a>

            {/* Alamat */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-utbex-maroon shrink-0"><MapPinIcon /></span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/40 mb-0.5">Lokasi</p>
                <p className="text-sm font-medium text-utbex-dark/75 leading-relaxed">
                  Jl. Kyai Rajiman RT.06 RW.02,<br />Bantur, Malang, 65179
                </p>
              </div>
            </div>
          </motion.div>

          {/* Col 4 — Sosial Media */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-utbex-text-secondary/40 mb-1">Ikuti Kami</p>
            <div className="flex flex-col gap-3">
              {footerSocial.map((item) => {
                const Icon = PLATFORM_ICON_MAP[item.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="group inline-flex items-center gap-3 text-utbex-dark/60 hover:text-utbex-maroon transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon/50 focus-visible:ring-offset-2 rounded-sm"
                  >
                    <span className="shrink-0 transition-colors duration-300"><Icon /></span>
                    <span className="text-sm font-semibold tracking-wide group-hover:translate-x-0.5 transition-transform duration-300">
                      {item.platform}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-1"><ArrowUpRightIcon /></span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-utbex-text-secondary/40 tracking-wide">
            © 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-[11px] text-utbex-text-secondary/30 tracking-wide">
            Unusually Think Become Extraordinary
          </p>
        </div>
      </div>

      {/* ── UTBEX Wordmark — CSS background-clip text approach (cross-browser reliable) ── */}
      <div className="relative w-full overflow-hidden select-none mt-2" aria-hidden="true">
        {/* SVG batik pattern — rendered as a data URI background */}
        <style>{`
          .utbex-wordmark {
            font-size: clamp(80px, 18vw, 280px);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.04em;
            font-family: 'Arial Black', 'Impact', 'Helvetica Neue', sans-serif;
            text-align: center;
            width: 100%;
            display: block;
            padding: 0;
            background: linear-gradient(135deg, #4a0000 0%, #8B0000 25%, #C0392B 50%, #8B0000 75%, #4a0000 100%),
                        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cellipse cx='15' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='rgba(255,255,255,0.18)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(255,255,255,0.1)'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='rgba(255,255,255,0.08)' stroke-width='0.6'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='rgba(255,255,255,0.08)' stroke-width='0.6'/%3E%3C/svg%3E");
            background-blend-mode: normal, overlay;
            background-size: 100% 100%, 60px 60px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        `}</style>
        <span className="utbex-wordmark">UTBEX</span>
      </div>
    </footer>
  );
}
