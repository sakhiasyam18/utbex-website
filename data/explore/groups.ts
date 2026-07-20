// data/explore/groups.ts
//
// Evidence grouping utilities and editorial compositions.
// Source of truth: 07_ASSET_MAPPING.md §8, 09A_EXPERIENCE_LAYOUT_SYSTEM.md §7–§8
//
// Groups evidence by experience and assigns hand-crafted
// editorial grid compositions. Each experience has a unique
// layout — NOT a repeated template.

import type { EvidenceItem, ExperienceEvidenceGroup, ExperienceLayoutComposition } from "@/types/explore";
import { EVIDENCE_REGISTRY } from "./registry";

// ─── Grouping Helpers ─────────────────────────────────────────

/**
 * Get all evidence for a specific experience, grouped by role.
 * Hero always has exactly one item (the highest-priority item).
 * Supporting = everything else, sorted by narrativeOrder.
 * DeepDive = items that can be opened in the drawer (pdf, hki, video, award, story).
 */
export function getEvidenceByExperience(experienceId: string): ExperienceEvidenceGroup | null {
  const items = EVIDENCE_REGISTRY
    .filter((item) => item.experienceId === experienceId)
    .sort((a, b) => a.narrativeOrder - b.narrativeOrder);

  if (items.length === 0) return null;

  const hero = items.find((item) => item.priority === "hero");
  if (!hero) return null;

  const supporting = items.filter((item) => item.id !== hero.id);

  const deepDiveTypes = new Set(["pdf", "hki", "video", "award", "story", "certificate"]);
  const deepDive = items.filter((item) => deepDiveTypes.has(item.type));

  return { hero, supporting, deepDive };
}

/**
 * Get related evidence items for a given item.
 */
export function getRelatedEvidence(itemId: string): EvidenceItem[] {
  const item = EVIDENCE_REGISTRY.find((e) => e.id === itemId);
  if (!item?.relatedIds) return [];
  return item.relatedIds
    .map((id) => EVIDENCE_REGISTRY.find((e) => e.id === id))
    .filter((e): e is EvidenceItem => e !== undefined);
}

// ─── Pre-computed Evidence Map ────────────────────────────────
// Keyed by experience ID for O(1) lookup.
export const EXPERIENCE_EVIDENCE_MAP: Record<string, ExperienceEvidenceGroup> = {};

const experienceIds = [
  "arrival", "origin", "movement", "community",
  "innovation", "evidence", "recognition", "impact-story", "future",
];

for (const id of experienceIds) {
  const group = getEvidenceByExperience(id);
  if (group) {
    EXPERIENCE_EVIDENCE_MAP[id] = group;
  }
}

// ─── Editorial Compositions ──────────────────────────────────
// Each experience gets a hand-crafted grid layout.
// These are NOT generated — they are curated for visual rhythm.
//
// Grid areas use named slots. Cards are assigned to slots
// via cardAreaMap. Sizes are overridden via cardSizeMap.
//
// The goal is storytelling flow, not symmetry.

