// components/explore/experience/useDrawer.ts
//
// Drawer state management + scroll lock.
// Source of truth: 09_INTERACTION_SYSTEM.md §12, 10_ANIMATION_SYSTEM.md §23
//
// When the Drawer opens:
//   - body.style.overflow = "hidden" (freezes scroll → freezes camera)
//   - Camera position stays unchanged
//   - User focuses on evidence detail
//
// When the Drawer closes:
//   - body.style.overflow restored
//   - User returns to exploration state
//
// Scroll lock is combined here (not separate hook) because it's
// ONLY ever needed for the drawer.

"use client";

import { useState, useCallback, useEffect } from "react";
import type { EvidenceItem } from "@/data/explore/types";

export interface UseDrawerReturn {
  /** Whether the drawer is currently open */
  isOpen: boolean;
  /** The currently selected evidence item (null when closed) */
  selectedItem: EvidenceItem | null;
  /** Open the drawer with a specific evidence item */
  openDrawer: (item: EvidenceItem) => void;
  /** Close the drawer and restore scroll */
  closeDrawer: () => void;
}

export function useDrawer(): UseDrawerReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);

  // ── Scroll Lock ──────────────────────────────────────────
  // Save and restore the original overflow value.
  // Per 10_ANIMATION_SYSTEM.md §23: scroll locked during drawer.
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const openDrawer = useCallback((item: EvidenceItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    // Delay clearing the item so the exit animation can use it
    setTimeout(() => setSelectedItem(null), 400);
  }, []);

  return { isOpen, selectedItem, openDrawer, closeDrawer };
}
