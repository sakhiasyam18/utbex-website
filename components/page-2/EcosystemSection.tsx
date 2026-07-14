"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_DATA } from "../../data/page-2";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";

export function EcosystemSection() {
  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ekosistem <GradientText>Inovasi</GradientText>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Membangun jaringan yang saling terhubung. Sebuah ekosistem dimana setiap produk dan inisiatif saling menguatkan.
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className="relative w-full aspect-square md:aspect-video max-w-4xl flex items-center justify-center">
          
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-p2-primary/20 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full relative z-10">
            {ECOSYSTEM_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center ${index === 1 ? 'md:-translate-y-12' : ''}`}
              >
                <GlassCard 
                  dark 
                  hoverEffect 
                  className="w-full p-8 flex flex-col items-center text-center border-t-p2-primary/30"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-6 flex items-center justify-center border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    <span className="font-black text-xl text-white opacity-80">{item.id.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-white/50 uppercase tracking-widest">{item.role}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          {/* Connecting Lines for Desktop */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0 opacity-20">
            <motion.path 
              d="M 25% 50% Q 50% 20% 75% 50%" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF3333" />
                <stop offset="100%" stopColor="#FF6600" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </AnimatedSection>
  );
}
