"use client";
import { AboutHeader } from "./components/AboutHeader";
import { AboutVisionMission } from "./components/AboutVisionMission";
import { AboutLongTermVision } from "./components/AboutLongTermVision";
import { AboutQuote } from "./components/AboutQuote";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative w-full overflow-hidden"
    >
      {/* ── Ambient Gradient Orbs — 2 orbs max for performance ── */}
      <div className="about-orb about-orb-animate w-[450px] h-[450px] bg-utbex-maroon/[0.03] top-[5%] -left-[10%]" />
      <div className="about-orb about-orb-animate w-[350px] h-[350px] bg-rose-200/[0.15] bottom-[10%] right-[-5%]" style={{ animationDelay: "-8s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 py-14 lg:py-32">
        <h2 id="about-headline" className="sr-only">Tentang UTBEX</h2>
        <AboutHeader />
        <AboutVisionMission />
        <AboutLongTermVision />
        <AboutQuote />
      </div>
    </section>
  );
}
