"use client";
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
