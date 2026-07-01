// components/section/portfolio/types/portfolio.ts

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  id: string;
  category: string; // e.g., "COMMUNITY", "MSME"
  title: string;
  story: string;
  location: string;
  year: string;
  partner?: string;
  evidence: string; // e.g., "120 MSMEs participated"
  isFeatured: boolean;
  primaryImage: PortfolioImage;
  secondaryImages?: PortfolioImage[];
}

export interface PortfolioContent {
  headline: string;
  introduction: string;
  ctaText: string;
  ctaHref: string;
  // REVISION 07: Editorial CTA expansion
  ctaLabel?: string;
  ctaHeadline?: string;
  ctaBody?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export interface PortfolioPartner {
  id: string;
  name: string;
}
