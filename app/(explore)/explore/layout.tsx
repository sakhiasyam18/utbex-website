// app/(explore)/explore/layout.tsx
//
// Isolated layout for the Interactive Evidence Explorer.
// No Navigation. No shared UI from the main website.
// Full-screen immersive dark world.
//
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore | UTBEX Indonesia",
  description:
    "Jelajahi perjalanan, karya, dan dampak UTBEX dalam pengalaman digital interaktif.",
};

export default function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-p2-primary/30 selection:text-white">
      {children}
    </div>
  );
}
