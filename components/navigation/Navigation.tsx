"use client";

import { useState } from "react";
import {  AnimatePresence, m as motion  } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePastHero } from "../providers/HeroVisibilityContext";
import { useActiveSection } from "./hooks/useActiveSection";
import { navigationLinks } from "./data/navigationLinks";
import { navigationContent } from "./data/navigationContent";

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

const sectionIcons: Record<string, React.ReactNode> = {
  hero: <HomeIcon />,
  about: <InfoIcon />,
  portfolio: <BriefcaseIcon />,
  impact: <TrendingUpIcon />,
  contact: <MessageIcon />,
};

// ─── Sidebar slide-in — lightweight CSS-based transition, not spring ──────────
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
  const pastHero = usePastHero();           // ← shared context, zero extra observer
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = activeSection === 'portfolio';
  
  const sidebarBg = isDark ? "bg-[#0a0a0a] border-white/5" : "bg-utbex-canvas border-black/[0.07]";
  const textColor = isDark ? "text-white" : "text-utbex-dark";
  const secondaryTextColor = isDark ? "text-white/60" : "text-utbex-text-secondary/60";
  const dividerColor = isDark ? "border-white/5" : "border-black/[0.07]";
  const statsBg = isDark ? "bg-white/[0.02]" : "bg-black/[0.02]";
  const statsDivider = isDark ? "divide-white/5" : "divide-black/[0.07]";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP — Fixed Left Sidebar (wider, heynesh-style)
          Only visible after scrolling past hero
      ═══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {pastHero && (
          <motion.aside
            key="sidebar"
            variants={sidebarAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`hidden lg:flex fixed left-0 top-0 h-screen w-72 xl:w-80 flex-col z-[100] border-r transition-colors duration-500
                       ${sidebarBg}`}
          >
            {/* ── Logo Block ────────────────────────────────────── */}
            <div className={`px-6 pt-8 pb-6 border-b transition-colors duration-500 ${dividerColor}`}>
              <Link href="/" className="flex items-center gap-3 group mb-5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm bg-utbex-maroon/5">
                  <Image
                    src="/images/logo-utbex-3.avif"
                    alt="UTBEX logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className={`font-black text-2xl tracking-tight leading-none transition-colors duration-500 ${textColor}`}>
                    UTBEX<span className="text-utbex-maroon">.</span>
                  </p>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mt-1 transition-colors duration-500 ${secondaryTextColor}`}>
                    Inovasi Indonesia
                  </p>
                </div>
              </Link>
              <p className={`text-[12px] font-medium leading-relaxed transition-colors duration-500 ${isDark ? "text-white/60" : "text-utbex-text-secondary"}`}>
                Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise.
              </p>
            </div>

            {/* ── Stats / Testimonials Strip ──────────────────────── */}
            <div className={`px-6 py-5 border-b transition-colors duration-500 ${dividerColor} ${statsBg}`}>
              <div className={`flex divide-x transition-colors duration-500 ${statsDivider}`}>
                <div className="flex-1 pr-4">
                  <p className={`text-xl font-black tracking-tighter transition-colors duration-500 ${isDark ? "text-white" : "text-utbex-maroon"}`}>10<span className="text-sm">+</span></p>
                  <p className={`text-[9px] font-bold leading-tight uppercase mt-1 tracking-widest transition-colors duration-500 ${isDark ? "text-white/60" : "text-utbex-text-secondary/70"}`}>Tahun<br/>Pengalaman</p>
                </div>
                <div className="flex-1 pl-4">
                  <p className={`text-xl font-black tracking-tighter transition-colors duration-500 ${isDark ? "text-white" : "text-utbex-maroon"}`}>80<span className="text-sm">+</span></p>
                  <p className={`text-[9px] font-bold leading-tight uppercase mt-1 tracking-widest transition-colors duration-500 ${isDark ? "text-white/60" : "text-utbex-text-secondary/70"}`}>Desa & UMKM<br/>Kolaborasi</p>
                </div>
              </div>
            </div>

            {/* ── Nav Links ─────────────────────────────────────── */}
            <nav className="flex-1 px-4 py-6 overflow-y-auto" aria-label="Main navigation">
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 mb-4 transition-colors duration-500 ${isDark ? "text-white/40" : "text-utbex-text-secondary/40"}`}>
                Navigasi
              </p>
              <div className="space-y-2">
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
                          if (el) {
                              // Account for fixed header on mobile if necessary, though this is sidebar
                              el.scrollIntoView({ behavior: 'smooth' });
                          }
                      }}
                      className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border border-transparent
                        ${isActive
                          ? "bg-utbex-maroon text-white shadow-[0_4px_14px_rgba(139,0,0,0.3)]"
                          : isDark
                            ? "bg-white/5 text-white/70 hover:bg-utbex-maroon hover:text-white hover:border-transparent hover:shadow-[0_4px_14px_rgba(139,0,0,0.3)] hover:translate-x-1"
                            : "bg-white text-utbex-dark border-black/[0.08] hover:bg-utbex-maroon hover:text-white hover:border-transparent hover:shadow-[0_4px_14px_rgba(139,0,0,0.3)] hover:translate-x-1"
                        }`}
                    >
                      <span
                        className={`flex-shrink-0 transition-colors ${
                          isActive 
                            ? "text-white" 
                            : isDark ? "text-white/40 group-hover:text-white" : "text-utbex-dark/50 group-hover:text-white"
                        }`}
                      >
                        {sectionIcons[link.id] ?? <HomeIcon />}
                      </span>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── Bottom CTA ────────────────────────────────────── */}
            <div className={`px-4 pb-7 pt-4 border-t transition-colors duration-500 ${dividerColor}`}>
              <Link
                href={navigationContent.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-utbex-maroon text-white
                           py-4 px-4 rounded-2xl text-[11px] font-bold tracking-[0.15em] uppercase
                           hover:bg-[#6A0000] transition-all duration-300
                           shadow-[0_4px_14px_rgba(139,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(139,0,0,0.4)]"
              >
                {navigationContent.cta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE — Top bar (only after hero)
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
                       px-5 py-3.5 backdrop-blur-md border-b transition-colors duration-500
                       ${isDark ? "bg-[#0a0a0a]/95 border-white/5" : "bg-utbex-canvas/95 border-black/[0.07]"}`}
          >
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className={`font-black text-base tracking-tight leading-none transition-colors duration-500 ${textColor}`}>
                  UTBEX<span className="text-utbex-maroon">.</span>
                </p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-utbex-text-secondary hover:text-utbex-dark"}`}
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE — Slide drawer
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
              className="lg:hidden fixed inset-0 z-[110] bg-black/25 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.32 }}
              className={`lg:hidden fixed top-0 right-0 bottom-0 z-[120] w-72 flex flex-col shadow-2xl transition-colors duration-500
                          ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
            >
              <div className={`flex justify-between items-center px-6 py-5 border-b transition-colors duration-500 ${dividerColor}`}>
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                    <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill className="object-cover" />
                  </div>
                  <span className={`font-black text-base transition-colors duration-500 ${textColor}`}>UTBEX<span className="text-utbex-maroon">.</span></span>
                </div>
                <button onClick={() => setMobileOpen(false)} className={`p-1.5 transition-colors ${isDark ? "text-white/70 hover:text-white" : "text-utbex-text-secondary hover:text-utbex-dark"}`} aria-label="Close">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-4 py-5 space-y-1.5">
                <p className={`text-[10px] font-bold tracking-widest uppercase px-3 mb-3 transition-colors duration-500 ${isDark ? "text-white/40" : "text-utbex-text-secondary/40"}`}>Menu</p>
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
                      className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${
                        isActive 
                          ? "bg-utbex-maroon text-white" 
                          : isDark
                            ? "text-white/70 hover:bg-utbex-maroon hover:text-white"
                            : "text-utbex-dark/70 hover:bg-utbex-maroon hover:text-white"
                      }`}
                    >
                      <span className={isActive ? "text-white" : isDark ? "text-white/40 group-hover:text-white" : "text-utbex-dark/40 group-hover:text-white"}>
                        {sectionIcons[link.id] ?? <HomeIcon />}
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="px-4 pb-8">
                <Link
                  href={navigationContent.cta.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-utbex-maroon text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-[#6A0000] transition-colors"
                >
                  {navigationContent.cta.label}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
