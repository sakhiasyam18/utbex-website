"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { JOURNEY_DATA } from "../../data/page-2";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Sebuah <GradientText>Perjalanan</GradientText>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl font-light">
          Berawal dari semangat sederhana, kini bertransformasi menjadi sebuah wadah kolaborasi inovasi lintas sektor.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full max-w-3xl mx-auto py-12">
        {/* Timeline Line */}
        <div className="absolute left-[24px] sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        <motion.div 
          className="absolute left-[24px] sm:left-1/2 top-0 w-[2px] bg-gradient-to-b from-p2-primary to-p2-orange -translate-x-1/2 shadow-[0_0_15px_rgba(255,51,51,0.5)]" 
          style={{ height: lineHeight }}
        />

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-24">
          {JOURNEY_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16 w-full ${isEven ? 'sm:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Year Label */}
                <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-start' : 'sm:justify-end'} pl-16 sm:pl-0`}>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 select-none">
                    {item.year}
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[24px] sm:left-1/2 w-4 h-4 rounded-full bg-black border-[3px] border-p2-primary -translate-x-1/2 shadow-[0_0_20px_rgba(255,51,51,0.6)]" />

                {/* Content */}
                <div className={`w-full sm:w-1/2 flex flex-col ${isEven ? 'sm:items-end sm:text-right' : 'sm:items-start sm:text-left'} pl-16 sm:pl-0`}>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
