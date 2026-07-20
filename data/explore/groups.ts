// data/explore/groups.ts
//
// Evidence grouping utilities and editorial compositions.
// Source of truth: 07_ASSET_MAPPING.md §8, 09A_EXPERIENCE_LAYOUT_SYSTEM.md §7–§8
//
// Groups evidence by experience and assigns hand-crafted
// editorial grid compositions. Each experience has a unique
// layout — NOT a repeated template.

import type { EvidenceItem, ExperienceEvidenceGroup, ExperienceLayoutComposition } from "./types";
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
  // Arrival — 4 cards, "Grand Opening" layout
  // Hero spans full top, quote wide below, two smaller accents
  arrival: {
    experienceId: "arrival",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto",
    gridAreas: `
      "hero hero hero"
      "quote quote video"
    `,
    cardAreaMap: {
      "arrival-hero": "hero",
      "arrival-quote": "quote",
      "arrival-photo-1": "video",
      "arrival-video": "video",
    },
    cardSizeMap: {
      "arrival-hero": "large",
      "arrival-quote": "wide",
      "arrival-photo-1": "medium",
      "arrival-video": "medium",
    },
  },

  // Origin — 6 cards, "Magazine Spread" layout
  // Hero large left, timeline wide, story tall right, smaller accents below
  origin: {
    experienceId: "origin",
    gridColumns: "2fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero story"
      "timeline timeline story"
      "photo1 photo2 quote"
    `,
    cardAreaMap: {
      "origin-hero": "hero",
      "origin-timeline": "timeline",
      "origin-photo-1": "photo1",
      "origin-story": "story",
      "origin-photo-2": "photo2",
      "origin-quote": "quote",
    },
    cardSizeMap: {
      "origin-hero": "large",
      "origin-timeline": "wide",
      "origin-photo-1": "medium",
      "origin-story": "tall",
      "origin-photo-2": "small",
      "origin-quote": "small",
    },
  },

  // Movement — 8 cards, "Documentary Scatter" layout
  // Hero dominates top-left, supporting fills organically
  movement: {
    experienceId: "movement",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero photo1"
      "video photo2 photo3"
      "award pdf story"
    `,
    cardAreaMap: {
      "movement-hero": "hero",
      "movement-photo-1": "photo1",
      "movement-video": "video",
      "movement-photo-2": "photo2",
      "movement-photo-3": "photo3",
      "movement-award": "award",
      "movement-pdf": "pdf",
      "movement-story": "story",
    },
    cardSizeMap: {
      "movement-hero": "large",
      "movement-photo-1": "medium",
      "movement-video": "medium",
      "movement-photo-2": "small",
      "movement-photo-3": "small",
      "movement-award": "small",
      "movement-pdf": "small",
      "movement-story": "medium",
    },
  },

  // Community — 6 cards, "Connected Network" layout
  // Hero top, pairs of cards suggesting relationships
  community: {
    experienceId: "community",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero photo1"
      "photo2 story story"
      "quote video video"
    `,
    cardAreaMap: {
      "community-hero": "hero",
      "community-photo-1": "photo1",
      "community-photo-2": "photo2",
      "community-story": "story",
      "community-quote": "quote",
      "community-video": "video",
    },
    cardSizeMap: {
      "community-hero": "large",
      "community-photo-1": "medium",
      "community-photo-2": "medium",
      "community-story": "wide",
      "community-quote": "small",
      "community-video": "wide",
    },
  },

  // Innovation — 7 cards, "Showcase" layout
  // Product hero center-stage, creative assets surround it
  innovation: {
    experienceId: "innovation",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero brand"
      "pack mockup mockup"
      "video video catalog"
    `,
    cardAreaMap: {
      "innovation-hero": "hero",
      "innovation-photo-1": "brand",
      "innovation-photo-2": "pack",
      "innovation-photo-3": "mockup",
      "innovation-video": "video",
      "innovation-pdf": "catalog",
      "innovation-award": "catalog",
    },
    cardSizeMap: {
      "innovation-hero": "large",
      "innovation-photo-1": "medium",
      "innovation-photo-2": "medium",
      "innovation-photo-3": "wide",
      "innovation-video": "wide",
      "innovation-pdf": "small",
      "innovation-award": "small",
    },
  },

  // Evidence — 8 cards, "Document Vault" layout
  // Certificate hero, HKI and PDFs arranged like a filing system
  evidence: {
    experienceId: "evidence",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero hki1"
      "profile article cert2"
      "hki2 photo media"
    `,
    cardAreaMap: {
      "evidence-hero": "hero",
      "evidence-hki-1": "hki1",
      "evidence-pdf-1": "profile",
      "evidence-pdf-2": "article",
      "evidence-cert-2": "cert2",
      "evidence-hki-2": "hki2",
      "evidence-photo": "photo",
      "evidence-pdf-3": "media",
    },
    cardSizeMap: {
      "evidence-hero": "large",
      "evidence-hki-1": "medium",
      "evidence-pdf-1": "tall",
      "evidence-pdf-2": "medium",
      "evidence-cert-2": "small",
      "evidence-hki-2": "small",
      "evidence-photo": "small",
      "evidence-pdf-3": "small",
    },
  },

  // Recognition — 5 cards, "Breathable Gallery" layout
  // Sparse — each award has room to breathe, emphasizing importance
  recognition: {
    experienceId: "recognition",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto",
    gridAreas: `
      "hero hero award1"
      "ceremony ceremony story"
    `,
    cardAreaMap: {
      "recognition-hero": "hero",
      "recognition-award-1": "award1",
      "recognition-award-2": "award1",
      "recognition-photo": "ceremony",
      "recognition-story": "story",
    },
    cardSizeMap: {
      "recognition-hero": "large",
      "recognition-award-1": "medium",
      "recognition-award-2": "medium",
      "recognition-photo": "wide",
      "recognition-story": "medium",
    },
  },

  // Impact Story — 6 cards, "Transformation" layout
  // Before/After side by side, story tall, quote wide
  "impact-story": {
    experienceId: "impact-story",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto auto",
    gridAreas: `
      "hero hero hero"
      "before after story"
      "quote quote video"
    `,
    cardAreaMap: {
      "impact-hero": "hero",
      "impact-before": "before",
      "impact-after": "after",
      "impact-story-card": "story",
      "impact-quote": "quote",
      "impact-video": "video",
    },
    cardSizeMap: {
      "impact-hero": "large",
      "impact-before": "medium",
      "impact-after": "medium",
      "impact-story-card": "tall",
      "impact-quote": "wide",
      "impact-video": "medium",
    },
  },

  // Future — 4 cards, "Open Horizon" layout
  // Sparse, forward-looking, breathing room
  future: {
    experienceId: "future",
    gridColumns: "1fr 1fr 1fr",
    gridRows: "auto auto",
    gridAreas: `
      "hero hero vision"
      "roadmap roadmap collab"
    `,
    cardAreaMap: {
      "future-hero": "hero",
      "future-story": "roadmap",
      "future-quote": "vision",
      "future-photo-2": "collab",
    },
    cardSizeMap: {
      "future-hero": "large",
      "future-story": "wide",
      "future-quote": "medium",
      "future-photo-2": "medium",
    },
  },
};
