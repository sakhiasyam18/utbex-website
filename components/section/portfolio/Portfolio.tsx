"use client";
// components/section/portfolio/Portfolio.tsx — Horizontal Scroll Portfolio

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { m as motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";
import { portfolioData, CategoryTab } from "./data/portfolioData";

const tabs: CategoryTab[] = ["Ekonomi Kreatif", "Pemberdayaan", "Sosial & Kemitraan"];

const categoryColor: Record<string, string> = {
  "PRODUK LOKAL": "bg-amber-500/20 text-amber-300 border-amber-500/20",
  "DIGITALISASI": "bg-blue-500/20 text-blue-300 border-blue-500/20",
  "INKUBASI": "bg-emerald-500/20 text-emerald-300 border-emerald-500/20",
  "PENDAMPINGAN": "bg-red-500/20 text-red-300 border-red-500/20",
  "EDUKASI SOSIAL": "bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
  "KOLABORASI": "bg-purple-500/20 text-purple-300 border-purple-500/20",
};

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryTab>("Ekonomi Kreatif");

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
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);

  // Mobile layout doesn't use the x transform
  const transformX = isDesktop ? x : "0%";

  // Automatically update the active tab based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
    
    // Divide the track into 3 equal parts
    if (latest < 0.33) {
      if (activeTab !== "Ekonomi Kreatif") setActiveTab("Ekonomi Kreatif");
    } else if (latest < 0.66) {
      if (activeTab !== "Pemberdayaan") setActiveTab("Pemberdayaan");
    } else {
      if (activeTab !== "Sosial & Kemitraan") setActiveTab("Sosial & Kemitraan");
    }
  });

  const scrollToTab = (tab: CategoryTab, index: number) => {
    setActiveTab(tab);
    if (!isDesktop) {
      return; // Normal layout for mobile
    }

    // Desktop: jump to specific scroll percentage
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
      className="relative w-full bg-[#060006] text-white lg:h-[400vh]"
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

        {/* Jump Links (Tabs) - Centered */}
        <div className="w-full flex justify-center z-20 mt-8 lg:mt-10 mb-8 lg:mb-10 flex-shrink-0 relative px-6">
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

        {/* HORIZONTALLY SCROLLING TRACK */}
        <div className="flex-1 w-full relative flex lg:items-start items-center lg:overflow-visible overflow-hidden mt-4 lg:mt-0 pb-10">
          <motion.div
            style={{ x: transformX }}
            className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 px-6 sm:px-10 lg:px-[10vw] lg:h-[55vh] lg:max-h-[500px] lg:w-[max-content]"
          >
            {/* Cards Track */}
            {portfolioData.map((project, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id}
                className="w-full sm:w-[400px] lg:w-[450px] flex-shrink-0 lg:h-full relative rounded-3xl overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500"
              >
                <div className={`relative aspect-[4/5] lg:aspect-auto lg:h-full lg:w-full overflow-hidden bg-white/5`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    quality={80}
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Top badge row */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-black text-white/50 tracking-[0.2em]">{`0${idx + 1}`}</span>
                    <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border backdrop-blur-md ${categoryColor[project.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                    <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.15]">
                      <h3 className="text-sm sm:text-lg font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed mb-4 line-clamp-3">
                        {project.story}
                      </p>

                      {/* Meta row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-medium text-white/30 truncate">{project.location} · {project.year}</p>
                          <p className="text-[11px] text-white/90 font-bold mt-1">{project.evidence}</p>
                        </div>
                        {/* Arrow button */}
                        <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-utbex-maroon group-hover:border-utbex-maroon group-hover:scale-110 transition-all duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Maroon glow overlay on hover */}
                  <div className="absolute inset-0 bg-utbex-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.article>
            ))}



            {/* Right buffer for desktop scrolling */}
            <div className="hidden lg:block w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
