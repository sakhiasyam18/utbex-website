// src/sections/hero/components/BrowserMockup.tsx

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { browserReveal } from '../motion/heroMotion';
import { cx } from '../utils/heroHelpers';

interface BrowserMockupProps {
    imageSrc: string;
    alt: string;
    className?: string;
}

export function BrowserMockup({ imageSrc, alt, className }: BrowserMockupProps) {
    return (
        <motion.div
            variants={browserReveal}
            initial="hidden"
            animate="visible"
            className={cx(
                "relative w-full rounded-2xl overflow-hidden bg-white/60 backdrop-blur-2xl transform-gpu",
                "border border-white/60 shadow-2xl shadow-neutral-900/5 ring-1 ring-black/5",
                "z-20",
                className
            )}
        >
            <div className="flex items-center px-4 py-3 bg-white/40 border-b border-neutral-200/40 backdrop-blur-md">
                <div className="flex space-x-2" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="mx-auto flex-1 flex justify-center">
                    <div className="bg-white/50 border border-neutral-200/50 text-neutral-400 text-xs font-medium px-4 py-1.5 rounded-md w-1/2 text-center max-w-[240px] truncate shadow-sm">
                        utbex.id
                    </div>
                </div>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
            </div>
        </motion.div>
    );
}