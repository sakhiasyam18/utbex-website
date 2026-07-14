"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IMPACT_STATS, AWARDS_DATA } from "../../data/page-2";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";

// Simple counter animation component
function AnimatedCounter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const end = numericValue;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing out cubic
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Bukti Nyata, <br className="sm:hidden" />
            <GradientText>Bukan Sekadar Kata</GradientText>
          </h2>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="text-lg text-white/60 font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Awards Preview */}
        <div className="mt-12">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-semibold">Penghargaan</h3>
            <button className="text-sm text-white/60 hover:text-white transition-colors">Lihat Semua →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS_DATA.map((award, index) => (
              <GlassCard key={index} dark hoverEffect className="p-8 flex items-center justify-between group">
                <div>
                  <div className="text-p2-primary font-mono text-sm mb-2">{award.year}</div>
                  <h4 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">{award.title}</h4>
                  <p className="text-white/50 text-sm mt-1">{award.issuer}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:border-white/30 transition-all">
                  🏅
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
