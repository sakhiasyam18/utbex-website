// src/sections/impact/components/ImpactHeader.tsx

"use client";

import { motion } from 'framer-motion';
import { impactContent } from '../data/impactContent';
import { fadeInUp } from '../motion/impactMotion';

export function ImpactHeader() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-utbex-dark leading-[1.15] tracking-tight text-balance"
            >
                {impactContent.headline}
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                className="text-lg text-utbex-text-secondary leading-relaxed text-balance lg:pb-2"
            >
                {impactContent.story}
            </motion.p>
        </motion.div>
    );
}