// src/sections/portfolio/data/portfolioContent.ts

import { PortfolioContentData } from '../types/portfolioTypes';

export const portfolioContent: PortfolioContentData = {
    header: {
        badge: "CASE STUDIES",
        headline: "Real Projects. Real People. Real Transformation.",
        description: "Every collaboration begins with listening. Every project ends with measurable impact for communities, entrepreneurs, and local ecosystems."
    },
    featuredProject: {
        id: "case-featured-01",
        title: "Empowering Local Coffee Farmers Through Visual Identity",
        category: "Community Branding",
        location: "Temanggung, Central Java",
        year: "2024",
        shortDescription: "A comprehensive rebranding initiative to elevate the market presence of rural coffee farmers. By restructuring their brand architecture and packaging, we helped them bypass middlemen and enter premium retail markets.",
        result: "300% increase in direct-to-consumer sales within the first six months of rebranding.",
        imageUrl: "/images/portfolio/featured-coffee.jpg",
        imageAlt: "Mentoring session with local coffee farmers reviewing new packaging designs",
        href: "/portfolio/temanggung-coffee",
        stats: [
            { label: "Farmers Empowered", value: "45+" },
            { label: "Revenue Increase", value: "300%" }
        ]
    },
    gridProjects: [
        {
            id: "case-grid-01",
            title: "Digital Transformation for Traditional Artisans",
            category: "Village Innovation",
            location: "Bantul, Yogyakarta",
            year: "2023",
            shortDescription: "Integrating e-commerce solutions and digital literacy training for traditional batik makers, opening access to international buyers.",
            imageUrl: "/images/portfolio/grid-artisan.jpg",
            imageAlt: "Artisans learning digital cataloging on tablets",
            href: "/portfolio/bantul-artisans"
        },
        {
            id: "case-grid-02",
            title: "Youth Entrepreneurship Bootcamp",
            category: "Training & Education",
            location: "Madiun, East Java",
            year: "2024",
            shortDescription: "An intensive 3-month incubator program designed to equip rural youth with modern business frameworks and pitching skills.",
            imageUrl: "/images/portfolio/grid-youth.jpg",
            imageAlt: "Students presenting business models to a panel",
            href: "/portfolio/madiun-youth"
        },
        {
            id: "case-grid-03",
            title: "Sustainable Waste Management Enterprise",
            category: "Social Enterprise",
            location: "Malang, East Java",
            year: "2023",
            shortDescription: "Structuring a community-led social enterprise that turns village waste into commercially viable recycled products.",
            imageUrl: "/images/portfolio/grid-waste.jpg",
            imageAlt: "Community members sorting recyclable materials",
            href: "/portfolio/malang-waste"
        }
    ],
    ctaText: "View More Projects",
    ctaHref: "/portfolio"
};