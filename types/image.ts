// types/image.ts
//
// Image-specific type definitions for the UTBEX Visual Narrative System.
// Extends chapter.ts media types with registry and filtering capabilities.
//
// Source of truth:
//   - 04_VISUAL_NARRATIVE_SYSTEM.md (visual hierarchy, photography order)
//   - 06_IMPLEMENTATION_GUIDE.md §Image Loading

import type { ChapterMedia, ChapterId, ImagePriority } from './chapter';

// ─── Image Registry ────────────────────────────────────────────
// The complete collection of all documentary photos with metadata.
// Lives in content/images/registry.ts as a typed array.
export type ImageRegistry = ChapterMedia[];

// ─── Image Filter ──────────────────────────────────────────────
// Used to query the registry for specific chapter/emotion combinations.
export interface ImageFilter {
  chapter?: ChapterId;
  emotion?: string;
  priority?: ImagePriority;
  year?: number;
}

// ─── Image Query Helpers ───────────────────────────────────────
// Type-safe helper signatures for image retrieval functions.

/** Returns all images belonging to a chapter, ordered by priority */
export type GetChapterImages = (
  registry: ImageRegistry,
  chapterId: ChapterId
) => ChapterMedia[];

/** Returns the hero/primary image for a chapter */
export type GetHeroImage = (
  registry: ImageRegistry,
  chapterId: ChapterId
) => ChapterMedia | undefined;

/** Returns images matching a filter */
export type FilterImages = (
  registry: ImageRegistry,
  filter: ImageFilter
) => ChapterMedia[];
