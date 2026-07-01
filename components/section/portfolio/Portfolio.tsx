// src/sections/portfolio/Portfolio.tsx

import { PortfolioHeader } from './components/PortfolioHeader';
import { FeaturedCase } from './components/FeaturedCase';
import { PortfolioGrid } from './components/PortfolioGrid';
import { PortfolioCTA } from './components/PortfolioCTA';

export default function Portfolio() {
    return (
        <section
            className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FAFAFA] selection:bg-utbex-maroon/20 selection:text-utbex-maroon"
            aria-label="UTBEX Case Studies and Projects"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
                <PortfolioHeader />
                <FeaturedCase />
                <PortfolioGrid />
                <PortfolioCTA />
            </div>
        </section>
    );
}