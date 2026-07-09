// content/navigation.ts
//
// Navigation data — connecting the nav system to the chapter architecture.
// Labels are chapter-aware but condensed for UX clarity.
//
// Source of truth:
//   - 05_NAVIGATION_COPY.md (label guidelines)
//   - 02_CHAPTER_PURPOSE.md (chapter ordering)
//
// Design decision: Not all seven chapters appear in the nav.
// Navigation shows key waypoints; the scroll experience handles transitions.

import type { NavigationItem } from '@/types/navigation';

export const navigationLinks: NavigationItem[] = [
  {
    id: 'first-impression',
    label: 'Beranda',
    href: '#first-impression',
    chapterId: '01-first-impression',
  },
  {
    id: 'belief',
    label: 'Keyakinan',
    href: '#belief',
    chapterId: '02-belief',
  },
  {
    id: 'movement',
    label: 'Gerakan',
    href: '#movement',
    chapterId: '04-movement',
  },
  {
    id: 'stories',
    label: 'Cerita',
    href: '#stories',
    chapterId: '05-stories',
  },
  {
    id: 'impact',
    label: 'Dampak',
    href: '#impact',
    chapterId: '06-impact',
  },
];
