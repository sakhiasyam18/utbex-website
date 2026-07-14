"use client";

import { WHAT_WE_DO_DATA } from "../../data/page-2";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { ArrowUpRight } from "lucide-react";

export function WhatWeDoSection() {
  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Sticky Left Sidebar */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="sticky top-32">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Apa yang <br />
              <GradientText>Kami Lakukan?</GradientText>
            </h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-sm">
              Kami tidak hanya menyediakan layanan, tapi membangun ekosistem pendampingan yang berfokus pada hasil dan dampak nyata.
            </p>
          </div>
        </div>

        {/* Scrollable Right Content */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHAT_WE_DO_DATA.map((item, index) => (
            <GlassCard 
              key={index}
              dark 
              hoverEffect 
              className="p-8 group flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
