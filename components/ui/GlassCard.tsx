"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, dark = false, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-[32px] overflow-hidden",
        dark ? "glass-card-dark" : "glass-card",
        hoverEffect && "hover:shadow-[0_16px_64px_rgba(255,51,51,0.1)] transition-shadow duration-500",
        className
      )}
      whileHover={hoverEffect ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {/* Glossy top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      {/* Glossy left edge highlight */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
