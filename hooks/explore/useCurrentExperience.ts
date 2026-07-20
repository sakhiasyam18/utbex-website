// components/explore/camera/useCurrentExperience.ts
//
// Derives which Experience the camera is currently focused on.
// Used by Experience components to trigger reveals and interactions.
//
// Per 02_CAMERA_SYSTEM.md §7: each experience has entry, focus, exit.
// This hook determines the closest waypoint to current scroll progress.

"use client";

import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { useState } from "react";
import { CAMERA_WAYPOINTS } from "@/data/explore/waypoints";

/**
 * Returns the ID of the experience the camera is currently inside.
 * Updates as scroll progresses through the world.
 */
export function useCurrentExperience(scrollProgress: MotionValue<number>): string {
  const [currentId, setCurrentId] = useState<string>(CAMERA_WAYPOINTS[0].id);

  useMotionValueEvent(scrollProgress, "change", (progress) => {
    // Find the waypoint closest to (but not after) current scroll progress.
    let closest = CAMERA_WAYPOINTS[0];

    for (let i = CAMERA_WAYPOINTS.length - 1; i >= 0; i--) {
      if (progress >= CAMERA_WAYPOINTS[i].scrollProgress - 0.01) {
        closest = CAMERA_WAYPOINTS[i];
        break;
      }
    }

    if (closest.id !== currentId) {
      setCurrentId(closest.id);
    }
  });

  return currentId;
}
