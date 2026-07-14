# 05_COMPONENT_SYSTEM.md
# PAGE 2 COMPONENT ARCHITECTURE
## Next.js + React Component System
### Version 1.0

---

# Philosophy

Satu komponen hanya memiliki satu tanggung jawab.

Component harus reusable.

Component harus mudah dipindahkan.

Component tidak boleh berisi data statis.

Semua konten berasal dari data terpisah.

---

# Folder Structure

src/

app/

page-2/

components/

sections/

hero/

what-we-do/

journey/

ecosystem/

impact/

gallery/

contact/

shared/

ui/

data/

animations/

hooks/

types/

assets/

---

# Page Structure

Page2

↓

Hero

↓

WhatWeDo

↓

Journey

↓

InnovationEcosystem

↓

ProofOfImpact

↓

Gallery

↓

Contact

---

# Hero

Components

HeroBackground

HeroGlow

HeroContent

HeroImage

HeroBadge

HeroCTA

HeroScrollIndicator

---

# What We Do

Components

SectionTitle

WorkCard

WorkGrid

WorkImage

WorkDescription

---

# Journey

Components

JourneyHeader

Timeline

TimelineItem

Biography

History

Philosophy

AwardsPreview

---

# Innovation Ecosystem

Components

EcosystemHeader

EcosystemDiagram

EcosystemCard

BrandCard

ProductCard

ConnectionLine

---

# Proof of Impact

Components

ImpactHeader

Counter

AwardCard

CertificateGallery

MediaCard

StatisticCard

---

# Gallery

Components

GalleryHeader

GalleryGrid

GalleryCard

GalleryLightbox

GalleryFilter

GalleryNavigation

---

# Contact

Components

ContactHeader

CTA

WhatsAppButton

EmailCard

SocialCard

LocationCard

Map

---

# Shared Components

GlassCard

GlassPanel

SectionHeader

AnimatedTitle

AnimatedText

GradientBackground

FloatingGlow

GradientButton

OutlineButton

Badge

Divider

Tag

Counter

Statistic

Marquee

ImageReveal

HoverCard

---

# UI Components

Button

Input

Textarea

Card

Dialog

Sheet

Drawer

Tooltip

Popover

Accordion

Carousel

Tabs

Avatar

Badge

---

# Data Structure

Semua data dipisahkan dari UI.

Contoh:

hero.ts

journey.ts

gallery.ts

impact.ts

contact.ts

ecosystem.ts

---

# Animation Structure

animations/

fade.ts

reveal.ts

parallax.ts

counter.ts

hover.ts

glass.ts

scroll.ts

timeline.ts

---

# Image Structure

assets/

hero/

journey/

gallery/

awards/

products/

branding/

logos/

---

# Coding Principles

Server Component sebagai default.

Client Component hanya jika membutuhkan:

Animation

Interaction

State

Browser API

---

# Naming Rules

PascalCase

HeroContent.tsx

GalleryGrid.tsx

ImpactCard.tsx

SectionHeader.tsx

Tidak menggunakan nama generik seperti:

component.tsx

card2.tsx

baru.tsx

test.tsx

---

# Component Rules

Reusable

Readable

Maintainable

Composable

Accessible

Responsive

---

# Styling Rules

Tailwind CSS

Utility First

Class Variants

No Inline Style

Consistent Spacing

Consistent Radius

Consistent Shadow

---

# Responsive Rules

Desktop First Experience

Tablet Optimized

Mobile Friendly

Tidak hanya responsive.

Tetapi tetap terasa premium.

---

# Performance

Lazy Image

Dynamic Import

Image Optimization

Code Splitting

Minimal Client Component

---

# Final Goal

Seluruh struktur komponen harus membuat proses development cepat, rapi, scalable, dan mudah dikembangkan tanpa mengubah fondasi website.