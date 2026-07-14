// src/sections/hero/components/HeroContent.tsx

"use client";

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroContent } from '../data/heroContent';
import { cx } from '../utils/heroHelpers';
import { staggerContainer, fadeInUp } from '../motion/heroMotion';

export function HeroContent() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center max-w-2xl z-10 relative"
        >
            <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-utbex-maroon/10 text-utbex-maroon text-sm font-semibold tracking-wide border border-utbex-maroon/20">
                    {heroContent.badge}
                </span>
            </motion.div>

            {/* DS 03: Bold — never ExtraBold. DS 02: no strong linear gradients — solid maroon accent only. */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-utbex-dark leading-[1.15] tracking-tight mb-6">
                {heroContent.headlineStart}{' '}
                <span className="text-utbex-maroon">
                    {heroContent.headlineHighlight}
                </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-utbex-text-secondary leading-relaxed mb-10 max-w-[600px]">
                {heroContent.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {heroContent.buttons.map((button) => (
                    <Link
                        key={button.id}
                        href={button.href}
                        className={cx(
                            "group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon focus-visible:ring-offset-2",
                            button.variant === 'primary'
                                /* DS 06: Large blur, low opacity shadow. 0.12 reads as natural elevation. */
                                ? "bg-utbex-maroon hover:bg-[#6A0000] text-white shadow-[0_8px_32px_rgba(139,0,0,0.12)]"
                                : "bg-transparent border-2 border-utbex-dark/10 hover:border-utbex-dark/20 text-utbex-dark"
                        )}
                        aria-label={button.label}
                    >
                        {button.icon === 'play' && (
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-utbex-dark/10">
                                <Play className="w-3 h-3 text-utbex-dark fill-utbex-dark" aria-hidden="true" />
                            </span>
                        )}

                        <span>{button.label}</span>

                        {button.icon === 'arrow-right' && (
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        )}
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
}