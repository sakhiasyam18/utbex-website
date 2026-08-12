"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePastHero } from "../providers/HeroVisibilityContext";
import { useActiveSection } from "./useActiveSection";
import { navigationLinks } from "./navigationLinks";
import { navigationContent } from "./navigationContent";

// ─── Icons ────────────────────────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}
function TimelineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.99 16.01 1 13.64 1h-3.28C7.99 1 6 2.99 6 4.64c0 .48.11.92.18 1.36H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6.36-3c.74 0 1.36.62 1.36 1.36 0 .48-.18.92-.36 1.64H9.36C9.18 5.28 9 4.84 9 4.36 9 3.62 9.62 3 10.36 3h3.28zM20 19H4V8h16v11z" />
    </svg>
  );
}
function TrendingUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

const sectionIcons: Record<string, React.ReactNode> = {
  hero: <HomeIcon />,
  about: <InfoIcon />,
  keunggulan: <StarIcon />,
  timeline: <TimelineIcon />,
  portfolio: <BriefcaseIcon />,
  impact: <TrendingUpIcon />,
  contact: <MessageIcon />,
};

// ─── Animations ──────────────────────────────────────────────────────────
const sidebarAnim: any = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween" as const, ease: [0.25, 0.1, 0.25, 1], duration: 0.38 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { type: "tween" as const, ease: [0.4, 0, 0.6, 1], duration: 0.28 },
  },
};

const mobileBarAnim: any = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween" as const, ease: [0.25, 0.1, 0.25, 1], duration: 0.32 },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { type: "tween" as const, ease: [0.4, 0, 0.6, 1], duration: 0.22 },
  },
};

