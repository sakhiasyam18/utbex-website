//app/page.tsx
import Hero from "../components/section/hero/Hero";
import { About } from "../components/section/about";
import { Impact } from "../components/section/impact";
import { Portfolio } from "../components/section/portfolio";
import { Footer } from "../components/section/footer";
import { GlobalAtmosphere } from "../components/atmosphere/GlobalAtmosphere";

export default function Home() {
  return (
    // relative — establishes the positioning context for GlobalAtmosphere (absolute inset-0 -z-10)
    // All sections are transparent — the continuous atmosphere is always visible beneath them
    <div className="relative flex flex-col min-h-screen">
      <GlobalAtmosphere />
      <Hero />
      <About />
      <Portfolio />
      <Impact />
      <Footer />
    </div>
  );
}