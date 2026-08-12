"use client";
// components/section/portfolio/Portfolio.tsx

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { CategoryTab, ProjectData } from "./data/portfolioData";

import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioMobile } from "./components/PortfolioMobile";
import { PortfolioDesktop } from "./components/PortfolioDesktop";
import { PortfolioModal } from "./components/PortfolioModal";

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
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  // Mobile layout doesn't use the x transform
  const transformX = isDesktop ? x : "0%";

  // Automatically update the active tab based on scroll progress (Desktop Only)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
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
    if (!isDesktop) return;

    // Desktop: Jump to specific scroll percentage
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

        <PortfolioHeader 
          isDesktop={isDesktop}
          activeTab={activeTab}
          scrollToTab={scrollToTab}
        />

        <PortfolioMobile 
          activeTab={activeTab}
          setSelectedProject={setSelectedProject}
        />

        <PortfolioDesktop 
          transformX={transformX}
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
