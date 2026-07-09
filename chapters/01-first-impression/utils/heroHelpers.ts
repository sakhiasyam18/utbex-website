// src/sections/hero/utils/heroHelpers.ts

/**
 * Combines multiple class names and filters out falsy values.
 * Acts as a lightweight utility for dynamic Tailwind class construction.
 */
export function cx(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}