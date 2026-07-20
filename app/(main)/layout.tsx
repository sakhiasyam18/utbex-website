// app/(main)/layout.tsx
import { Navigation } from "@/components/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
    </>
  );
}
