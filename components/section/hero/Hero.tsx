"use client"; // <--- Tambahkan baris ini di paling atas

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { BrowserMockup } from './BrowserMockup';
import { FloatingBadge } from './FloatingBadge';
import { Award, Megaphone, Lightbulb, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden bg-[#FAFAFA]">
            <HeroBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center">
                        <HeroContent />
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative w-full h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative w-full max-w-lg lg:max-w-none">

                            <BrowserMockup
                                imageSrc="/images/hero/hero-dashboard.jpg"
                                alt="UTBEX Digital Ecosystem Dashboard"
                            />

                            <FloatingBadge
                                icon={Award}
                                title="Premium Quality"
                                subtitle="Inovasi & Kriya"
                                position="top-[-20px] left-[-30px] md:top-[-30px] md:left-[-40px]"
                                delay={0.2}
                            />

                            <FloatingBadge
                                icon={Megaphone}
                                title="Branding & Digital"
                                subtitle="Eskalasi UMKM"
                                position="bottom-[40px] left-[-40px] md:bottom-[60px] md:left-[-50px]"
                                delay={0.4}
                            />

                            <FloatingBadge
                                icon={Lightbulb}
                                title="SCoVil Education"
                                subtitle="Pemberdayaan Desa"
                                position="top-[40px] right-[-20px] md:top-[60px] md:right-[-40px]"
                                delay={0.6}
                            />

                            <FloatingBadge
                                icon={TrendingUp}
                                title="Social Enterprise"
                                subtitle="Dampak Nasional"
                                position="bottom-[-20px] right-[20px] md:bottom-[-30px] md:right-[30px]"
                                delay={0.8}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}