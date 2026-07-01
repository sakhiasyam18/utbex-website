// src/sections/impact/Impact.tsx

import { ImpactHeader } from './components/ImpactHeader';
import { ImpactStats } from './components/ImpactStats';
import { ImpactVisual } from './components/ImpactVisual';

export default function Impact() {
    return (
        // bg-white removed — continuous global atmosphere creates "slight optimism" (DS 02) through here
        <section
            className="relative w-full py-24 lg:py-32 overflow-hidden"
            aria-label="UTBEX Indonesia Impact and Statistics"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
                <ImpactHeader />
                <ImpactStats />
                <ImpactVisual />
            </div>
        </section>
    );
}