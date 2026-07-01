// src/sections/about/components/AboutVisual.tsx

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/aboutContent';
import { imageReveal } from '../motion/aboutMotion';
import { cx } from '../utils/aboutHelpers';

export function AboutVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-10">
            <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={cx(
                    "relative w-full max-w-lg lg:max-w-none aspect-[4/5] sm:aspect-[3/4] lg:aspect-square",
                    "rounded-2xl overflow-hidden bg-neutral-100 transform-gpu",
                    "shadow-2xl shadow-neutral-900/5 ring-1 ring-black/5"
                )}
            >
                <Image
                    src={aboutContent.image.src}
                    alt={aboutContent.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
                />
                {/* Soft elegant overlay to maintain typography contrast if needed, and premium feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-utbex-maroon/5 to-transparent pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
            </motion.div>
        </div>
    );
}