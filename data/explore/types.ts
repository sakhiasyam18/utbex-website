// data/explore/types.ts
//
// Type definitions for the Asset Mapping & Evidence system.
// Source of truth: 07_ASSET_MAPPING.md, 08_COMPONENT_SYSTEM.md, 09A_EXPERIENCE_LAYOUT_SYSTEM.md
//
// These types are used by the registry, grouping utilities,
// and all evidence card components.

// ─── Evidence Types ───────────────────────────────────────────
// Maps to the component that renders each evidence kind.
// Per 07_ASSET_MAPPING §3 and 08_COMPONENT_SYSTEM §6–§18.
export type EvidenceType =
  | "photo"
  | "video"
  | "pdf"
  | "award"
  | "story"
  | "quote"
  | "timeline"
  | "hki"
  | "product"
  | "certificate";

// ─── Priority Levels ─────────────────────────────────────────
// Per 09A §13: Hero → Primary → Secondary → Supporting.
// Priority determines visual size and animation order.
export type EvidencePriority = "hero" | "primary" | "secondary" | "supporting";

// ─── Asset Categories ─────────────────────────────────────────
// Per 07_ASSET_MAPPING §13: top-level categories.
// One asset can belong to more than one category if relevant.
export type AssetCategory =
  | "history"
  | "community"
  | "innovation"
  | "evidence"
  | "recognition"
  | "impact"
  | "future";

// ─── Card Sizes ───────────────────────────────────────────────
// Per 09A §8: editorial layout uses varied card dimensions.
// Each size maps to specific CSS grid span + aspect ratio.
export type CardSize = "large" | "medium" | "small" | "wide" | "tall";

// ─── Evidence Item ────────────────────────────────────────────
// A single piece of evidence in the world.
// Per 07_ASSET_MAPPING §12: every asset has metadata.
export interface EvidenceItem {
  /** Unique identifier */
  id: string;
  /** Which component renders this evidence */
  type: EvidenceType;
  /** Display title */
  title: string;
  /** Short subtitle or description */
  subtitle: string;
  /** Year of the evidence (must be from official timeline: 2014/2019/2021/2023) */
  year: string;
  /** Top-level category */
  category: AssetCategory;
  /** Which experience this evidence belongs to */
  experienceId: string;
  /** Visual priority — determines card size */
  priority: EvidencePriority;
  /** Editorial card size override (optional — derived from priority if not set) */
  cardSize?: CardSize;
  /** Narrative order within its experience — determines eye flow / stagger delay */
  narrativeOrder: number;
  /** Placeholder description for drawer detail view */
  description?: string;
  /** IDs of related evidence items (for drawer "related" section) */
  relatedIds?: string[];
}

// ─── Grouped Evidence ─────────────────────────────────────────
// Evidence organized per experience for rendering.
// Per 09A §9–§11: every experience has hero + supporting + deepDive.
export interface ExperienceEvidenceGroup {
  /** The single hero evidence (always one, always first) */
  hero: EvidenceItem;
  /** Supporting evidence cards sorted by narrativeOrder */
  supporting: EvidenceItem[];
  /** Evidence items that can be opened in the drawer for deep dive */
  deepDive: EvidenceItem[];
}

// ─── Card Transforms (Editorial Overrides) ──────────────────────
// Used to break out of the rigid grid and create connected narratives.
// Cards can float, overlap, or cluster tightly together.
export interface CardTransform {
  /** X offset (e.g. "20px", "-10%") */
  offsetX?: string;
  /** Y offset (e.g. "40px", "-5%") */
  offsetY?: string;
  /** Z-index for overlaps (e.g. 10) */
  zIndex?: number;
  /** Slight rotation for organic feel (e.g. "2deg") */
  rotate?: string;
  /** Scale tweak (e.g. 1.05) */
  scale?: number;
}

// ─── Layout Composition ───────────────────────────────────────
// Defines the editorial card arrangement for an experience.
// Each experience gets a hand-crafted composition.
// The CSS grid acts as an invisible anchor, while transforms
// create the final magazine-like layout.
export interface ExperienceLayoutComposition {
  /** Experience ID this composition belongs to */
  experienceId: string;
  /** CSS grid-template-columns value */
  gridColumns: string;
  /** CSS grid-template-rows value */
  gridRows: string;
  /** Named grid areas string (for grid-template-areas) */
  gridAreas: string;
  /** Maps evidence ID → grid area name */
  cardAreaMap: Record<string, string>;
  /** Maps evidence ID → card size override */
  cardSizeMap: Record<string, CardSize>;
  /** Maps evidence ID → custom transform for overlapping/floating */
  cardTransformMap?: Record<string, CardTransform>;
}
