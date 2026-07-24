// app/(main)/layout.tsx
import { Navigation } from "@/components/navigation";
import { HeroVisibilityProvider } from "@/components/providers/HeroVisibilityContext";
import { LayoutShift } from "@/components/providers/LayoutShift";
import { LenisProvider } from "@/components/providers/LenisProvider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LenisProvider>
        <HeroVisibilityProvider>
          <Navigation />
          <LayoutShift>{children}</LayoutShift>
        </HeroVisibilityProvider>
      </LenisProvider>
    </>
  );
}
