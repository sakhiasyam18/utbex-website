// content/chapters/registry.ts
//
// Chapter Meta Registry — the structural backbone of the seven-chapter system.
// This defines the ORDER, PURPOSE, and EMOTIONAL CURVE of the entire experience.
//
// Source of truth:
//   - 00_STORY_ARCHITECTURE_OVERVIEW.md §The Seven Chapters
//   - 01_STORY_FLOW.md §Story Flow (emotional dependency chain)
//   - 02_CHAPTER_PURPOSE.md (one question, one emotion per chapter)
//
// WARNING: Chapter order is IMMUTABLE without strategic review.
//   "Never rearrange chapters without strategic review."
//   — 00_STORY_ARCHITECTURE_OVERVIEW.md

import type { ChapterMeta } from '@/types/chapter';

export const chapterRegistry: readonly ChapterMeta[] = [
  {
    id: '01-first-impression',
    number: 1,
    title: 'Kesan Pertama',
    slug: 'first-impression',
    emotionalQuestion: 'Siapa orang-orang ini?',
    emotionalOutput: 'Curiosity',
    tempo: 'fast',
  },
  {
    id: '02-belief',
    number: 2,
    title: 'Keyakinan',
    slug: 'belief',
    emotionalQuestion: 'Mengapa ini ada?',
    emotionalOutput: 'Understanding',
    tempo: 'slow',
  },
  {
    id: '03-human',
    number: 3,
    title: 'Manusia',
    slug: 'human',
    emotionalQuestion: 'Siapa yang memulai perjalanan ini?',
    emotionalOutput: 'Connection',
    tempo: 'personal',
  },
  {
    id: '04-movement',
    number: 4,
    title: 'Gerakan',
    slug: 'movement',
    emotionalQuestion: 'Apa yang sebenarnya terjadi di sini?',
    emotionalOutput: 'Recognition',
    tempo: 'expanding',
  },
  {
    id: '05-stories',
    number: 5,
    title: 'Cerita',
    slug: 'stories',
    emotionalQuestion: 'Apakah ini benar-benar terjadi?',
    emotionalOutput: 'Confidence',
    tempo: 'explorative',
  },
  {
    id: '06-impact',
    number: 6,
    title: 'Dampak',
    slug: 'impact',
    emotionalQuestion: 'Apa yang berubah?',
    emotionalOutput: 'Trust',
    tempo: 'reflective',
  },
  {
    id: '07-conversation',
    number: 7,
    title: 'Percakapan',
    slug: 'conversation',
    emotionalQuestion: 'Bagaimana saya bisa menjadi bagian dari ini?',
    emotionalOutput: 'Belonging',
    tempo: 'calm',
  },
] as const;
