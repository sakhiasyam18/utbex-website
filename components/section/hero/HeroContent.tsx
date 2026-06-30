// src/components/sections/hero/HeroContent.tsx
// Force TS re-evaluation
"use client";

import { motion } from 'framer-motion';
import { HeroButtons } from './HeroButtons';

export function HeroContent() {
    return (
        <div className="max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.2, 1] }}
            >
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-sm font-semibold tracking-wide mb-6 border border-[#8B0000]/20">
                    PT. UTBEX INOVASI INDONESIA
                </span>
            </motion.div>

            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] leading-[1.15] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.2, 1] }}
            >
                From Ideas To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#C62828]">Impact</span>
            </motion.h1>

            <motion.p
                className="text-lg sm:text-xl text-[#525252] leading-relaxed mb-10 max-w-[600px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.2, 1] }}
            >
                Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise. Kami menghadirkan inovasi digital, edukasi, dan strategi branding berkelas global untuk memberdayakan UMKM dan pemuda desa.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.2, 1] }}
            >
                <HeroButtons />
            </motion.div>
        </div>
    );
}