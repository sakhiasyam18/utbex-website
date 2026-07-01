// src/sections/portfolio/components/PortfolioCTA.tsx

"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { portfolioContent } from '../data/portfolioContent';
import { fadeInUp } from '../motion/portfolioMotion';

export function PortfolioCTA() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="flex justify-center"
        >
            <Link
                href={portfolioContent.ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-white border border-neutral-200 text-utbex-dark shadow-sm hover:shadow-md hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-utbex-maroon"
            >
                {portfolioContent.ctaText}
            </Link>
        </motion.div>
    );
}