// src/sections/about/utils/aboutHelpers.ts
// Utility functions maintaining single responsibility[cite: 4, 7].

/**
 * Combines multiple class names gracefully.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}