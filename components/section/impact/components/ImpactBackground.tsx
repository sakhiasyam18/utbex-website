/**
 * components/section/impact/components/ImpactBackground.tsx
 * ----------------------------------------------------------------------
 * Komponen murni visual (dekoratif) untuk latar belakang (background) seksi Impact.
 * Berisi elemen-elemen abstrak seperti:
 * - Lingkaran bercahaya (ambient glow) berwarna marun dan rose yang diblur.
 * - Lapisan noise (tekstur butiran) transparan yang di-generate via SVG base64 
 *   untuk memberikan kesan kedalaman/tekstur pada latar belakang putih.
 */
import React from "react";

export const ImpactBackground = () => (
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    {/* Noise texture overlay for a physical, premium feel */}
    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
    
    {/* Ambient glowing orbs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-utbex-maroon/5 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[120px]" />
  </div>
);
