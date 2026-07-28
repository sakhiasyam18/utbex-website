// app/(main)/layout.tsx
import { Navigation } from "@/components/navigation";
import { HeroVisibilityProvider } from "@/components/providers/HeroVisibilityContext";
import { LayoutShift } from "@/components/providers/LayoutShift";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { FramerMotionProvider } from "@/components/providers/FramerMotionProvider";
import { ScrollProgress } from "@/components/navigation/components/ScrollProgress";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LenisProvider>
        <HeroVisibilityProvider>
          <FramerMotionProvider>
            <Navigation />
            <ScrollProgress />
            <LayoutShift>{children}</LayoutShift>
          </FramerMotionProvider>
        </HeroVisibilityProvider>
      </LenisProvider>
    </>
  );
}
