"use client";

import { motion } from "framer-motion";
import { HERO_DATA } from "../../data/page-2";
import { GradientText } from "../ui/GradientText";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      {/* Background Parallax Image or Video placeholder */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-p2-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">UTBEX Indonesia</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO_DATA.title.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {word === "Impact" ? <GradientText>{word}</GradientText> : word}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-2xl text-white/70 max-w-3xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO_DATA.subtitle}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            {HERO_DATA.ctaPrimary}
          </button>
          <button className="px-8 py-4 rounded-full glass-card text-white font-semibold text-lg hover:bg-white/10 transition-colors duration-300 border border-white/20">
            {HERO_DATA.ctaSecondary}
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
