// types/chapter.ts
//
// Core type definitions for the UTBEX chapter-based architecture.
// These types enforce the Story Architecture System's narrative structure
// at the type level — every chapter must declare its emotional purpose.
//
// Source of truth:
//   - 00_STORY_ARCHITECTURE_OVERVIEW.md (seven chapters, emotional curve)
//   - 02_CHAPTER_PURPOSE.md (one question, one emotion per chapter)
//   - 06_IMPLEMENTATION_GUIDE.md (data schema, content independence)

// ─── Chapter Tempo ─────────────────────────────────────────────
// Derived from 01_STORY_FLOW.md §Reading Tempo.
// Each chapter has a distinct pacing that affects layout density and motion.
export type ChapterTempo =
  | 'fast'         // Ch. 01 – First Impression
  | 'slow'         // Ch. 02 – Belief
  | 'personal'     // Ch. 03 – Human
  | 'expanding'    // Ch. 04 – Movement
  | 'explorative'  // Ch. 05 – Stories
  | 'reflective'   // Ch. 06 – Impact
  | 'calm';        // Ch. 07 – Conversation

// ─── Chapter Identifiers ───────────────────────────────────────
// Strict union of chapter IDs. Prevents typos and enforces order.
export type ChapterId =
  | '01-first-impression'
  | '02-belief'
  | '03-human'
  | '04-movement'
  | '05-stories'
  | '06-impact'
  | '07-conversation';

// ─── Chapter Meta ──────────────────────────────────────────────
// Narrative metadata for a chapter. This is structural, not content.
export interface ChapterMeta {
  /** Unique identifier matching the folder name, e.g. "01-first-impression" */
  id: ChapterId;
  /** Numeric order (1–7). Immutable without strategic review. */
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Display title in Indonesian */
  title: string;
  /** URL-safe identifier for anchor links */
  slug: string;
  /** The one question this chapter answers (per 02_CHAPTER_PURPOSE.md) */
  emotionalQuestion: string;
  /** What visitors feel after completing this chapter */
  emotionalOutput: string;
  /** Reading tempo that influences layout density and motion pacing */
  tempo: ChapterTempo;
}

// ─── Chapter Media ─────────────────────────────────────────────
// Structured metadata for documentary photography.
// Source of truth: 04_VISUAL_NARRATIVE_SYSTEM.md §Engineering Notes
export type ImagePriority = 'hero' | 'high' | 'normal' | 'low';

export type AspectRatio = '16:9' | '4:3' | '21:9' | '1:1' | 'portrait' | 'panoramic';

export interface ChapterMedia {
  /** Path relative to /public/ */
  src: string;
  /** Meaningful, descriptive alt text — required, never empty */
  alt: string;
  /** Which chapter this image serves */
  chapter: ChapterId;
  /** What emotion this image supports */
  emotion: string;
  /** Loading priority — determines eager vs lazy loading */
  priority: ImagePriority;
  /** Year the photo was taken (supports chronological ordering) */
  year?: number;
  /** People visible in the photo */
  people?: string[];
  /** Brief narrative context for this image */
  story?: string;
  /** Aspect ratio hint for responsive layout */
  aspectRatio?: AspectRatio;
  /** Intrinsic width for next/image (avoids CLS) */
  width?: number;
  /** Intrinsic height for next/image (avoids CLS) */
  height?: number;
}

// ─── Chapter Statistic ─────────────────────────────────────────
// Used primarily in Ch. 06 (Impact).
// Note: per Brand Strategy, statistics support stories, never lead them.
export interface ChapterStatistic {
  /** Display value, e.g. "45+" */
  value: string;
  /** Short label, e.g. "Desa yang Berkolaborasi" */
  label: string;
  /** What this number means for real people (humanizing context) */
  context?: string;
}

// ─── Chapter Quote ─────────────────────────────────────────────
// Authentic quote with attribution. Per Brand Strategy: never invented.
export interface ChapterQuote {
  /** The quote text */
  text: string;
  /** Who said it, e.g. "Mitra Komunitas" */
  attribution?: string;
  /** Location or affiliation, e.g. "Jawa Timur" */
  affiliation?: string;
}

// ─── Chapter CTA ───────────────────────────────────────────────
// Call to action. Per Story Architecture: invite, never pressure.
export interface ChapterCTA {
  /** Button/link text */
  text: string;
  /** Destination href */
  href: string;
  /** Accessible label for screen readers */
  ariaLabel: string;
}

// ─── Chapter Content ───────────────────────────────────────────
// Complete content payload for a chapter.
// Components import this and pass slices to sub-components via props.
// Content updates never require component changes.
export interface ChapterContent {
  /** Narrative metadata */
  meta: ChapterMeta;
  /** Section label, e.g. "Bab Satu" or "KOLABORASI BERIKUTNYA" */
  sectionLabel: string;
  /** Primary heading (rendered as <h2>) */
  headline: string;
  /** Supporting heading (optional) */
  subheadline?: string;
  /** Body paragraphs — array for whitespace control per DS spacing */
  description: string[];
  /** Authentic quote (optional) */
  quote?: ChapterQuote;
  /** Call to action (optional, primarily Ch. 01 and Ch. 07) */
  cta?: ChapterCTA;
  /** Ordered photography references for this chapter */
  media: ChapterMedia[];
  /** Statistics for evidence-driven chapters (Ch. 06) */
  statistics?: ChapterStatistic[];
}
