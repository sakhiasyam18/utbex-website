"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const { activeSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

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
            className="hidden lg:flex fixed left-0 top-0 h-screen w-72 xl:w-80 flex-col z-50
                       bg-utbex-canvas border-r border-black/[0.07]"
          >
            {/* ── Logo Block ────────────────────────────────────── */}
            <div className="px-6 pt-7 pb-5 border-b border-black/[0.07]">
              <Link href="/" className="flex items-center gap-3 group mb-4">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                  <Image
                    src="/images/logo-utbex-3.avif"
                    alt="UTBEX logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className="font-black text-xl text-utbex-dark tracking-tight leading-none">
                    UTBEX<span className="text-utbex-maroon">.</span>
                  </p>
                  <p className="text-[10px] font-semibold text-utbex-text-secondary/70 tracking-widest uppercase mt-0.5">
                    Inovasi Indonesia
                  </p>
                </div>
              </Link>
              <p className="text-[11px] text-utbex-text-secondary leading-relaxed">
                Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise
              </p>
            </div>

            {/* ── Nav Links ─────────────────────────────────────── */}
            <nav className="flex-1 px-4 py-5 overflow-y-auto" aria-label="Main navigation">
              <p className="text-[10px] font-bold tracking-widest text-utbex-text-secondary/40 uppercase px-3 mb-3">
                Navigasi
              </p>
              <div className="space-y-1.5">
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold
                        tracking-wide transition-all duration-300
                        ${isActive
                          ? "bg-utbex-maroon text-white shadow-[0_4px_14px_rgba(139,0,0,0.3)]"
                          : "text-utbex-dark/70 hover:bg-black/[0.05] hover:text-utbex-dark hover:translate-x-1.5"
                        }`}
                    >
                      <span
                        className={`flex-shrink-0 ${
                          isActive ? "text-white" : "text-utbex-dark/40 group-hover:text-utbex-dark/70"
                        }`}
                      >
                        {sectionIcons[link.id] ?? <HomeIcon />}
                      </span>
                      <span className="uppercase tracking-widest text-[11px]">{link.label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── Bottom CTA ────────────────────────────────────── */}
            <div className="px-4 pb-7 pt-4 border-t border-black/[0.07] space-y-3">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] text-utbex-text-secondary/70 font-medium">
                  Siap berkolaborasi
                </span>
              </div>
              <Link
                href={navigationContent.cta.href}
                className="flex items-center justify-center gap-2 w-full bg-utbex-maroon text-white
                           py-3 px-4 rounded-xl text-sm font-bold tracking-wide uppercase
                           hover:bg-[#6A0000] transition-colors duration-200
                           shadow-[0_4px_14px_rgba(139,0,0,0.25)]"
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
            className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                       px-5 py-3.5 bg-utbex-canvas/95 backdrop-blur-md border-b border-black/[0.07]"
          >
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className="font-black text-base text-utbex-dark tracking-tight leading-none">
                  UTBEX<span className="text-utbex-maroon">.</span>
                </p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-utbex-text-secondary hover:text-utbex-dark transition-colors"
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
              className="lg:hidden fixed inset-0 z-[60] bg-black/25 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.32 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-black/[0.07]">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                    <Image src="/images/logo-utbex-3.avif" alt="UTBEX logo" fill className="object-cover" />
                  </div>
                  <span className="font-black text-utbex-dark text-base">UTBEX<span className="text-utbex-maroon">.</span></span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 text-utbex-text-secondary hover:text-utbex-dark" aria-label="Close">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 px-4 py-5 space-y-1.5">
                <p className="text-[10px] font-bold tracking-widest text-utbex-text-secondary/40 uppercase px-3 mb-3">Menu</p>
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${
                        isActive ? "bg-utbex-maroon text-white" : "text-utbex-dark/70 hover:bg-black/[0.05] hover:text-utbex-dark"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-utbex-dark/40"}>
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
