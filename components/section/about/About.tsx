// src/sections/about/About.tsx

import { AboutContent } from './components/AboutContent';
import { AboutVisual } from './components/AboutVisual';

export default function About() {
    return (
        <section
            className="relative w-full py-24 lg:py-32 overflow-hidden bg-neutral-50/50 selection:bg-utbex-maroon/20 selection:text-utbex-maroon"
            aria-label="About UTBEX Indonesia"
        >
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-utbex-maroon/5 rounded-full blur-[120px] transform-gpu"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual on the left for asymmetrical balance against the Hero section */}
                    <div className="order-2 lg:order-1">
                        <AboutVisual />
                    </div>
                    <div className="order-1 lg:order-2">
                        <AboutContent />
                    </div>
                </div>
            </div>
        </section>
    );
}