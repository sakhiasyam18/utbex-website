// components/explore/experience/useExperienceState.ts
//
// Experience state machine — manages the 4-state lifecycle.
// Source of truth: 09A_EXPERIENCE_LAYOUT_SYSTEM.md §20, 10_ANIMATION_SYSTEM.md §7–§8
//
// States:
//   arrival   → camera approaching, content hidden
//   explore   → camera STOPPED, interaction ENABLED, user can freely hover/click
//   deep-dive → drawer open, scroll LOCKED, camera FROZEN
//   exit      → user resumed scrolling, content fading, camera departing
//
// The "explore" state is critical — the camera pauses indefinitely.
// The camera only leaves when the user actively scrolls again.
// The camera does NOT auto-continue after cards appear.

"use client";

import { useState, useEffect, useRef } from "react";

export type ExperienceState = "arrival" | "explore" | "deep-dive" | "exit";

export interface UseExperienceStateReturn {
  /** Current state of the experience */
  state: ExperienceState;
  /** Whether hover/click interactions are enabled */
  isInteractionEnabled: boolean;
  /** Whether the experience content should be visible (for rendering) */
  isVisible: boolean;
}

/**
 * Manages the 4-state lifecycle of an experience zone.
 *
 * @param isActive - Whether this experience is currently in camera focus
 * @param isDrawerOpen - Whether the drawer is currently open
 */
export function useExperienceState(
  isActive: boolean,
  isDrawerOpen: boolean,
): UseExperienceStateReturn {
  const [state, setState] = useState<ExperienceState>("arrival");
  const wasActive = useRef(false);
  const entryTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (isActive && !wasActive.current) {
      // Camera just arrived — begin entry animation
      setState("arrival");

      // After entry animation completes (~800ms for hero reveal),
      // transition to explore state where interaction is enabled.
      entryTimer.current = setTimeout(() => {
        setState("explore");
      }, 800);

      wasActive.current = true;
    } else if (!isActive && wasActive.current) {
      // Camera is leaving — begin exit
      setState("exit");
      wasActive.current = false;

      // Clear any pending entry timer
      if (entryTimer.current) {
        clearTimeout(entryTimer.current);
      }
    }

    return () => {
      if (entryTimer.current) {
        clearTimeout(entryTimer.current);
      }
    };
  }, [isActive]);

  // Drawer state transitions
  useEffect(() => {
    if (isDrawerOpen && state === "explore") {
      setState("deep-dive");
    } else if (!isDrawerOpen && state === "deep-dive") {
      // Return to explore after drawer closes
      setState("explore");
    }
  }, [isDrawerOpen, state]);

  return {
    state,
    isInteractionEnabled: state === "explore" || state === "deep-dive",
    isVisible: state !== "exit" || isActive, // Keep visible during active
  };
}
