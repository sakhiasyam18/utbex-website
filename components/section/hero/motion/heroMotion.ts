// src/sections/hero/motion/heroMotion.ts

export const EASE_STANDARD: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.32, 0.72, 0, 1];
export const DURATION_BASE = 0.8;
export const STAGGER_DELAY = 0.1;

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER_DELAY,
            delayChildren: 0.1,
        },
    },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION_BASE,
            ease: EASE_STANDARD,
        },
    },
};

export const browserReveal = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: EASE_STANDARD,
            delay: 0.2,
        },
    },
};

export const floatAnimation = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: DURATION_BASE,
            ease: EASE_STANDARD,
            delay,
        },
    },
    floating: {
        y: [0, -6, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: delay * 0.5,
        },
    },
});