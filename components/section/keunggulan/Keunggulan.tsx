"use client";

/**
 * components/section/keunggulan/Keunggulan.tsx
 * ----------------------------------------------------------------------
 * Komponen pembungkus untuk seksi "Keunggulan UTBEX".
 * 
 * Layout dibagi menjadi dua kolom utama (di layar Desktop XL):
 * 1. KeunggulanVisual (Kiri)  : Gambar/Foto Arik Dwi Asmara.
 * 2. KeunggulanTable (Kanan) : Tabel daftar keunggulan & paragraf penutup.
 */
import { KeunggulanVisual } from "./components/KeunggulanVisual";
import { KeunggulanTable } from "./components/KeunggulanTable";

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative w-full bg-[#f8f9fa] text-utbex-dark overflow-hidden flex flex-col xl:flex-row">
      <KeunggulanVisual />
      <KeunggulanTable />
    </section>
  );
}
