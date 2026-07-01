# 10_PORTFOLIO_TECHNICAL_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM

## PORTFOLIO TECHNICAL SYSTEM

Version: 1.0

Status: LOCKED

Language: English

Audience:
Frontend Engineer
AI Coding Assistant

---

# Mission

Implement the Portfolio section exactly as defined in all previous Portfolio documents.

Do not redesign.

Do not simplify.

Do not merge unrelated responsibilities.

Engineering exists to preserve the experience.

---

# Folder Structure

src/

sections/

portfolio/

Portfolio.tsx

index.ts

components/

PortfolioHeader.tsx

FeaturedStory.tsx

ProjectStory.tsx

ProjectMosaic.tsx

ProjectCard.tsx

ProjectImage.tsx

EvidenceAnnotation.tsx

PartnerEcosystem.tsx

PortfolioCTA.tsx

BackgroundLighting.tsx

DocumentaryCaption.tsx

data/

portfolioContent.ts

portfolioProjects.ts

portfolioPartners.ts

motion/

portfolioMotion.ts

portfolioReveal.ts

portfolioHover.ts

types/

portfolio.ts

utils/

portfolioHelpers.ts

---

# Component Responsibility

Portfolio.tsx

Section orchestrator.

No business logic.

No hardcoded content.

---

PortfolioHeader.tsx

Section label.

Headline.

Supporting paragraph.

---

FeaturedStory.tsx

Single documentary story.

Highest visual priority.

---

ProjectStory.tsx

Narrative project component.

Human-first storytelling.

---

ProjectMosaic.tsx

Curated supporting projects.

Controlled asymmetry.

---

ProjectCard.tsx

Reusable story container.

Never generic UI card.

---

ProjectImage.tsx

Handles image presentation.

Cropping.

Aspect ratio.

Optimization.

---

EvidenceAnnotation.tsx

Small documentary evidence.

Context only.

Never marketing badges.

---

PartnerEcosystem.tsx

Partner logos.

Quiet trust.

No visual dominance.

---

PortfolioCTA.tsx

Bridge toward Contact.

---

BackgroundLighting.tsx

Very subtle atmosphere.

No distraction.

---

# Data Layer

Never hardcode content.

All projects originate from

portfolioProjects.ts

Text from

portfolioContent.ts

Partners from

portfolioPartners.ts

---

# Image Rules

Always use next/image.

Priority only for the first featured image.

Responsive sizes.

Avoid CLS.

Lazy load remaining images.

---

# Performance

Target Lighthouse 95+

Minimize client JavaScript.

Lazy motion where possible.

Optimize every asset.

---

# Accessibility

Semantic HTML.

Proper heading hierarchy.

Keyboard navigation.

Meaningful alt text.

Decorative layers

aria-hidden="true"

WCAG AA compliant.

---

# Responsive Strategy

Desktop

Editorial layout.

Tablet

Maintain hierarchy.

Mobile

One story at a time.

No compressed grids.

---

# Engineering Rules

Single Responsibility.

Reusable components.

Strict TypeScript.

No any.

No duplicated logic.

Future CMS ready.

Future localization ready.

Production ready.

---

# Validation Checklist

✓ Story driven.

✓ Responsive.

✓ Accessible.

✓ Optimized.

✓ Modular.

✓ Maintainable.

✓ Consistent with Hero and About.

---

# Final Principle

The engineering should disappear behind the storytelling.

A future developer should immediately understand where every responsibility belongs.

The codebase should be as calm and organized as the interface itself.

---

End of Document.
