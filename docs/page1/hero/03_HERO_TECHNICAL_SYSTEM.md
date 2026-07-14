# UTBEX DIGITAL EXPERIENCE SYSTEM

# HERO BIBLE

## PART 03 — Technical Architecture & Implementation Rules

Version: 1.0
Status: Final
Language: English
Audience: Gemini (AI Frontend Engineer)

---

# Mission

Your responsibility is not to design the Hero.

Your responsibility is to faithfully implement the design direction defined in the previous documents.

Never redesign.

Never simplify the experience.

Never replace design decisions with your own assumptions.

If you find a better engineering solution that does not change the visual experience, you may implement it.

Always preserve the intended user experience.

---

# Development Stack

Use the following technologies.

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- next/image
- next/font
- shadcn/ui (only if it improves quality)

Do not use CSS Modules.

Do not use Bootstrap.

Do not use inline styles.

Do not use unnecessary dependencies.

---

# Folder Structure

Create the Hero as a standalone feature.

```text
src/
└── sections/
    └── hero/
        ├── Hero.tsx
        ├── index.ts
        │
        ├── components/
        │   ├── HeroContent.tsx
        │   ├── HeroVisual.tsx
        │   ├── BrowserMockup.tsx
        │   ├── DocumentationCollage.tsx
        │   ├── FloatingEvidence.tsx
        │   └── BackgroundEffects.tsx
        │
        ├── data/
        │   ├── heroContent.ts
        │   └── heroEvidence.ts
        │
        ├── motion/
        │   └── heroMotion.ts
        │
        ├── types/
        │   └── hero.ts
        │
        └── utils/
            └── heroHelpers.ts
```

---

# Component Responsibility

## Hero.tsx

Acts only as the entry point.

It assembles the Hero.

Contains no business logic.

Contains no hardcoded content.

---

## HeroContent.tsx

Responsible for:

- Badge
- Headline
- Description
- CTA Buttons
- Trust Label

Never render visual elements.

---

## HeroVisual.tsx

Responsible for:

- Browser Mockup
- Documentation
- Floating Cards

Never render textual content.

---

## BrowserMockup.tsx

Responsible only for the browser frame.

Do not render floating cards.

Do not render Hero content.

---

## DocumentationCollage.tsx

Responsible only for displaying authentic documentation images.

Never use placeholder images.

Never use stock photos.

---

## FloatingEvidence.tsx

Responsible only for floating trust indicators.

Examples:

Government Collaboration

Innovation Program

Community Empowerment

Mentoring

Workshop

Never display marketing claims.

---

## BackgroundEffects.tsx

Responsible for:

Mesh Gradient

Glow

Noise Texture

Ambient Blur

Light Layer

Grid Overlay

Everything must remain subtle.

---

# Data Rules

Never hardcode copy inside JSX.

Store every text inside:

heroContent.ts

Store every floating card inside:

heroEvidence.ts

Store everything as arrays or objects.

Future content updates should never require component changes.

---

# Motion Rules

All animations must use Framer Motion.

Animation should feel:

Calm.

Natural.

Premium.

Never flashy.

Never aggressive.

Every animation must support storytelling.

Never animate for decoration.

---

# Performance Rules

Use Next Image.

Optimize every image.

Lazy load non-critical assets.

Avoid layout shift.

Avoid unnecessary re-render.

Keep animation GPU-friendly.

Target Lighthouse score above 95.

---

# Accessibility Rules

Use semantic HTML.

Provide descriptive alt text.

Keyboard navigation must work.

Buttons must be accessible.

Maintain heading hierarchy.

Meet WCAG AA contrast recommendations.

---

# Responsive Rules

Desktop

Immersive experience.

Tablet

Maintain composition.

Reduce spacing slightly.

Mobile

Stack vertically.

Preserve hierarchy.

Remove unnecessary decoration if required.

Never sacrifice readability.

---

# Coding Principles

One component.

One responsibility.

Small reusable files.

Readable naming.

Strong typing.

Meaningful interfaces.

No duplicated logic.

No magic numbers.

No unnecessary comments.

No dead code.

---

# Implementation Principles

Do not create a generic landing page.

Do not redesign the layout.

Do not replace authentic documentation with illustrations.

Do not simplify the Hero because it seems complex.

If a visual effect is technically expensive, replace it with a visually equivalent but more performant implementation.

Preserve the visual experience.

---

# Self Review Checklist

Before considering the Hero complete, verify:

✓ Modular architecture.

✓ Clean folder structure.

✓ Reusable components.

✓ Strong TypeScript typing.

✓ Responsive on all devices.

✓ Smooth motion.

✓ High performance.

✓ Accessible.

✓ Maintainable.

✓ Production ready.

If any item above is not satisfied, continue improving before finishing.

---

# Final Instruction

Think like a Senior Frontend Engineer working inside a professional product team.

Your job is not only to make the Hero work.

Your job is to build a Hero that another engineer can maintain, extend, and improve for years without rewriting its architecture.

Quality, maintainability, and scalability are equally important as visual fidelity.

End of Document.
