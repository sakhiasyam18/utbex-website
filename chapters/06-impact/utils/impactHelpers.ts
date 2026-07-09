// src/sections/impact/utils/impactHelpers.ts

export function cx(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
