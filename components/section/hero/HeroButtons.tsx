"use client";

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function HeroButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B0000] text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-[#C62828] hover:shadow-[0_8px_25px_-8px_rgba(139,0,0,0.5)] focus:ring-2 focus:ring-[#8B0000]/50 focus:outline-none w-full sm:w-auto">
                <span>Mulai Transformasi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#171717] font-semibold rounded-full border border-gray-200 transition-all hover:border-[#8B0000]/30 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none w-full sm:w-auto">
                <PlayCircle className="w-5 h-5 text-[#8B0000]" />
                <span>Pelajari Lebih Lanjut</span>
            </button>
        </div>
    );
}
