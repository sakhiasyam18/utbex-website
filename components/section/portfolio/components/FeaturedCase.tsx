// src/sections/portfolio/components/FeaturedCase.tsx

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioContent } from '../data/portfolioContent';
import { fadeInUp } from '../motion/portfolioMotion';

export function FeaturedCase() {
    const project = portfolioContent.featuredProject;

    return (
        <motion.article
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 flex flex-col lg:grid lg:grid-cols-12 mb-16 lg:mb-24"
        >
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden bg-neutral-100">
                <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transform-gpu transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-utbex-maroon">
                        {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300" aria-hidden="true"></span>
                    <span className="text-xs font-semibold text-neutral-400">
                        {project.location}
                    </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-utbex-dark leading-tight mb-6 text-balance">
                    {project.title}
                </h3>

                <p className="text-neutral-500 leading-relaxed mb-8">
                    {project.shortDescription}
                </p>

                {project.result && (
                    <div className="mb-10 p-5 bg-neutral-50 rounded-xl border border-neutral-100">
                        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                            The Impact
                        </span>
                        <p className="text-sm md:text-base font-medium text-utbex-dark leading-snug">
                            {project.result}
                        </p>
                    </div>
                )}

                <div className="mt-auto pt-6">
                    <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-utbex-dark hover:text-utbex-maroon transition-colors"
                    >
                        Read Story
                        <ArrowRight className="w-4 h-4 transform-gpu transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* Invisible link overlay for entire card clickability */}
            <Link href={project.href} className="absolute inset-0 z-10" aria-label={`Read case study: ${project.title}`}>
                <span className="sr-only">Read Story</span>
            </Link>
        </motion.article>
    );
}