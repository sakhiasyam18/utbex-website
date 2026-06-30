// src/components/sections/hero/BrowserMockup.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BrowserMockupProps {
  imageSrc: string;
  alt: string;
}

export function BrowserMockup({ imageSrc, alt }: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.2, 1] }}
      className="relative z-10 w-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5"
    >
      {/* Browser Chrome / Header */}
      <div className="flex items-center px-4 py-3 bg-white/50 border-b border-gray-100/50 backdrop-blur-md">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm"></div>
        </div>
        <div className="mx-auto flex-1 flex justify-center">
          <div className="bg-gray-100/80 text-gray-400 text-xs font-medium px-4 py-1.5 rounded-md w-1/2 text-center max-w-[200px] truncate">
            utbex.id
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-gray-50 overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Soft overlay gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
}