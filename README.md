# 🚀 UTBEX Website - Developer Guide

Selamat datang di repository resmi untuk pengembangan **UTBEX Website**. 
Dokumen ini dibuat agar setiap *developer* (atau Agen AI) yang menangani proyek ini mengikuti standar *Clean Architecture* yang telah diterapkan.

---

## 🛠️ Tech Stack Utama

Proyek ini dibangun dengan teknologi modern agar cepat, stabil, dan minimalis secara arsitektur:
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Struktur Direktori Proyek

Proyek ini dirancang **SANGAT MODULAR** dan **DEKLARATIF**. Tidak ada *over-engineering*.

- `/app` 👉 Tempat untuk routing halaman utama (Next.js App Router).
- `/components/atmosphere` 👉 Efek visual latar belakang (seperti *ambient glow* global).
- `/components/section` 👉 Direktori PALING PENTING. Semua *section* di halaman utama berada di sini.
- `/components/ui` 👉 Komponen universal dan utilitas (seperti `motion.ts` sederhana atau `Lightbox.tsx`).
- `/public` 👉 Aset statis seperti gambar (JPG/PNG/WebP), fonts, atau ikon SVG.

### Anatomi Sebuah Section (Penting!)
Di dalam `/components/section/`, setiap *section* (misalnya `hero`, `about`, `footer`) memiliki anatomi standar sebagai berikut:
```text
/components/section/about/
├── About.tsx                 (File orkestrator utama)
├── components/               (Folder pecahan komponen UI kecil)
│   ├── AboutHeader.tsx
│   ├── AboutCards.tsx
│   └── ...
└── data/                     (Folder untuk data statis array/teks)
    └── aboutData.ts
```
> **⚠️ LARANGAN KERAS:** Jangan membuat folder `motion`, `utils`, atau `types` yang bersarang di dalam sebuah *section*. Animasi harus ditulis secara deklaratif/inline, tipe data cukup ditulis di file komponen yang bersangkutan.

---

## 🚀 Cara Menjalankan Proyek (Getting Started)

1. **Pastikan Node.js terinstall (versi terbaru/LTS).**
2. **Clone repository ini** ke komputer Anda.
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📋 Aturan Main (Clean Code & SEO)
1. **Semantik HTML:** Selalu gunakan tag semantik (`<article>`, `<section>`, `<header>`, `<footer>`, `<figure>`) agar SEO optimal, bukan sekadar `<div>`.
2. **Tailwind CSS:** Gunakan *utility classes* semaksimal mungkin.
3. **Glassmorphism & Vibe:** UTBEX mengusung visual *Gen Z*, berkesan elegan, dan profesional. Gunakan efek kaca (*backdrop-blur*), warna gelap, dan transisi halus di setiap elemen yang interaktif.

**Selamat Ngoding! ☕💻**
