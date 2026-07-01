//app/page.tsx
import Hero from "../components/section/hero/Hero";
import { About } from "../components/section/about";
import { Portfolio } from "../components/section/portfolio";
import { Footer } from "../components/section/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}