/**
 * Type definitions for the About section (Chapter Two).
 *
 * All copy and imagery are data-driven per 03_ABOUT_TECHNICAL_SYSTEM.md
 * ("Never hardcode text" / "Never hardcode images"). Components only render
 * these shapes; content updates should never require a component change.
 */
//components/sections/about/types/about.ts
export interface AboutQuote {
  /** Maximum two lines per 05_ABOUT_CONTENT_SYSTEM.md */
  text: string;
  /** e.g. "Founder", "Community Partner", "Government Partner" */
  source: string;
  /** Optional location or affiliation shown under the source */
  affiliation?: string;
}

export interface AboutContentData {
  /** Very short, e.g. "WHY WE EXIST" */
  label: string;
  /** Maximum three lines, emotion first */
  headline: string;
  /** Maximum three short paragraphs, one idea per paragraph */
  story: [string, string, string];
  quote: AboutQuote;
  cta: {
    label: string;
    href: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Relative width/height used to preserve aspect ratio and avoid CLS */
  width: number;
  height: number;
  /** Marks the single dominant "Primary Image" described in the visual system */
  isPrimary?: boolean;
}

export interface AboutGalleryData {
  primary: GalleryImage;
  supporting: GalleryImage[];
}
