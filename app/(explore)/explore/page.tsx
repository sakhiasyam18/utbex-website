// app/(explore)/explore/page.tsx
//
// Entry point for the Interactive Evidence Explorer.
// Server Component — renders the client-side WorldCanvas.
//
// This page is deliberately minimal.
// All complexity lives in WorldCanvas and its children.

import { WorldCanvas } from "@/components/explore/world/WorldCanvas";

export default function ExplorePage() {
  return <WorldCanvas />;
}
