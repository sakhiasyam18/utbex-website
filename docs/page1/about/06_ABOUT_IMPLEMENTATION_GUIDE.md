# 06_ABOUT_IMPLEMENTATION_GUIDE.md

# UTBEX DIGITAL EXPERIENCE SYSTEM

## ABOUT IMPLEMENTATION GUIDE

Version: 1.0

Status: FINAL

Language: English

Audience:
Gemini
Claude
ChatGPT
Cursor
Copilot
Frontend Engineer

---

# Your Role

You are joining an existing product team.

You are not the designer.

You are not the storyteller.

You are the Frontend Engineer responsible for implementing the About section exactly as documented.

Do not redesign.

Do not reinterpret.

Do not simplify.

---

# Read These Documents First

01_ABOUT_BIBLE.md

↓

02_ABOUT_VISUAL_SYSTEM.md

↓

03_ABOUT_TECHNICAL_SYSTEM.md

↓

04_ABOUT_MOTION_SYSTEM.md

↓

05_ABOUT_CONTENT_SYSTEM.md

All five documents are the single source of truth.

If your opinion conflicts with the documentation,

the documentation always wins.

---

# Mission

Build only the About section.

Nothing else.

The Hero has already been completed.

The Portfolio section will come later.

Your responsibility is Chapter Two only.

---

# Expected Folder Structure

src/

sections/

about/

About.tsx

index.ts

components/

AboutContent.tsx

AboutVisual.tsx

AboutGallery.tsx

QuoteBlock.tsx

SectionLabel.tsx

BackgroundEffects.tsx

data/

aboutContent.ts

aboutGallery.ts

motion/

aboutMotion.ts

types/

about.ts

utils/

aboutHelpers.ts

---

# Content Rules

Never hardcode text.

Never hardcode images.

Never duplicate content.

Everything must come from the data layer.

Future content updates should not require component changes.

---

# Design Rules

Continue Hero.

Do not redesign.

Do not introduce a new visual language.

Use the same spacing.

The same typography rhythm.

The same editorial feeling.

The same premium quality.

The visitor should never notice the transition.

---

# Motion Rules

Use Framer Motion.

Soft fade.

Small translate.

Gentle stagger.

Respect prefers-reduced-motion.

Motion supports reading.

Never entertainment.

---

# Photography Rules

Use authentic documentation.

No stock photos.

No AI-generated humans.

No decorative images.

Every image should strengthen trust.

---

# Responsive Rules

Desktop

Editorial two-column layout.

Tablet

Balanced.

Mobile

Vertical storytelling.

Image first.

Story second.

Do not simply stack everything.

Design intentionally.

---

# Accessibility

Semantic HTML.

Proper heading hierarchy.

Keyboard accessible.

Meaningful alt text.

Decorative assets

aria-hidden="true"

Meet WCAG AA.

---

# Performance

Next/Image

Lazy loading

Minimal JavaScript

GPU-friendly animation

Avoid CLS

Target Lighthouse 95+

---

# Code Quality

Single Responsibility.

Reusable.

Strong TypeScript.

No any.

No duplicated logic.

No magic numbers.

No dead code.

Future CMS ready.

Production ready.

---

# Self Review

Before finishing, verify:

✓ Matches Hero quality.

✓ Matches Hero spacing.

✓ Matches Hero storytelling.

✓ Matches Hero motion language.

✓ Matches Hero visual language.

✓ Responsive.

✓ Accessible.

✓ Maintainable.

✓ Production Ready.

If one requirement is missing,

continue improving before returning the code.

---

# Final Principle

Do not ask,

"How do I build an About section?"

Ask,

"How would the same engineer who built the Hero continue the story without breaking the experience?"

The About section should feel like Hero never ended.

It simply continued.

---

End of Document.
