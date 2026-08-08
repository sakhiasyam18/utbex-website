"use client";
// components/section/portfolio/Portfolio.tsx — Horizontal Scroll Portfolio

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { m as motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";
import { portfolioData, CategoryTab, ProjectData } from "./data/portfolioData";

const tabs: CategoryTab[] = ["Bidang Usaha & Produk", "Program Pemberdayaan", "Kolaborasi Sosial"];

const categoryColor: Record<string, string> = {
  // Bidang Usaha
  "INOVASI": "bg-amber-500/20 text-amber-300 border-amber-500/20",
  "PERCETAKAN": "bg-blue-500/20 text-blue-300 border-blue-500/20",
  "MERCHANDISE": "bg-pink-500/20 text-pink-300 border-pink-500/20",
  "FASHION": "bg-purple-500/20 text-purple-300 border-purple-500/20",
  "DESAIN": "bg-teal-500/20 text-teal-300 border-teal-500/20",
  // Pemberdayaan
  "PELATIHAN": "bg-indigo-500/20 text-indigo-300 border-indigo-500/20",
  "INKUBASI": "bg-emerald-500/20 text-emerald-300 border-emerald-500/20",
  "PENDAMPINGAN": "bg-red-500/20 text-red-300 border-red-500/20",
  "LEGALITAS": "bg-yellow-500/20 text-yellow-300 border-yellow-500/20",
  "MARKETING": "bg-sky-500/20 text-sky-300 border-sky-500/20",
  "DESA": "bg-green-500/20 text-green-300 border-green-500/20",
  // Kolaborasi
  "PENDIDIKAN": "bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
  "KEMANUSIAAN": "bg-rose-500/20 text-rose-300 border-rose-500/20",
  "PARIWISATA": "bg-orange-500/20 text-orange-300 border-orange-500/20",
  "KEMITRAAN": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/20",
};

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryTab>("Bidang Usaha & Produk");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  // Transform scroll progress to x translation (only for desktop)
  // With 15 items, we need a larger negative percentage to scroll to the very end
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  // Mobile layout doesn't use the x transform
  const transformX = isDesktop ? x : "0%";

  // Automatically update the active tab based on scroll progress (Desktop Only)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;

    // Divide the track into 3 equal parts
    if (latest < 0.33) {
      if (activeTab !== "Bidang Usaha & Produk") setActiveTab("Bidang Usaha & Produk");
    } else if (latest < 0.66) {
      if (activeTab !== "Program Pemberdayaan") setActiveTab("Program Pemberdayaan");
    } else {
      if (activeTab !== "Kolaborasi Sosial") setActiveTab("Kolaborasi Sosial");
    }
  });

  const scrollToTab = (tab: CategoryTab, index: number) => {
    setActiveTab(tab);

    if (!isDesktop) {
      // Mobile: just change tab, content updates in place without scrolling window
      return;
    }

    // Desktop: Jump to specific scroll percentage
    // index 0 = 0% (Start), index 1 = ~35% (Middle), index 2 = ~65% (End of cards)
    const percentages = [0, 0.35, 0.65];
    const targetPercentage = percentages[index];

    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + rect.top + (rect.height * targetPercentage);
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="portfolio"
      ref={targetRef}
      className="relative w-full bg-[#060006] text-white lg:h-[600vh]"
    >
      {/* Container: sticky on desktop, static on mobile */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col relative w-full h-auto py-24 lg:py-0 lg:pb-10">

        {/* Ambient background glow (Fixed to viewport) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-utbex-maroon/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-utbex-maroon/5 rounded-full blur-[150px]" />
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
        </div>

        {/* STATIC HEADER & TABS (Stays on screen) */}
        <div className="w-full px-6 sm:px-10 lg:px-[10vw] pt-0 lg:pt-12 xl:pt-16 z-20 flex-shrink-0 relative">
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
        </div>

        {/* DESKTOP TABS - Centered */}
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

        {/* MOBILE TABS & SCROLL INDICATOR */}
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

            {/* Native horizontal scroll for tabs to prevent messy wrapping */}
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
                  {/* Visual affordance for clicking */}
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

        {/* MOBILE LAYOUT: Beautiful Vertical Stack (Filtered by Active Tab) */}
        <div className="lg:hidden flex flex-col gap-10 px-6 sm:px-10 pb-20 mt-4">
          {portfolioData
            .filter((p) => p.tab === activeTab)
            .map((project, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="w-full relative rounded-[2rem] overflow-hidden group border border-white/[0.08] shadow-2xl cursor-pointer"
              >
                <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    quality={85}
                  />
                  {/* Subtle Top Gradient for badges */}
                  <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />

                  {/* Deep Bottom Gradient for content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060006] via-black/50 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="text-[12px] font-black text-white/50 tracking-[0.2em]">{`0${idx + 1}`}</span>
                    <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${categoryColor[project.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {project.story}
                    </p>

                    <div className="flex flex-col gap-1 pt-5 border-t border-white/15">
                      <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">
                        {project.location} · {project.year}
                      </p>
                      <p className="text-xs text-white/90 font-bold truncate">
                        {project.evidence}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {/* DESKTOP LAYOUT: Framer Motion Horizontal Scroll */}
        <div className="hidden lg:flex flex-1 w-full relative items-start overflow-visible pb-10">
          <motion.div
            style={{ x: transformX }}
            className="relative z-10 flex flex-row items-center gap-10 px-[10vw] h-[65vh] max-h-[500px] w-[max-content]"
          >
            {/* Cards Track */}
            {portfolioData.map((project, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="w-[450px] flex-shrink-0 h-full relative rounded-3xl overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500"
              >
                <div className={`relative h-full w-full overflow-hidden bg-white/5`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    quality={80}
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Top badge row */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-black text-white/50 tracking-[0.2em]">{`0${idx + 1}`}</span>
                    <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border backdrop-blur-md ${categoryColor[project.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                    <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.15]">
                      <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed mb-4 line-clamp-3">
                        {project.story}
                      </p>

                      {/* Meta row */}
                      <div className="flex flex-col gap-1 pt-3">
                        <p className="text-[10px] font-medium text-white/30 truncate">{project.location} · {project.year}</p>
                        <p className="text-[11px] text-white/90 font-bold truncate">{project.evidence}</p>
                      </div>
                    </div>
                  </div>

                  {/* Maroon glow overlay on hover */}
                  <div className="absolute inset-0 bg-utbex-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.article>
            ))}

            {/* Right buffer for scrolling */}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* AESTHETIC POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-2xl w-full bg-[#060006] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>

              {/* Image Area */}
              <div className="relative w-full h-[35vh] sm:h-[45vh] bg-white/5">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060006] to-transparent" />

                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                  <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${categoryColor[selectedProject.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                    {selectedProject.categoryTag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 overflow-y-auto scrollbar-hide">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
                  {selectedProject.story}
                </p>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-[10px] font-bold text-white/40 mb-1 tracking-widest uppercase">Lokasi & Tahun</p>
                    <p className="text-sm text-white/90 font-bold">{selectedProject.location} · {selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 mb-1 tracking-widest uppercase">Dampak / Bukti</p>
                    <p className="text-sm text-white/90 font-bold">{selectedProject.evidence}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
