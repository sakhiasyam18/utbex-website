// components/section/footer/components/FooterColumns.tsx
import { m as motion } from "framer-motion";
import Link from "next/link";
import { footerSocial } from "../data/footerSocial";
import { MapPinIcon, MailIcon, ICON_MAP } from "./Icons";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Jejak Kolaborasi", href: "#portfolio" },
  { label: "Dampak", href: "#impact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const staggerCols = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export function FooterColumns() {
  return (
    <motion.div
      variants={staggerCols}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr_1.3fr] gap-10 lg:gap-8 pb-14"
    >
      {/* ── Col 1: Brand ─────────────────────────────────── */}
      <motion.div variants={fadeUp} className="flex flex-col gap-5">
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

        {/* Email */}
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
          <span className="mt-0.5 text-utbex-maroon flex-shrink-0 group-hover/c:drop-shadow-[0_0_6px_rgba(139,0,0,0.35)] transition-all duration-400">
            <MailIcon />
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/35 mb-1">Email</p>
            <p className="text-[12px] sm:text-[13px] font-semibold text-utbex-dark/80 group-hover/c:text-utbex-maroon transition-colors duration-300 leading-snug break-all">
              Utbexgrup.id!2026@gmail.com
            </p>
          </div>
        </a>

        {/* Address */}
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
          <span className="mt-0.5 text-utbex-maroon flex-shrink-0 group-hover/c:drop-shadow-[0_0_6px_rgba(139,0,0,0.35)] transition-all duration-400">
            <MapPinIcon />
          </span>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-utbex-text-secondary/35 mb-1">Lokasi</p>
            <p className="text-[12px] sm:text-[13px] font-medium text-utbex-dark/70 group-hover/c:text-utbex-maroon transition-colors duration-300 leading-relaxed">
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
                id={item.platform === "Website" || item.platform === "Blog" ? "klik-partner-bcn" : `klik-${item.platform.toLowerCase()}`}
                className="group/s flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
                           bg-white/45 backdrop-blur-sm border border-white/55
                           shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]
                           hover:bg-white/75 hover:border-utbex-maroon/15
                           hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_0_12px_rgba(139,0,0,0.06)]
                           transition-all duration-300 hover:-translate-y-0.5
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon/40"
              >
                <span className="text-utbex-text-secondary/55 group-hover/s:text-utbex-maroon transition-colors duration-300 flex-shrink-0">
                  <Icon />
                </span>
                <span className="text-[11px] font-semibold text-utbex-dark/65 group-hover/s:text-utbex-maroon transition-colors duration-300 truncate">
                  {item.platform}
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
