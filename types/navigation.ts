// types/navigation.ts
//
// Navigation type definitions connecting the nav system to chapters.
// Supersedes components/navigation/types/navigation.ts but maintains
// backward compatibility during the migration period.
//
// Source of truth:
//   - 05_NAVIGATION_COPY.md (navigation labels)
//   - 02_CHAPTER_PURPOSE.md (chapter ordering)

import type { ChapterId } from './chapter';

// ─── Navigation Item ───────────────────────────────────────────
export interface NavigationItem {
  /** Unique identifier for active-state tracking */
  id: string;
  /** Display label (Indonesian) */
  label: string;
  /** Anchor href, e.g. "#02-belief" */
  href: string;
  /** Links this nav item to a specific chapter (for emotional context) */
  chapterId?: ChapterId;
}

// ─── Navigation State ──────────────────────────────────────────
export interface NavigationState {
  /** Whether the page has been scrolled past the threshold */
  isScrolled: boolean;
  /** Whether the mobile drawer is open */
  isDrawerOpen: boolean;
  /** Currently visible chapter/section ID */
  activeSection: string | null;
}
