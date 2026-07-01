"use client";

import { useEffect, useState } from "react";

/**
 * Detects the visitor's `prefers-reduced-motion` preference.
 * Per 04_ABOUT_MOTION_SYSTEM.md, parallax, floating, and continuous
 * movement must be disabled when this is true — keep only fade.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}
