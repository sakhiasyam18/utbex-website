// components/navigation/motion/navigationHover.ts

import { Variants } from "framer-motion";

export const linkHoverVariants: Variants = {
    idle: {
        y: 0,
        opacity: 0.8,
    },
    hover: {
        y: -1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

export const ctaHoverVariants: Variants = {
    idle: {
        y: 0,
        scale: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    },
    hover: {
        y: -2,
        scale: 1.02,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};
