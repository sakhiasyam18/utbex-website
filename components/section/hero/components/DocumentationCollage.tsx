// src/sections/hero/components/DocumentationCollage.tsx

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../motion/heroMotion';
import { cx } from '../utils/heroHelpers';

interface CollageImage {
    id: string;
    src: string;
    alt: string;
    className: string;
}

const collageData: CollageImage[] = [
    {
        id: "doc-1",
        src: "/images/IMG-20260620-WA0011.jpg",
        alt: "UTBEX Community Workshop Session",
        className: "w-48 aspect-square -top-8 -right-10 rotate-[4deg] z-10",
    },
    {
        id: "doc-2",
        src: "/images/IMG-20260620-WA0012.jpg",
        alt: "Government Collaboration Mentoring",
        className: "w-56 aspect-[4/3] -bottom-10 -left-8 -rotate-[3deg] z-10",
    },
];

export function DocumentationCollage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
        >
            {collageData.map((doc) => (
                <motion.div
                    key={doc.id}
                    variants={fadeInUp}
                    className={cx(
                        "absolute rounded-2xl overflow-hidden bg-white p-2 shadow-xl shadow-neutral-900/5 border border-white/80 ring-1 ring-black/5 transform-gpu transition-transform duration-500 hover:rotate-0 hover:scale-105",
                        doc.className
                    )}
                >
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
                        <Image
                            src={doc.src}
                            alt={doc.alt}
                            fill
                            sizes="(max-width: 768px) 0px, 224px"
                            className="object-cover"
                            priority={false}
                        />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}