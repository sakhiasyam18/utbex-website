// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UTBEX Indonesia | From Ideas To Impact",
  description: "Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-utbex-canvas flex flex-col min-h-screen selection:bg-utbex-maroon/20 selection:text-utbex-maroon`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}