//app/(main)/page.tsx
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Portfolio from "@/components/section/portfolio/Portfolio";
import Impact from "@/components/section/impact/Impact";
import { Footer } from "@/components/section/footer";
import { GlobalAtmosphere } from "@/components/atmosphere/GlobalAtmosphere";

export default function Home() {
  return (
    // No GlobalAtmosphere bg needed for new design — each section has its own bg
    // But keep GlobalAtmosphere for subtle warmth on Hero & About (canvas sections)
    <div className="flex flex-col min-h-screen">
      <GlobalAtmosphere />
      <Hero />
      <About />
      <Portfolio />
      <Impact />
      <Footer />
    </div>
  );
}
