// src/sections/about/About.tsx
// Entry point only. No hardcoded content. No business logic[cite: 4].

import { AboutContent } from './components/AboutContent';
import { AboutVisual } from './components/AboutVisual';
import { BackgroundEffects } from './components/BackgroundEffects';
import { aboutContent } from './data/aboutContent';
import { aboutGallery } from './data/aboutGallery';

export const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
            aria-label="Tentang UTBEX"
        >
            <BackgroundEffects />

            <div className="max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    <div className="lg:col-span-5 order-1 lg:order-1">
                        <AboutVisual images={aboutGallery} />
                    </div>

                    <div className="lg:col-span-7 order-2 lg:order-2">
                        <AboutContent data={aboutContent} />
                    </div>
                </div>
            </div>
        </section>
    );
};