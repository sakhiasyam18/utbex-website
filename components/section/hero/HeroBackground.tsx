// src/components/sections/hero/HeroBackground.tsx
import { GlowEffect } from './GlowEffect';

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base subtle radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-[#FAFAFA] to-[#F5F5F5]"></div>

            {/* Decorative Grid Pattern (Very subtle) */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"
                aria-hidden="true"
            ></div>

            {/* Premium Glow Accents */}
            <GlowEffect className="top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8B0000]/10" />
            <GlowEffect className="bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#C62828]/5" />
            <GlowEffect className="top-[30%] left-[20%] w-[400px] h-[400px] bg-white/40" />

            {/* Mesh gradient overlay for elegant soft blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA] opacity-80"></div>
        </div>
    );
}