// components/section/timeline/motion/timelineMotion.ts

import { Variants } from "framer-motion";

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** Header reveal — slow fade with upward translate. */
export const headerReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easeSoft },
    },
};

/** Entry reveal — stagger children with left-offset fade. */
export const entryReveal: Variants = {
    hidden: { opacity: 0, x: -16, y: 12 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.7, ease: easeSoft },
    },
};

/** Image reveal with spring pop-up. */
export const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 60 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { 
            type: "spring", 
            stiffness: 150, 
            damping: 18, 
            mass: 1 
        },
    },
};

/** Stagger container for timeline entries. */
export const timelineStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};
