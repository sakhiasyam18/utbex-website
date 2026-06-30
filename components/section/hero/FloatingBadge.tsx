// src/components/sections/hero/FloatingBadge.tsx
"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingBadgeProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    position: string;
    delay: number;
}

export function FloatingBadge({ icon: Icon, title, subtitle, position, delay }: FloatingBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay, ease: [0.25, 0.4, 0.2, 1] }}
            className={`absolute z-20 ${position} hidden sm:flex`}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 group hover:shadow-[0_8px_30px_rgb(139,0,0,0.1)] transition-all cursor-default"
            >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B0000]/10 to-[#8B0000]/5 text-[#8B0000] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#171717]">{title}</span>
                    <span className="text-xs font-medium text-[#737373]">{subtitle}</span>
                </div>
            </motion.div>
        </motion.div>
    );
}