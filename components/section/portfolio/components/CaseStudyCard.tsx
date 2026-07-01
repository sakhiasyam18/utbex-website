// src/sections/portfolio/components/CaseStudyCard.tsx

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaseStudyData } from '../types/portfolioTypes';
import { fadeInUp } from '../motion/portfolioMotion';

interface CaseStudyCardProps {
    project: CaseStudyData;
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
    return (
        <motion.article
            variants={fadeInUp}
            className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500"
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform-gpu transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex flex-col flex-grow p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    {project.category}
                </span>

                <h3 className="text-xl font-bold text-utbex-dark leading-tight mb-4 group-hover:text-utbex-maroon transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
                    {project.shortDescription}
                </p>

                <span className="inline-flex items-center text-sm font-bold text-utbex-dark mt-auto relative">
                    Read Story
                    {/* Animated underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-utbex-maroon transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                </span>
            </div>

            <Link href={project.href} className="absolute inset-0 z-10" aria-label={`Read case study: ${project.title}`}>
                <span className="sr-only">Read Story</span>
            </Link>
        </motion.article>
    );
}