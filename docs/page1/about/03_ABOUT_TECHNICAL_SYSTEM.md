# 03_ABOUT_TECHNICAL_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM

## ABOUT TECHNICAL SYSTEM

Version: 1.0

Status: LOCKED

Language: English

Audience:
Frontend Engineer
AI Coding Assistant

---

# Mission

Implement the About section exactly as defined in the previous documents.

Do not redesign.

Do not simplify.

Do not reinterpret.

Engineering may improve performance and maintainability only.

---

# Development Stack

Next.js 15

React 19

TypeScript

Tailwind CSS v4

Framer Motion

next/image

next/font

Lucide React

shadcn/ui (optional)

---

# Folder Structure

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

# Component Responsibility

About.tsx

Entry point only.

No hardcoded content.

No business logic.

---

AboutContent.tsx

Headline

Story

Description

CTA

Quote

---

AboutVisual.tsx

Primary Image

Supporting Images

Layout only.

---

AboutGallery.tsx

Documentary images.

Only authentic assets.

Never placeholder.

---

QuoteBlock.tsx

Single quote.

Minimal.

Elegant.

---

BackgroundEffects.tsx

Continue Hero atmosphere.

Soft gradients.

Glow.

Noise.

No distractions.

---

# Data Rules

Never hardcode text.

All copy lives inside

aboutContent.ts

Gallery data inside

aboutGallery.ts

Components only render data.

---

# Image Rules

Use next/image.

Priority only for Above-the-Fold.

Responsive sizes.

No layout shift.

No external images.

---

# Performance

Lazy load non-critical assets.

GPU friendly animation.

Minimize JavaScript.

Target Lighthouse 95+.

---

# Accessibility

Semantic HTML.

Proper heading hierarchy.

Keyboard navigation.

Meaningful alt text.

Decorative assets

aria-hidden="true"

---

# Responsive

Desktop

Two columns.

Tablet

Balanced layout.

Mobile

Vertical storytelling.

Image first.

Story second.

---

# Engineering Principles

Single Responsibility.

Reusable.

Strong typing.

No duplicated logic.

No magic numbers.

No dead code.

Future CMS ready.

---

# Validation

✓ Modular

✓ Responsive

✓ Accessible

✓ Performant

✓ Maintainable

✓ Production Ready

---

End of Document.
