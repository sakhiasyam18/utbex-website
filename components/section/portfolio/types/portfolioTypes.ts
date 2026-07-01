// src/sections/portfolio/types/portfolio.ts

export interface PortfolioHeaderData {
    badge: string;
    headline: string;
    description: string;
}

export interface ProjectStats {
    label: string;
    value: string;
}

export interface CaseStudyData {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    shortDescription: string;
    result?: string;
    imageUrl: string;
    imageAlt: string;
    href: string;
    stats?: ProjectStats[];
}

export interface PortfolioContentData {
    header: PortfolioHeaderData;
    featuredProject: CaseStudyData;
    gridProjects: CaseStudyData[];
    ctaText: string;
    ctaHref: string;
}