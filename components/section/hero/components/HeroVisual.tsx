// src/sections/hero/components/HeroVisual.tsx

import { heroEvidence } from '../data/heroEvidence';
import { BrowserMockup } from './BrowserMockup';
import { DocumentationCollage } from './DocumentationCollage';
import { FloatingEvidence } from './FloatingEvidence';

export function HeroVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0 z-10">
            <div className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center justify-center">

                <DocumentationCollage />

                <BrowserMockup
                    imageSrc="/images/hero/hero-dashboard.jpg"
                    alt="UTBEX Digital Ecosystem Dashboard"
                />

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    {heroEvidence.map((evidence, index) => (
                        <FloatingEvidence
                            key={evidence.id}
                            data={evidence}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}