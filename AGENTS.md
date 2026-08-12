<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UTBEX Architecture Guidelines

Ini adalah panduan KHUSUS untuk agen AI yang bekerja di repositori ini. Repositori ini telah direstorasi dan dibersihkan dari *over-engineering*.

## 1. Arsitektur Komponen Deklaratif (Modular)
- **DILARANG** membuat folder `motion`, `types`, `utils` di dalam direktori `components/section/`.
- Semua _sections_ harus berada dalam `components/section/[nama-section]`.
- Jika sebuah _section_ memiliki komponen turunan (seperti `Card`, `Header`), masukkan ke `components/section/[nama-section]/components`.
- Jika sebuah _section_ memiliki data statis (array teks/gambar), masukkan ke `components/section/[nama-section]/data`.

## 2. Animasi & Styling
- Gunakan Tailwind CSS murni untuk sebagian besar tugas (termasuk *Glassmorphism*).
- Jika membutuhkan animasi khusus (seperti saat _scroll_), gunakan `framer-motion` **secara langsung (inline)** di dalam komponen terkait. 
- **DILARANG** membuat file terpisah hanya untuk menyimpan variasi objek *framer-motion*, kecuali terpaksa maka simpan di `components/ui/motion.ts`.

## 3. Filosofi Desain
- Tampilan harus *modern*, *Gen Z*, berkesan *sleek*, dan memanfaatkan *dark mode* dipadukan dengan aksen warna UTBEX Maroon.
- Selalu perhatikan tag semantik HTML5 (`<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`) demi optimasi SEO.
