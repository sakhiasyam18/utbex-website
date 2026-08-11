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
      {/* ── Ambient Gradient Orbs ── */}
      <div className="about-orb about-orb-animate w-[500px] h-[500px] bg-utbex-maroon/[0.035] top-[5%] -left-[10%]" />
      <div className="about-orb about-orb-animate w-[400px] h-[400px] bg-rose-200/[0.18] top-[30%] right-[-8%]" style={{ animationDelay: "-7s" }} />
      <div className="about-orb about-orb-animate w-[350px] h-[350px] bg-orange-100/[0.15] bottom-[15%] left-[20%]" style={{ animationDelay: "-13s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">
        <AboutHeader />
        <AboutVisionMission />
        <AboutLongTermVision />
        <AboutQuote />
      </div>
    </section>
  );
}
