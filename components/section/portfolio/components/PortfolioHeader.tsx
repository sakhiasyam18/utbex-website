// src/sections/portfolio/components/PortfolioHeader.tsx

"use client";

import { motion } from 'framer-motion';
import { portfolioContent } from '../data/portfolioContent';
import { staggerContainer, fadeInUp } from '../motion/portfolioMotion';

export function PortfolioHeader() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-24"
        >
            <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase">
                    {portfolioContent.header.badge}
                </span>
            </motion.div>

            <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-utbex-dark leading-[1.1] tracking-tight mb-6 text-balance"
            >
                {portfolioContent.header.headline}
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-neutral-500 leading-relaxed text-balance"
            >
                {portfolioContent.header.description}
            </motion.p>
        </motion.div>
    );
}