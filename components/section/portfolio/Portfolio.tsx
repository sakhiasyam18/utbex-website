// components/section/portfolio/Portfolio.tsx
import PortfolioHeader from "./components/PortfolioHeader";
import FeaturedStory from "./components/FeaturedStory";
import ProjectMosaic from "./components/ProjectMosaic";
import PartnerEcosystem from "./components/PartnerEcosystem";
import PortfolioCTA from "./components/PortfolioCTA";

import { portfolioContent } from "./data/portfolioContent";
import { portfolioProjects } from "./data/portfolioProjects";
import { portfolioPartners } from "./data/portfolioPartners";
import { getFeaturedProject } from "./utils/portfolioHelpers";

/**
 * Chapter Three: Portfolio
 * 
 * Orchestrator component. No business logic. No hardcoded content.
 * All layers are composed strictly according to the documentary layout system.
 */
export default function Portfolio() {
  // Extract the main featured project
  const featured = getFeaturedProject(portfolioProjects);
  
  // The remaining projects form the selected stories and transformation mosaic
  const mosaicProjects = portfolioProjects.filter(p => p.id !== featured?.id);

  return (
    // bg-utbex-light removed — global atmosphere connects Portfolio seamlessly to About and Impact
    <section
      id="portfolio"
      aria-label="Portfolio and Transformation Evidence"
      className="relative overflow-hidden w-full py-20 sm:py-24"
    >
      
      <div className="relative z-10 w-full">
        <PortfolioHeader content={portfolioContent} />
        
        {/* Chapter 02: Featured Story */}
        <FeaturedStory project={featured} />
        
        {/* Chapter 03 & 04: Project Mosaic */}
        <ProjectMosaic projects={mosaicProjects} />
        
        {/* Chapter 05: Partner Ecosystem */}
        <PartnerEcosystem partners={portfolioPartners} />
        
        {/* Chapter 06: Continue Story CTA */}
        {/* <PortfolioCTA content={portfolioContent} /> */}
      </div>
    </section>
  );
}
