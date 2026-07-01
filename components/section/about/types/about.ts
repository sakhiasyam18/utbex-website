// src/sections/about/types/about.ts
// Defines types to ensure strong typing and CMS readiness[cite: 4].

export interface QuoteData {
  text: string;
  source: string;
}

export interface AboutContentData {
  label: string;
  headline: string;
  story: string[];
  quote: QuoteData;
  ctaText: string;
}

export interface AboutGalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  isPrimary?: boolean;
}