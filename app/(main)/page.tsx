//app/(main)/page.tsx
import Hero from "@/components/section/hero/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/section/about/About"));
const Timeline = dynamic(() => import("@/components/section/timeline/Timeline"));
const Portfolio = dynamic(() => import("@/components/section/portfolio/Portfolio"));
const Impact = dynamic(() => import("@/components/section/impact/Impact"));
const Keunggulan = dynamic(() => import("@/components/section/keunggulan/Keunggulan"));
const CTA = dynamic(() => import("@/components/section/cta/CTA"));
const Footer = dynamic(() => import("@/components/section/footer/Footer").then(mod => mod.Footer));
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
      <Keunggulan />
      <Timeline />
      <Portfolio />
      <EditorialBreather />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
