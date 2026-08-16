"use client";
/**
 * components/section/impact/Impact.tsx
 * ----------------------------------------------------------------------
 * Komponen utama (Wrapper) untuk seksi "Dampak & Kolaborasi" (Open Kerjasama).
 * 
 * Pola Arsitektur (Component Composition):
 * Berbeda dengan desain monolitik, seksi ini dipecah (refactored) menjadi 
 * beberapa sub-komponen kecil (ImpactBackground, ImpactHeader, ImpactPartners, dll) 
 * agar kode lebih deklaratif, mudah dirawat (maintainable), dan rapi.
 */
import { ImpactBackground } from "./components/ImpactBackground";
import { ImpactHeader } from "./components/ImpactHeader";
import { ImpactPartners } from "./components/ImpactPartners";
import { ImpactCollaborations } from "./components/ImpactCollaborations";
import { ImpactStory } from "./components/ImpactStory";
import { ImpactPhotos } from "./components/ImpactPhotos";

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative w-full text-utbex-dark overflow-hidden py-10 lg:py-36"
      aria-label="UTBEX Indonesia Impact and Statistics"
    >
      {/* 1. Ambient Background */}
      <ImpactBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* 2. Section Header */}
        <ImpactHeader />

        {/* 3. Partners Grid */}
        <ImpactPartners />

        {/* 4. Collaboration Offerings */}
        <ImpactCollaborations />

        {/* 5. Split Section: Story/Testimonial & Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <ImpactStory />
          <ImpactPhotos />
        </div>
      </div>
    </section>
  );
}
