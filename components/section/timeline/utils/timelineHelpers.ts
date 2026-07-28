// components/section/timeline/utils/timelineHelpers.ts

/**
 * Returns the appropriate evidence icon label prefix
 */
export function getEvidenceIcon(type: 'certificate' | 'documentation' | 'media'): string {
    switch (type) {
        case 'certificate':
            return '📜';
        case 'documentation':
            return '📷';
        case 'media':
            return '📰';
        default:
            return '→';
    }
}
