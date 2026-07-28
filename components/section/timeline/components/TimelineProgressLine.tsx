// components/section/timeline/components/TimelineProgressLine.tsx
"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineProgressLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={containerRef}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px z-0"
            aria-hidden="true"
        >
            {/* Background track */}
            <div className="absolute inset-0 bg-black/[0.06]" />

            {/* Filled progress */}
            <motion.div
                className="absolute top-0 left-0 right-0 bg-utbex-maroon origin-top"
                style={{ height }}
            />

            {/* Glow at the tip */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-utbex-maroon/30 blur-sm"
                style={{ top: height }}
            />
        </div>
    );
}
