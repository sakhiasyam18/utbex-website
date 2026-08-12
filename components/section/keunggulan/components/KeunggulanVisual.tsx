import Image from "next/image";

export function KeunggulanVisual() {
  return (
    <>
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Abstract curvy lines decoration (right side) */}
      <svg className="absolute bottom-0 right-0 w-[30vw] h-auto text-black/10 pointer-events-none" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200 C 100 150, 200 250, 300 150 S 450 100, 500 0" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M50 200 C 150 180, 250 220, 350 120 S 480 80, 500 50" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Left side: Image */}
      <figure className="relative w-full lg:w-5/12 h-[50vh] lg:h-auto min-h-[400px] m-0">
        <Image
          src="/images/foto-penyerahan-penghargaan-utbex-arif-dwi-asmara-dengan-pemerintah.avif"
          alt="Arik Dwi Asmara menerima penghargaan"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        {/* Gradient overlay to smoothly blend image to the background on mobile, or right edge on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#f8f9fa] via-transparent to-transparent opacity-80 lg:opacity-20 pointer-events-none" />
      </figure>
    </>
  );
}
