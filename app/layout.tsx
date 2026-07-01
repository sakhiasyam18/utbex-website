// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="id">
      <body className={`${inter.className} bg-utbex-light flex flex-col min-h-screen selection:bg-utbex-maroon/20 selection:text-utbex-maroon`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}