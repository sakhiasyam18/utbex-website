// src/sections/impact/components/ImpactVisual.tsx

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { impactContent } from '../data/impactContent';
import { scaleReveal, fadeInUp } from '../motion/impactMotion';

export function ImpactVisual() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col gap-8"
        >
            <motion.div
                variants={scaleReveal}
                className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-utbex-light transform-gpu shadow-2xl shadow-utbex-dark/5 ring-1 ring-black/5"
            >
                <Image
                    src={impactContent.image.src}
                    alt={impactContent.image.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    /* DS 07: Images remain stable. Very small hover is acceptable. */
                    className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center max-w-3xl mx-auto px-4"
            >
                {/* DS 03: Blockquote — editorial quote, human, warm. Bug fix: was rendering literal string. */}
                <blockquote className="text-xl md:text-2xl font-medium text-utbex-dark leading-snug mb-4">
                    &ldquo;{impactContent.quote.text}&rdquo;
                </blockquote>
                <cite className="text-sm font-semibold text-utbex-text-secondary/70 not-italic uppercase tracking-wider">
                    — {impactContent.quote.author}
                </cite>
            </motion.div>
        </motion.div>
    );
}