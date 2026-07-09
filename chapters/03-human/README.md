# About Section — Integration Notes

Implements `01_ABOUT_BIBLE.md` through `06_ABOUT_IMPLEMENTATION_GUIDE.md` exactly as locked. Scope is Chapter Two only — no Hero changes, no Portfolio, no Contact.

## Usage

```tsx
import About from "@/sections/about";

export default function Page() {
  return (
    <main>
      {/* <Hero /> */}
      <About />
    </main>
  );
}
```

## Things you'll need to wire up before shipping

1. **Real photography.** `data/aboutGallery.ts` currently points at placeholder
   paths (`/images/about/*.jpg`) since no authorized documentary assets were
   provided. Drop real files into `public/images/about/` with the same
   filenames, or update the `src` values — no component changes required.
2. **Brand tokens.** Components reference `--utbex-maroon` and
   `--utbex-off-white` CSS variables with inline fallbacks
   (`#7A1F2B` / `#FAF9F7`) so the section renders correctly standalone.
   Point these at your actual Hero design tokens (Tailwind theme vars or
   global CSS custom properties) so About inherits the exact same palette
   as Hero rather than the fallback approximation.
3. **Fonts.** No font is hardcoded here — it inherits whatever `next/font`
   family Hero already sets globally, per the "continue Hero" rule.
4. **CTA destination.** `data/aboutContent.ts` → `cta.href` is set to
   `/journey` as a placeholder; point it at the real Portfolio/Journey route
   once it exists.

## What's intentionally not included

- No new visual language, spacing scale, or typography choices — this
  reuses whatever tokens Hero already defines rather than inventing its own.
- No stock or AI-generated imagery — only real documentation photography
  should ever populate `aboutGallery.ts`.
- No decorative motion beyond the tokens locked in `04_ABOUT_MOTION_SYSTEM.md`
  (fade, soft translate, gentle stagger, very soft parallax via hover only).
  `prefers-reduced-motion` disables the ambient background float automatically.

## Accessibility

- Section is labelled via `aria-labelledby="about-headline"`.
- All photography has descriptive alt text in `aboutGallery.ts`; background
  glow elements are `aria-hidden`.
- CTA is a real `<a>` with visible focus styles inherited from your global
  focus-ring utility (add one globally if not already present).
