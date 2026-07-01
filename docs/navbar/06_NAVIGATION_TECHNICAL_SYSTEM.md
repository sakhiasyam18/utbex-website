# 06_NAVIGATION_TECHNICAL_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM

## NAVIGATION TECHNICAL SYSTEM

Version: 1.0

Status: LOCKED

Language: English

Audience:
Frontend Engineer

AI Coding Assistant

---

# Mission

Implement the Navigation exactly as defined in the Navigation documentation.

Navigation is a global component.

Every page and every section depends on it.

Never redesign.

Never simplify.

Never introduce a different navigation pattern.

---

# Folder Structure

src/

components/

navigation/

Navigation.tsx

index.ts

components/

NavigationLogo.tsx

NavigationLinks.tsx

NavigationCTA.tsx

NavigationGlass.tsx

NavigationDrawer.tsx

NavigationBackdrop.tsx

NavigationIndicator.tsx

data/

navigationContent.ts

navigationLinks.ts

motion/

navigationMotion.ts

navigationReveal.ts

navigationHover.ts

types/

navigation.ts

hooks/

useScrollNavigation.ts

useActiveSection.ts

utils/

navigationHelpers.ts

---

# Component Responsibility

Navigation.tsx

Global orchestrator.

No business logic.

---

NavigationLogo.tsx

Brand identity.

Highest hierarchy.

---

NavigationLinks.tsx

Primary navigation.

Desktop and tablet.

---

NavigationCTA.tsx

Single primary action.

---

NavigationGlass.tsx

Glass surface.

Blur.

Ambient lighting.

Shadow.

---

NavigationDrawer.tsx

Mobile navigation only.

Independent component.

---

NavigationBackdrop.tsx

Blurred overlay behind drawer.

Handles focus.

---

NavigationIndicator.tsx

Active section indicator.

Never duplicated.

---

# State Management

Idle

↓

Hover

↓

Active

↓

Scrolled

↓

Drawer Open

↓

Drawer Closed

Navigation state must remain predictable.

---

# Data Layer

Never hardcode links.

Navigation labels

↓

navigationLinks.ts

CTA

↓

navigationContent.ts

Future CMS ready.

---

# Scroll Detection

Detect active section.

Smooth updates.

No flickering.

No rapid state changes.

Throttle if necessary.

---

# Performance

Transform only.

Opacity only.

GPU acceleration.

Passive scroll listeners.

Avoid layout recalculation.

---

# Accessibility

Semantic nav element.

Keyboard navigation.

Visible focus state.

ARIA labels.

Escape closes drawer.

Focus trap inside drawer.

WCAG AA compliant.

---

# Responsive Strategy

Desktop

Floating navigation.

Tablet

Condensed navigation.

Mobile

Glass drawer.

Same visual language.

---

# Engineering Rules

Strict TypeScript.

Reusable components.

No duplicated logic.

Clean separation of concerns.

Future localization ready.

Production ready.

---

# Validation Checklist

✓ Modular.

✓ Responsive.

✓ Accessible.

✓ Lightweight.

✓ Production ready.

✓ Consistent with Hero.

✓ CMS ready.

---

# Final Principle

The Navigation should become one of the most reusable components in the entire project.

It should quietly support every future page without ever requiring redesign.

---

End of Document.