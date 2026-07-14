# 🚀 UTBEX Website - Developer Guide & Documentation

Selamat datang di repository resmi untuk pengembangan **UTBEX Website**. 
Dokumen ini dibuat khusus untuk developer yang akan memegang, memelihara, dan mengembangkan proyek ini. 

Tujuan utama dari dokumen ini adalah **menyelaraskan standar kode, menjaga keteraturan, dan mencegah bentrok (konflik/tabrakan) antar developer saat bekerja bersama.**

---

## 🛠️ Tech Stack Utama

Proyek ini dibangun dengan teknologi modern agar cepat, stabil, dan mudah dipelihara:
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Struktur Direktori Proyek

Proyek ini dirancang secara modular agar kode lebih rapi dan dapat digunakan ulang (reusable). Berikut adalah panduan folder untuk Anda:

- `/app` 👉 Tempat untuk routing halaman utama (Next.js App Router).
- `/chapters` 👉 Modul / bagian spesifik dari sebuah halaman (contoh: Hero Section, About, Portofolio).
- `/components` 👉 Komponen UI universal (Button, Navbar, Footer, dll) yang bisa dipakai di mana saja.
- `/content` 👉 Menyimpan file konten statis (teks, gambar, artikel).
- `/data` 👉 Berisi data mentah atau mock data (seperti JSON/TS array).
- `/lib` 👉 Utility functions / helper (fungsi kecil pendukung aplikasi).
- `/motion` 👉 Animasi spesifik (Framer Motion variants) agar UI terlihat dinamis.
- `/types` 👉 Definisi interface dan tipe data TypeScript global.
- `/public` 👉 Aset statis seperti gambar (JPG/PNG), fonts, atau ikon SVG.

> **⚠️ PENTING:** Jangan menempatkan file secara asal-asalan. Jika membuat komponen baru yang hanya dipakai di satu halaman spesifik, masukkan ke folder `/chapters` halaman tersebut. Jika bisa dipakai berulang kali, masukkan ke `/components`.

---

## 🚀 Cara Menjalankan Proyek (Getting Started)

1. **Pastikan Node.js terinstall (versi terbaru/LTS yang mendukung Next 16).**
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

## 📋 Aturan Main & Sinkronisasi Tim (WAJIB DIBACA)

Agar **TIDAK ADA KONFLIK / SALING TABRAK** kode antar developer, setiap orang yang berkontribusi WAJIB mengikuti SOP berikut:

### 1. Sistem Branching (Git)
- **DILARANG KERAS** melakukan commit/push langsung ke branch `main`.
- Selalu buat **branch baru** dari `main` yang paling terupdate sebelum mengerjakan tugas.
- Format penamaan branch:
  - `feat/nama-fitur` 👉 Untuk penambahan fitur baru.
  - `fix/nama-bug` 👉 Untuk perbaikan bug.
  - `refactor/nama-komponen` 👉 Untuk merapikan/restrukturisasi kode.
  - *Contoh: `feat/about-section` atau `fix/navbar-mobile`*

### 2. SOP Sebelum Ngoding (Pencegahan Tabrakan)
1. **Komunikasi:** Sebelum mengambil suatu *task* atau fitur, infokan di grup/tim agar developer lain tahu bagian mana yang sedang Anda pegang.
2. **Sinkronisasi:** Biasakan selalu menarik update terbaru dari `main` sebelum mulai coding di hari itu:
   ```bash
   git checkout main
   git pull origin main
   git checkout branch-kamu
   git merge main
   ```

### 3. Penulisan Kode & Styling
- **Gunakan TypeScript:** Berikan tipe data (interface/type) yang jelas untuk setiap Props komponen. Cek `/types` jika tipe tersebut dipakai secara global.
- **Tailwind CSS:** Gunakan *utility classes* Tailwind sebaik mungkin. Hindari membuat CSS manual kecuali sangat terpaksa (gunakan `/app/globals.css`).
- **Clean Code:** 
  - Hapus kode `console.log()` sebelum melakukan *Push*.
  - Rapikan kode dengan formatter (Prettier/ESLint) (`npm run lint`).
  - Beri komentar (comment) pada fungsi logika yang kompleks agar developer selanjutnya paham.

### 4. SOP Pull Request (PR) & Penggabungan Kode
- Setelah selesai, buat **Pull Request (PR)** untuk digabungkan ke `main`.
- Jangan me-*merge* PR Anda sendiri. Mintalah **minimal 1 developer lain (atau Lead Developer)** untuk me-review kode Anda.
- Jika ada *Merge Conflict*, diskusikan bersama developer yang membuat kode tersebut. Jangan sembarangan menghapus kode milik orang lain.

---

*Dengan mengikuti panduan di atas, kita memastikan aplikasi UTBEX berjalan optimal, rapi, cepat selesai, dan lingkungan kerja tim tetap harmonis tanpa konflik kode.*

**Selamat Ngoding! ☕💻**
