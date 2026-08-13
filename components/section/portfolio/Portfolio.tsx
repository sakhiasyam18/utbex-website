"use client";
// components/section/portfolio/Portfolio.tsx

import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { CategoryTab, ProjectData } from "./data/portfolioData";

import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioMobile } from "./components/PortfolioMobile";
import { PortfolioDesktop } from "./components/PortfolioDesktop";
import { PortfolioModal } from "./components/PortfolioModal";

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<CategoryTab>("Bidang Usaha & Produk");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Simple static transform for horizontal scrolling
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Throttle tab updates based on scroll progress
  const lastTabRef = useRef<string>("Bidang Usaha & Produk");
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let next: string;
    if (latest < 0.33)       next = "Bidang Usaha & Produk";
    else if (latest < 0.66)  next = "Program Pemberdayaan";
    else                     next = "Kolaborasi Sosial";
    
    if (next !== lastTabRef.current) {
      lastTabRef.current = next;
      setActiveTab(next as CategoryTab);
    }
  });

  const scrollToTab = (tab: CategoryTab, index: number) => {
    setActiveTab(tab);
    
    // Jump to specific scroll percentage
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
      className="relative w-full h-auto lg:h-[350vh] bg-[#060006] text-white"
    >
      {/* Container: sticky on desktop, static on mobile */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-clip flex flex-col relative w-full h-auto py-24 lg:py-0">
        
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-utbex-maroon/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-utbex-maroon/5 rounded-full blur-[150px]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
        </div>

        <PortfolioHeader 
          isDesktop={true} // The header handles responsive inside itself or via css
          activeTab={activeTab}
          scrollToTab={scrollToTab}
        />

        <PortfolioMobile 
          activeTab={activeTab}
          setSelectedProject={setSelectedProject}
        />

        <PortfolioDesktop 
          transformX={x}
          setSelectedProject={setSelectedProject}
        />
      </div>

      <PortfolioModal 
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </section>
  );
}