export const EXPERIENCE_COMPOSITIONS: Record<string, ExperienceLayoutComposition> = {
  // 1. Arrival — Cinematic Opening
  // Hero: Quote. Floating, asymmetric.
  arrival: {
    experienceId: "arrival",
    gridColumns: "repeat(3, 1fr)",
    gridRows: "auto",
    gridAreas: `
      "photo . video"
    `,
    cardAreaMap: {
      "arrival-photo-1": "photo",
      "arrival-video": "video",
    },
    cardSizeMap: {
      "arrival-hero": "medium",
      "arrival-photo-1": "medium",
      "arrival-video": "medium",
    },
    cardTransformMap: {
      "arrival-quote": { offsetY: "40px", zIndex: 10 },
      "arrival-photo-1": { offsetX: "-20px", rotate: "-2deg" },
      "arrival-video": { offsetX: "20px", rotate: "1deg" },
    },
  },

  // 2. Origin — The Historical Archive
  // Hero: Timeline. Overlapping documents.
  origin: {
    experienceId: "origin",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto",
    gridAreas: `
      "photo1 quote story story"
      "photo2 . story story"
    `,
    cardAreaMap: {
      "origin-hero": "photo1",
      "origin-quote": "quote",
      "origin-story": "story",
      "origin-photo-2": "photo2",
    },
    cardSizeMap: {
      "origin-hero": "medium",
      "origin-story": "tall",
      "origin-photo-2": "small",
      "origin-quote": "small",
    },
    cardTransformMap: {
      "origin-timeline": { offsetY: "-30px", zIndex: 2 },
      "origin-hero": { offsetX: "10px", offsetY: "-50px", rotate: "-3deg", zIndex: 5 },
      "origin-story": { offsetY: "-80px", zIndex: 1 },
      "origin-photo-2": { offsetX: "20px", offsetY: "-40px", rotate: "4deg", zIndex: 6 },
    },
  },

  // 3. Movement — Energetic Scatter
  // Hero: Workshop Photo. Dynamic masonry overlapping.
  movement: {
    experienceId: "movement",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto auto",
    gridAreas: `
      "photo1 video video photo3"
      "award story story pdf"
    `,
    cardAreaMap: {
      "movement-photo-1": "photo1",
      "movement-video": "video",
      "movement-photo-3": "photo3",
      "movement-award": "award",
      "movement-story": "story",
      "movement-pdf": "pdf",
    },
    cardSizeMap: {
      "movement-photo-1": "medium",
      "movement-video": "wide",
      "movement-photo-2": "small",
      "movement-photo-3": "small",
      "movement-award": "small",
      "movement-pdf": "small",
      "movement-story": "wide",
    },
    cardTransformMap: {
      "movement-hero": { offsetX: "10%", zIndex: 5, rotate: "-1deg" },
      "movement-photo-1": { offsetX: "20px", offsetY: "-30px", rotate: "2deg" },
      "movement-video": { offsetY: "-60px", zIndex: 1 },
      "movement-pdf": { offsetX: "-30px", offsetY: "10px", rotate: "-4deg", zIndex: 10 },
      "movement-award": { offsetX: "15px", offsetY: "-20px", rotate: "3deg", zIndex: 6 },
    },
  },

  // 4. Community — Warm & Connected
  // Hero: Story. Interlocking clusters.
  community: {
    experienceId: "community",
    gridColumns: "repeat(5, 1fr)",
    gridRows: "auto",
    gridAreas: `
      "photo1 photo2 . video video"
      "quote quote . video video"
    `,
    cardAreaMap: {
      "community-photo-1": "photo1",
      "community-photo-2": "photo2",
      "community-quote": "quote",
      "community-video": "video",
    },
    cardSizeMap: {
      "community-hero": "large",
      "community-photo-1": "medium",
      "community-photo-2": "medium",
      "community-quote": "medium",
      "community-video": "large",
    },
    cardTransformMap: {
      "community-story": { zIndex: 1 },
      "community-photo-1": { offsetX: "30px", offsetY: "-60px", zIndex: 5 },
      "community-photo-2": { offsetX: "-10px", offsetY: "-40px", zIndex: 4 },
      "community-video": { offsetX: "-40px", offsetY: "-80px", zIndex: 3 },
    },
  },

  // 5. Innovation — Premium Showcase
  // Hero: Product. Bento box precise layering.
  innovation: {
    experienceId: "innovation",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto auto",
    gridAreas: `
      "brand pack mockup mockup"
      "video video catalog award"
    `,
    cardAreaMap: {
      "innovation-photo-1": "brand",
      "innovation-photo-2": "pack",
      "innovation-photo-3": "mockup",
      "innovation-video": "video",
      "innovation-pdf": "catalog",
      "innovation-award": "award",
    },
    cardSizeMap: {
      "innovation-photo-1": "medium",
      "innovation-photo-2": "medium",
      "innovation-photo-3": "wide",
      "innovation-video": "wide",
      "innovation-pdf": "medium",
      "innovation-award": "medium",
    },
    cardTransformMap: {
      "innovation-hero": { zIndex: 10 },
      "innovation-photo-1": { offsetY: "-40px", zIndex: 1 },
      "innovation-photo-2": { offsetY: "-20px", offsetX: "-10px", zIndex: 2 },
      "innovation-photo-3": { offsetY: "-30px", zIndex: 3 },
    },
  },

  // 6. Recognition — The Trophy Room
  // Hero: Key Award. Extreme whitespace and isolation.
  recognition: {
    experienceId: "recognition",
    gridColumns: "repeat(5, 1fr)",
    gridRows: "auto auto",
    gridAreas: `
      "award1 . . . award2"
      ". ceremony ceremony story story"
    `,
    cardAreaMap: {
      "recognition-award-1": "award1",
      "recognition-award-2": "award2",
      "recognition-photo": "ceremony",
      "recognition-story": "story",
    },
    cardSizeMap: {
      "recognition-award-1": "small",
      "recognition-award-2": "small",
      "recognition-photo": "wide",
      "recognition-story": "wide",
    },
    cardTransformMap: {
      "recognition-hero": { scale: 1.1, zIndex: 5 },
      "recognition-award-1": { offsetY: "-40px" },
      "recognition-award-2": { offsetY: "30px" },
      "recognition-story": { offsetX: "-20px" },
    },
  },

  // 7. Evidence — Trustworthy Dossier
  // Hero: Certificate. Strict cascaded file columns.
  evidence: {
    experienceId: "evidence",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto auto",
    gridAreas: `
      "profile profile article article"
      "hki1 cert2 hki2 media"
    `,
    cardAreaMap: {
      "evidence-hki-1": "hki1",
      "evidence-pdf-1": "profile",
      "evidence-pdf-2": "article",
      "evidence-cert-2": "cert2",
      "evidence-hki-2": "hki2",
      "evidence-pdf-3": "media",
    },
    cardSizeMap: {
      "evidence-pdf-1": "wide",
      "evidence-pdf-2": "wide",
      "evidence-hki-1": "small",
      "evidence-cert-2": "small",
      "evidence-hki-2": "small",
      "evidence-photo": "small",
      "evidence-pdf-3": "small",
    },
    cardTransformMap: {
      "evidence-hero": { offsetX: "5%", zIndex: 5 },
      "evidence-pdf-1": { offsetY: "-30px", zIndex: 4 },
      "evidence-pdf-2": { offsetX: "-20px", offsetY: "-10px", zIndex: 3 },
      "evidence-cert-2": { offsetX: "-10px", zIndex: 6 },
    },
  },

  // 8. Impact Story — Emotional Journey
  // Hero: Story. Z-pattern forced flow.
  "impact-story": {
    experienceId: "impact-story",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto auto",
    gridAreas: `
      "photo before after ."
      ". quote quote quote"
      ". . video video"
    `,
    cardAreaMap: {
      "impact-hero": "photo",
      "impact-before": "before",
      "impact-after": "after",
      "impact-quote": "quote",
      "impact-video": "video",
    },
    cardSizeMap: {
      "impact-hero": "medium",
      "impact-before": "medium",
      "impact-after": "medium",
      "impact-quote": "wide",
      "impact-video": "wide",
    },
    cardTransformMap: {
      "impact-story-card": { zIndex: 1 },
      "impact-hero": { offsetY: "-40px", zIndex: 5 },
      "impact-before": { offsetX: "-10px", offsetY: "-40px", zIndex: 6 },
      "impact-after": { offsetX: "-20px", offsetY: "-40px", zIndex: 7 },
      "impact-quote": { offsetY: "-20px", zIndex: 8 },
    },
  },

  // 9. Future — Minimal Visionary
  // Hero: Story. Ascending steps.
  future: {
    experienceId: "future",
    gridColumns: "repeat(4, 1fr)",
    gridRows: "auto",
    gridAreas: `
      . photo vision .
      . . . collab
    `,
    cardAreaMap: {
      "future-hero": "photo",
      "future-quote": "vision",
      "future-photo-2": "collab",
    },
    cardSizeMap: {
      "future-hero": "medium",
      "future-quote": "medium",
      "future-photo-2": "small",
    },
    cardTransformMap: {
      "future-story": { zIndex: 1 },
      "future-hero": { offsetY: "-20px" },
      "future-quote": { offsetY: "-50px" },
      "future-photo-2": { offsetY: "-80px" },
    },
  },
};
