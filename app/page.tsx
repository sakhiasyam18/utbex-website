//app/page.tsx
import Hero from "../components/section/hero/Hero";
import { About } from "../components/section/about";
import { Impact } from "../components/section/impact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Impact />
    </div>
  );
}