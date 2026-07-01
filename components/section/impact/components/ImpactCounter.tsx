// src/sections/impact/components/ImpactCounter.tsx

"use client";

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import { COUNTER_DURATION, EASE_STANDARD } from '../motion/impactMotion';
import { cx } from '../utils/impactHelpers';

interface ImpactCounterProps {
  value: number;
  suffix: string;
  className?: string;
}

export function ImpactCounter({ value, suffix, className }: ImpactCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: COUNTER_DURATION,
        ease: EASE_STANDARD,
        onUpdate: (latest) => {
          if (nodeRef.current) {
            // Highly performant DOM update bypassing React render cycle
            nodeRef.current.textContent = `${Math.floor(latest)}${suffix}`;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return (
    <span 
      ref={nodeRef} 
      className={cx("tabular-nums tracking-tight", className)}
      aria-label={`${value}${suffix}`}
    >
      0{suffix}
    </span>
  );
}