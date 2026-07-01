// src/sections/portfolio/components/PortfolioGrid.tsx

"use client";

import { motion } from 'framer-motion';
import { portfolioContent } from '../data/portfolioContent';
import { staggerContainer } from '../motion/portfolioMotion';
import { CaseStudyCard } from './CaseStudyCard';

export function PortfolioGrid() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20"
        >
            {portfolioContent.gridProjects.map((project) => (
                <CaseStudyCard key={project.id} project={project} />
            ))}
        </motion.div>
    );
}