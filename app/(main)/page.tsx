"use client";

//app/(main)/page.tsx
import Hero from "@/components/section/hero/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/section/about/About"), { ssr: false });
const Timeline = dynamic(() => import("@/components/section/timeline/Timeline"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/section/portfolio/Portfolio"), { ssr: false });
const Impact = dynamic(() => import("@/components/section/impact/Impact"), { ssr: false });
const Footer = dynamic(() => import("@/components/section/footer").then(mod => mod.Footer), { ssr: false });
import { EditorialBreather } from "@/components/section/breather/EditorialBreather";
import { GlobalAtmosphere } from "@/components/atmosphere/GlobalAtmosphere";

export default function Home() {
  return (
    // No GlobalAtmosphere bg needed for new design — each section has its own bg
    // But keep GlobalAtmosphere for subtle warmth on Hero & About (canvas sections)
    <div className="flex flex-col min-h-screen">
      <GlobalAtmosphere />
      <Hero />
      <About />
      <Timeline />
      <Portfolio />
      <EditorialBreather />
      <Impact />
      <Footer />
    </div>
  );
}
