# 06_IMPLEMENTATION_GUIDE.md

# UTBEX DIGITAL EXPERIENCE SYSTEM

## STORY ARCHITECTURE IMPLEMENTATION GUIDE

Status:
FINAL

Priority:
HIGHEST

Audience:

Frontend Engineer

Creative Developer

AI Coding Assistant

Technical Lead

---

# Purpose

This document translates the Story Architecture System into a production-ready implementation.

The goal is not to recreate a design.

The goal is to preserve the emotional journey.

Every engineering decision should protect storytelling before implementation details.

---

# Read Before Coding

Before writing a single line of code, read the documentation in the following order.

00_BRAND_STRATEGY_BIBLE.md

↓

00_STORY_ARCHITECTURE_OVERVIEW.md

↓

01_STORY_FLOW.md

↓

02_CHAPTER_PURPOSE.md

↓

03_HUMAN_STORY_SYSTEM.md

↓

04_VISUAL_NARRATIVE_SYSTEM.md

↓

05_SCROLL_EXPERIENCE_SYSTEM.md

Only after understanding these documents should implementation begin.

---

# Primary Responsibility

You are not building pages.

You are building chapters.

Every component must preserve the narrative sequence.

Do not treat chapters as isolated UI blocks.

Treat them as connected scenes within one continuous experience.

---

# Folder Architecture

Recommended structure

src/

chapters/

01-first-impression/

02-belief/

03-human/

04-movement/

05-stories/

06-impact/

07-conversation/

components/

content/

motion/

photos/

hooks/

Each chapter owns its own content and presentation.

Shared UI belongs inside components.

---

# Component Philosophy

Each chapter has one responsibility.

Never merge two chapters into one component.

Never split one emotional chapter into multiple unrelated components.

Component boundaries should follow narrative boundaries.

---

# Data Architecture

Never hardcode stories.

Never hardcode photography.

Never hardcode milestones.

Recommended content schema

chapter

title

headline

description

emotion

media

quotes

statistics

cta

This keeps storytelling editable without touching UI.

---

# Motion Architecture

Motion should belong to chapters.

Not individual elements.

A chapter enters together.

A chapter exits together.

Avoid competing animations inside one viewport.

---

# Performance Strategy

Performance is part of trust.

Recommended goals

LCP under 2.5 seconds.

CLS below 0.1.

INP under 200 milliseconds.

60 FPS during scrolling whenever possible.

Remove animations before sacrificing performance.

---

# Responsive Behaviour

The story never changes.

Only layout changes.

Desktop

Editorial.

Tablet

Balanced.

Mobile

Focused.

Narrative consistency is mandatory.

---

# Image Loading

Hero

Priority loading.

Human Story

High priority.

Movement

Lazy load.

Stories

Lazy load.

Impact

Lazy load.

Footer

Lazy load.

Loading order should follow narrative importance.

---

# Accessibility

Every chapter must remain understandable without animation.

Every image requires meaningful alt text.

Headings must preserve semantic hierarchy.

Respect reduced-motion preferences.

Accessibility is part of storytelling.

---

# Content Integrity

Never shorten copy simply to fit a layout.

Adjust layout before changing meaning.

Content serves strategy.

Layout serves content.

---

# Engineering Constraints

Do not rename chapters.

Do not change chapter order.

Do not move photography between chapters without reviewing the Story Architecture.

Do not introduce new chapters without strategic approval.

---

# Animation Constraints

Avoid:

Bounce.

Spin.

Elastic motion.

Continuous floating.

Aggressive scaling.

Preferred:

Fade.

Opacity.

Depth.

Subtle parallax.

Reveal.

Motion should disappear into the experience.

---

# Review Process

After implementation verify

Story order.

Reading rhythm.

Photography order.

Motion rhythm.

Accessibility.

Responsive layout.

Performance.

Narrative continuity.

---

# Definition of Done

Implementation is complete only when:

The visitor experiences one uninterrupted journey.

Every chapter answers exactly one emotional question.

Scrolling feels natural.

Photography feels authentic.

Motion feels invisible.

The final experience feels like a documentary rather than a website.

---

# Final Principle

Engineering should never ask:

"Does this component work?"

Engineering should ask:

"Does this strengthen the story?"

If the answer is yes,

implementation is successful.

---

End of Document.
