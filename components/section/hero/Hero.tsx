// src/sections/hero/Hero.tsx

import { HeroContent } from './components/HeroContent';
import { HeroVisual } from './components/HeroVisual';

export default function Hero() {
    return (
        <section
            id="hero"
            // bg-white removed — global atmosphere provides the warm canvas (GlobalAtmosphere)
            // Hero BackgroundEffects layered on top for section-specific warmth
            className="relative min-h-[90vh] w-full flex items-center overflow-hidden"
            aria-label="Introduction to UTBEX Indonesia"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-0 lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                    <HeroContent />
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}