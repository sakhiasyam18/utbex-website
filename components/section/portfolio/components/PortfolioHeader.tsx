"use client";

import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/motion/variants/stagger";
import { CategoryTab, tabs } from "../data/portfolioData";

interface PortfolioHeaderProps {
  isDesktop: boolean;
  activeTab: CategoryTab;
  scrollToTab: (tab: CategoryTab, index: number) => void;
}

export function PortfolioHeader({ isDesktop, activeTab, scrollToTab }: PortfolioHeaderProps) {
  return (
    <>
      {/* STATIC HEADER */}
      <header className="w-full px-6 sm:px-10 lg:px-[10vw] pt-0 lg:pt-12 xl:pt-16 z-20 flex-shrink-0 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10"
        >
          <div>
            <motion.div variants={staggerChild} className="text-mask">
              <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-white uppercase mb-5">
                — Nilai Lebih Kami
              </span>
            </motion.div>
            <motion.h2 variants={staggerChild} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight max-w-3xl">
              Keunggulan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-utbex-maroon via-red-400 to-utbex-maroon italic pr-4 py-1 box-decoration-clone">
                UTBEX Indonesia
              </span>
            </motion.h2>
          </div>
          <motion.p variants={staggerChild} className="text-white/50 text-sm max-w-sm leading-relaxed font-medium">
            Pendekatan komprehensif kami dalam membangun ekosistem desa mandiri melalui kreativitas, kolaborasi, dan aksi nyata yang berdampak luas.
          </motion.p>
        </motion.div>
      </header>

      {/* DESKTOP TABS */}
      <div className="hidden lg:flex w-full justify-center z-20 mt-10 mb-10 flex-shrink-0 relative px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm max-w-fit"
        >
          {tabs.map((tab, idx) => (
            <motion.button
              variants={staggerChild}
              key={tab}
              onClick={() => scrollToTab(tab, idx)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300
                         ${activeTab === tab ? "text-white bg-white/10" : "text-white/40 hover:text-white hover:bg-white/5"}`}
            >
              <span className="relative z-10">{tab}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* MOBILE TABS */}
      <div className="lg:hidden w-full z-20 mt-8 mb-6 flex-shrink-0 relative">
        <div className="px-6 sm:px-10 mb-4 relative">
          <div className="flex justify-between items-end mb-3">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Pilih Kategori :</p>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-[9px] font-bold text-utbex-maroon flex items-center gap-1 opacity-80"
            >
              Geser kategori <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </motion.div>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 -mb-3 relative z-10" style={{ WebkitOverflowScrolling: 'touch' }}>
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => scrollToTab(tab, idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3.5 rounded-2xl text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border
                           ${activeTab === tab
                    ? "text-white bg-utbex-maroon border-utbex-maroon shadow-[0_4px_20px_rgba(139,0,0,0.3)]"
                    : "text-white/50 bg-white/5 border-white/10 active:bg-white/10"}`}
              >
                <span>{tab}</span>
                {activeTab !== tab && (
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center ml-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
