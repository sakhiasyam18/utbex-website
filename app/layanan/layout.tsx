import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arik Dwi Asmara | From Ideas To Impact",
  description: "Sebuah perjalanan inovasi, dari ide sederhana menjadi dampak nyata bagi masyarakat.",
};

export default function Page2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-p2-primary/30 selection:text-white overflow-hidden">
      {/* Global Background Effects for Page 2 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        {/* Soft Red/Maroon glow top right */}
        <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-p2-dark-red/20 blur-[120px] mix-blend-screen" />
        {/* Primary Red glow bottom left */}
        <div className="absolute top-[60%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-p2-primary/10 blur-[120px] mix-blend-screen" />
      </div>

      <main className="relative z-10 w-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
