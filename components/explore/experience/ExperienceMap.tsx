// components/explore/experience/ExperienceMap.tsx
//
// Renders all 9 Experience placeholders in the World Canvas.
// Source of truth: 01_CANVAS_DUNIA_UTBEX.md §5 (Experience Map)
//
// Experiences are placed according to the spatial layout
// defined in waypoints.ts, matching the organic non-linear
// path from the canvas architecture document.
//
// Per 01_CANVAS §11: Experience boundaries are soft —
// elements from adjacent experiences can overlap.

"use client";

import { EXPERIENCE_ZONES } from "@/data/explore/waypoints";
import { ExperiencePlaceholder } from "./ExperiencePlaceholder";

interface ExperienceMapProps {
  /** ID of the experience currently in camera focus */
  currentExperienceId: string;
}

export function ExperienceMap({ currentExperienceId }: ExperienceMapProps) {
  return (
    <>
      {EXPERIENCE_ZONES.map((zone) => (
        <ExperiencePlaceholder
          key={zone.id}
          zone={zone}
          isActive={zone.id === currentExperienceId}
        />
      ))}
    </>
  );
}
