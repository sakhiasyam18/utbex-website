// components/section/footer/utils/footerHelpers.ts

/**
 * Re-export from the About section's shared helper to avoid duplicating logic.
 * This follows the DRY principle while keeping the footer's utils directory
 * consistent with the established folder structure.
 *
 * Per 04_ABOUT_MOTION_SYSTEM.md (shared contract):
 * Parallax, floating, and continuous movement must be disabled when
 * prefers-reduced-motion is set — keep only fade.
 */
export { useReducedMotion as usePrefersReducedMotion } from "framer-motion";