export function Navigation() {
  const pastHero = usePastHero();
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const isDark = activeSection === 'portfolio';

  // Mouse spotlight tracker
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sidebarRef.current) return;
    const rect = sidebarRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP — Fixed Left Sidebar (Glassmorphism + Neon)
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {pastHero && (
          <motion.aside
            ref={sidebarRef}
            key="sidebar"
            variants={sidebarAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseMove={handleMouseMove}
            className={`hidden lg:flex fixed left-0 top-0 h-screen w-72 xl:w-80 flex-col z-[100] transition-colors duration-500
                       ${isDark 
                         ? "bg-[#050005]/90 backdrop-blur-2xl border-r border-white/[0.04]" 
                         : "bg-white/70 backdrop-blur-2xl border-r border-black/[0.06]"}`}
          >
            {/* Mouse-following spotlight glow */}
            <div
              className="absolute pointer-events-none inset-0 z-0 overflow-hidden rounded-r-lg"
              aria-hidden="true"
            >
              <div
                className="absolute w-64 h-64 rounded-full transition-opacity duration-500"
                style={{
                  left: mousePos.x - 128,
                  top: mousePos.y - 128,
                  background: isDark
                    ? "radial-gradient(circle, rgba(139,0,0,0.12) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(139,0,0,0.06) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Top highlight line (neon effect) */}
            <div className={`absolute top-0 inset-x-0 h-px ${isDark ? "bg-gradient-to-r from-transparent via-utbex-maroon/40 to-transparent" : "bg-gradient-to-r from-transparent via-utbex-maroon/20 to-transparent"}`} aria-hidden="true" />

            {/* ── Logo Block ────────────────────────────────────── */}
            <div className={`relative z-10 px-6 pt-10 pb-8 border-b transition-colors duration-500 ${isDark ? "border-white/[0.04]" : "border-black/[0.06]"}`}>
              <Link href="/" className="flex items-center gap-4 group mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-[0_4px_16px_rgba(139,0,0,0.15)] group-hover:shadow-[0_4px_24px_rgba(139,0,0,0.3)] transition-shadow duration-500">
                  {/* Neumorphism inner shadow */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] z-10 pointer-events-none" />
                  <Image
                    src="/images/logo-utbex-3.avif"
                    alt="UTBEX logo"
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 scale-[1.15]"
                  />
                </div>
                <div className="leading-tight">
                  <p className={`font-black text-[1.75rem] tracking-tight leading-none transition-colors duration-500 ${isDark ? "text-white" : "text-utbex-dark"}`}>
                    UTBEX<span className="text-utbex-maroon">.</span>
                  </p>
                  <p className={`text-xs font-bold tracking-[0.15em] uppercase mt-1.5 transition-colors duration-500 ${isDark ? "text-utbex-maroon/70" : "text-utbex-maroon/90"}`}>
                    Inovasi Indonesia
                  </p>
                </div>
              </Link>
              <p className={`text-[13px] font-semibold leading-relaxed transition-colors duration-500 ${isDark ? "text-white/60" : "text-utbex-dark/80"}`}>
                Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise.
              </p>
            </div>

            {/* ── Stats / Glassmorphism Strip ──────────────────────── */}
            <div className={`relative z-10 px-6 py-5 border-b transition-colors duration-500 ${isDark ? "border-white/[0.04]" : "border-black/[0.06]"}`}>
              <div className="flex gap-3">
                {/* Stat Card 1 */}
                <div className={`flex-1 px-4 py-3.5 rounded-2xl border transition-all duration-300 hover:scale-[1.03] group/stat cursor-default
                               ${isDark
                                 ? "bg-white/[0.03] border-white/[0.06] hover:bg-utbex-maroon/10 hover:border-utbex-maroon/20"
                                 : "bg-white/80 border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(139,0,0,0.1)] hover:border-utbex-maroon/20"}`}>
                  <p className={`text-xl font-black tracking-tighter transition-colors duration-300 group-hover/stat:text-utbex-maroon ${isDark ? "text-white" : "text-utbex-maroon"}`}>
                    10<span className="text-sm">+</span>
                  </p>
                  <p className={`text-[8px] font-bold leading-tight uppercase mt-1 tracking-widest transition-colors duration-300 ${isDark ? "text-white/40 group-hover/stat:text-white/60" : "text-utbex-text-secondary/60"}`}>
                    Tahun<br />Pengalaman
                  </p>
                </div>
                {/* Stat Card 2 */}
                <div className={`flex-1 px-4 py-3.5 rounded-2xl border transition-all duration-300 hover:scale-[1.03] group/stat cursor-default
                               ${isDark
                                 ? "bg-white/[0.03] border-white/[0.06] hover:bg-utbex-maroon/10 hover:border-utbex-maroon/20"
                                 : "bg-white/80 border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(139,0,0,0.1)] hover:border-utbex-maroon/20"}`}>
                  <p className={`text-xl font-black tracking-tighter transition-colors duration-300 group-hover/stat:text-utbex-maroon ${isDark ? "text-white" : "text-utbex-maroon"}`}>
                    80<span className="text-sm">+</span>
                  </p>
                  <p className={`text-[8px] font-bold leading-tight uppercase mt-1 tracking-widest transition-colors duration-300 ${isDark ? "text-white/40 group-hover/stat:text-white/60" : "text-utbex-text-secondary/60"}`}>
                    Desa & UMKM<br />Kolaborasi
                  </p>
                </div>
              </div>
            </div>

            {/* ── Nav Links ─────────────────────────────────────── */}
            <nav className="relative z-10 flex-1 px-4 py-8 overflow-y-auto flex flex-col" aria-label="Main navigation">
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 mb-4 transition-colors duration-500 ${isDark ? "text-white/30" : "text-utbex-dark/40"}`}>
                Navigasi
              </p>
              <div className="space-y-2.5 flex-1 flex flex-col">
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(link.id);
                          const el = document.getElementById(link.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-[12px] font-bold tracking-widest uppercase transition-all duration-300 border relative overflow-hidden
                        ${isActive
                          ? "bg-utbex-maroon text-white border-utbex-maroon shadow-[0_4px_20px_rgba(139,0,0,0.35)]"
                          : isDark
                            ? "bg-white/[0.03] text-white border-white/[0.04] hover:bg-white/[0.08] hover:border-utbex-maroon/30 hover:shadow-[0_0_16px_rgba(139,0,0,0.12)] hover:translate-x-1"
                            : "bg-white/90 text-utbex-dark border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-utbex-maroon hover:text-white hover:border-utbex-maroon hover:shadow-[0_4px_20px_rgba(139,0,0,0.3)] hover:translate-x-1"
                        }`}
                    >
                      <span
                        className={`flex-shrink-0 transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : isDark ? "text-white/50 group-hover:text-white" : "text-utbex-dark/50 group-hover:text-white"
                        }`}
                      >
                        {sectionIcons[link.id] ?? <HomeIcon />}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── Bottom CTA — Glassmorphism neon button ────────────── */}
            <div className={`relative z-10 px-4 pb-8 pt-6 border-t mt-auto transition-colors duration-500 ${isDark ? "border-white/[0.04]" : "border-black/[0.06]"}`}>
              <Link
                href={navigationContent.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 w-full bg-utbex-maroon text-white
                           py-5 px-4 rounded-2xl text-[12px] font-bold tracking-[0.15em] uppercase overflow-hidden
                           transition-all duration-500
                           shadow-[0_4px_20px_rgba(139,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(139,0,0,0.5)]
                           hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: "transform 0.8s, opacity 0.3s" }} />
                <span className="relative z-10 flex items-center gap-2.5">
                  {navigationContent.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Bottom neon line */}
            <div className={`absolute bottom-0 inset-x-0 h-px ${isDark ? "bg-gradient-to-r from-transparent via-utbex-maroon/30 to-transparent" : "bg-gradient-to-r from-transparent via-utbex-maroon/15 to-transparent"}`} aria-hidden="true" />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE — Top bar (Glassmorphism)
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {pastHero && (
          <motion.header
            key="mobile-bar"
            variants={mobileBarAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`lg:hidden fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                       px-5 py-3.5 backdrop-blur-xl border-b transition-colors duration-500
                       ${isDark ? "bg-[#050005]/80 border-white/[0.05]" : "bg-white/70 border-black/[0.06]"}`}
          >
            {/* Top highlight */}
            <div className={`absolute top-0 inset-x-0 h-px ${isDark ? "bg-gradient-to-r from-transparent via-utbex-maroon/30 to-transparent" : "bg-gradient-to-r from-transparent via-utbex-maroon/15 to-transparent"}`} />

            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill sizes="32px" className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className={`font-black text-base tracking-tight leading-none transition-colors duration-500 ${isDark ? "text-white" : "text-utbex-dark"}`}>
                  UTBEX<span className="text-utbex-maroon">.</span>
                </p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2.5 rounded-xl border transition-all duration-300
                         ${isDark
                           ? "text-white/70 hover:text-white bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.08]"
                           : "text-utbex-text-secondary hover:text-utbex-dark bg-white/50 border-black/[0.05] hover:bg-white/80"}`}
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE — Slide drawer (Glassmorphism)
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.32 }}
              className={`lg:hidden fixed top-0 right-0 bottom-0 z-[120] w-[85vw] max-w-sm flex flex-col overflow-hidden
                          ${isDark
                            ? "bg-[#050005]/95 backdrop-blur-2xl border-l border-white/[0.05]"
                            : "bg-white/90 backdrop-blur-2xl border-l border-black/[0.06] shadow-2xl"}`}
            >
              {/* Top neon line */}
              <div className={`absolute top-0 inset-x-0 h-px ${isDark ? "bg-gradient-to-r from-transparent via-utbex-maroon/40 to-transparent" : "bg-gradient-to-r from-transparent via-utbex-maroon/20 to-transparent"}`} />

              {/* Header */}
              <div className={`flex justify-between items-center px-6 py-5 border-b transition-colors duration-500 ${isDark ? "border-white/[0.04]" : "border-black/[0.06]"}`}>
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm">
                    <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill sizes="32px" className="object-cover" />
                  </div>
                  <span className={`font-black text-base transition-colors duration-500 ${isDark ? "text-white" : "text-utbex-dark"}`}>UTBEX<span className="text-utbex-maroon">.</span></span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className={`p-2 rounded-xl border transition-all duration-300
                             ${isDark
                               ? "text-white/70 hover:text-white bg-white/[0.04] border-white/[0.06]"
                               : "text-utbex-text-secondary hover:text-utbex-dark bg-white/50 border-black/[0.05]"}`}
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
                <p className={`text-[10px] font-bold tracking-widest uppercase px-3 mb-3 transition-colors duration-500 ${isDark ? "text-white/30" : "text-utbex-text-secondary/40"}`}>Menu</p>
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(link.id);
                          setMobileOpen(false);
                          const el = document.getElementById(link.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border
                        ${isActive
                          ? "bg-utbex-maroon text-white border-utbex-maroon shadow-[0_4px_20px_rgba(139,0,0,0.35)]"
                          : isDark
                            ? "text-white/60 border-white/[0.03] hover:bg-utbex-maroon hover:text-white hover:border-utbex-maroon hover:shadow-[0_4px_20px_rgba(139,0,0,0.3)]"
                            : "text-utbex-dark/70 border-black/[0.04] hover:bg-utbex-maroon hover:text-white hover:border-utbex-maroon hover:shadow-[0_4px_20px_rgba(139,0,0,0.3)]"
                        }`}
                    >
                      <span className={isActive ? "text-white" : isDark ? "text-white/30 group-hover:text-white" : "text-utbex-dark/40 group-hover:text-white"}>
                        {sectionIcons[link.id] ?? <HomeIcon />}
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="px-4 pb-8 pt-4">
                <Link
                  href={navigationContent.cta.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full bg-utbex-maroon text-white py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em]
                             hover:shadow-[0_8px_32px_rgba(139,0,0,0.5)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,0,0,0.3)]"
                >
                  {navigationContent.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
