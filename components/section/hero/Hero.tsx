"use client";
// components/section/hero/Hero.tsx
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroTopBar } from "./components/HeroTopBar";
import { HeroDesktopContent } from "./components/HeroDesktopContent";
import { HeroMobileContent } from "./components/HeroMobileContent";
import { HeroStatsBar } from "./components/HeroStatsBar";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "60% start"],
  });

  // GPU-composited — tidak menyentuh main thread
  // Engine motion di-reuse untuk versi mobile dan desktop
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(14px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full flex flex-col"
      style={{ minHeight: "100svh" }}
      aria-label="Beranda UTBEX Indonesia"
    >
      <HeroTopBar />
      
      {/* Layout untuk Desktop (Grid 3 Kolom) */}
      <HeroDesktopContent blur={blur} scale={scale} opacity={opacity} />
      
      {/* Layout untuk Mobile & Tablet (Full screen dengan overlay) */}
      <HeroMobileContent blur={blur} scale={scale} opacity={opacity} />
      
      <HeroStatsBar />
    </section>
  );
}
