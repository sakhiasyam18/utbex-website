// src/sections/about/components/AboutContent.tsx

"use client";

import { motion } from 'framer-motion';
import { aboutContent } from '../data/aboutContent';
import { staggerContainer, fadeInUp } from '../motion/aboutMotion';
import { cx } from '../utils/aboutHelpers';

export function AboutContent() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center max-w-2xl"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-utbex-dark leading-[1.15] tracking-tight mb-10 text-balance"
            >
                {aboutContent.headline}
            </motion.h2>

            <div className="space-y-6">
                {aboutContent.story.map((paragraph) => (
                    <motion.p
                        key={paragraph.id}
                        variants={fadeInUp}
                        className="text-lg text-neutral-500 leading-relaxed text-balance"
                    >
                        {paragraph.text}
                    </motion.p>
                ))}
            </div>

            <motion.div
                variants={fadeInUp}
                className="mt-12 pl-6 border-l-2 border-utbex-maroon/20"
            >
                <blockquote className="text-xl md:text-2xl font-medium text-utbex-dark leading-snug mb-4">
                    "{aboutContent.quote.text}"
                </blockquote>
                <cite className="text-sm font-semibold text-neutral-400 not-italic uppercase tracking-wider">
                    — {aboutContent.quote.author}
                </cite>
            </motion.div>
        </motion.div>
    );
}