# 09A_EXPERIENCE_LAYOUT_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM
## EXPERIENCE LAYOUT SYSTEM
### Page 02 — Interactive Experience Architecture

> Version: 1.0 (Locked)

Dokumen ini mendefinisikan struktur internal setiap Experience pada Interactive Evidence Explorer.

Satu Experience bukan sebuah card.

Satu Experience bukan sebuah section.

Satu Experience adalah sebuah ruang eksplorasi yang berisi kumpulan evidence yang saling terhubung.

Dokumen ini menjadi acuan utama bagi AI dalam menyusun layout, interaksi, dan hubungan antar evidence.

---

# 1. EXPERIENCE DEFINITION

Experience bukan:

- Satu Card
- Satu Kotak
- Satu Gambar
- Satu Komponen

Experience adalah:

Sebuah ruang eksplorasi.

Di dalam satu Experience terdapat berbagai evidence yang saling mendukung untuk menjelaskan satu cerita.

---

# 2. EXPERIENCE OBJECTIVE

Setiap Experience harus:

- Mengajak pengguna berhenti.
- Memberikan ruang eksplorasi.
- Menampilkan evidence.
- Menyampaikan cerita.
- Menghubungkan satu evidence dengan evidence lainnya.
- Mengajak pengguna melanjutkan perjalanan.

Experience bukan hanya dilewati.

Experience harus dieksplorasi.

---

# 3. EXPERIENCE STRUCTURE

Seluruh Experience wajib mengikuti struktur berikut.

Experience

↓

Entry Animation

↓

Experience Title

↓

Editorial Layout

↓

Evidence Cluster

↓

Interaction Layer

↓

Drawer Layer

↓

Exit Transition

Tidak diperbolehkan mengubah urutan ini.

---

# 4. EXPERIENCE FLOW

Camera

↓

Arrive

↓

Stop

↓

User Explore

↓

User Hover

↓

User Click

↓

User Read

↓

User Close

↓

Continue Scroll

↓

Camera Exit

↓

Next Experience

Camera tidak boleh terus bergerak tanpa memberi waktu eksplorasi.

---

# 5. EXPERIENCE DENSITY

Jumlah evidence dalam satu Experience.

Minimum

4 Evidence

Ideal

6–10 Evidence

Maximum

12 Evidence

Apabila evidence kurang dari empat, Experience dianggap belum lengkap.

---

# 6. EXPERIENCE COMPOSITION

Setiap Experience terdiri dari kombinasi beberapa jenis evidence.

Contoh.

Community

↓

Photo

↓

Photo

↓

Award

↓

Video

↓

PDF

↓

Story

Experience tidak boleh hanya terdiri dari satu card besar.

---

# 7. EXPERIENCE GRID

Desktop

2–3 Column

Tablet

2 Column

Mobile

1 Column

Grid bersifat editorial.

Tidak menggunakan layout dashboard.

Layout harus terasa seperti halaman majalah modern.

---

# 8. EDITORIAL LAYOUT

Evidence tidak disusun secara simetris.

Gunakan variasi:

- Large Card
- Medium Card
- Small Card
- Wide Card
- Tall Card

Layout harus menciptakan ritme visual.

Bukan sekadar grid kotak.

---

# 9. HERO EVIDENCE

Setiap Experience wajib memiliki:

1 Hero Evidence.

Hero Evidence menjadi pusat perhatian.

Hero Evidence dapat berupa:

- Foto terbaik
- Video
- Dokumentasi utama
- Award utama
- Produk utama

---

# 10. SUPPORTING EVIDENCE

Selain Hero Evidence.

Experience harus memiliki Supporting Evidence.

Contoh.

- Dokumentasi
- Behind The Scene
- Workshop
- Produk
- Arsip

Supporting Evidence menjelaskan Hero Evidence.

---

# 11. DEEP DIVE EVIDENCE

Minimal satu Evidence dalam setiap Experience harus dapat dibuka lebih dalam.

Contoh.

- PDF
- HKI
- Company Profile
- Award Detail
- Artikel
- Video

Deep Dive tidak wajib dibuka pengguna.

Namun selalu tersedia.

---

# 12. CARD TYPES

Component yang dapat digunakan.

- Photo
- Video
- Award
- PDF
- Story
- Timeline
- Quote
- Product
- Partner
- Government
- Workshop
- HKI
- Certificate

Tidak diperbolehkan membuat Card baru tanpa kebutuhan nyata.

---

# 13. CARD PRIORITY

Hero Evidence

↓

Primary Evidence

↓

Secondary Evidence

↓

Supporting Evidence

Prioritas menentukan ukuran visual.

---

# 14. CARD BEHAVIOR

Saat Hover.

Scale

1

↓

1.03

↓

Soft Shadow

↓

Soft Glow

↓

Border Highlight

↓

Title Fade In

↓

Subtitle Fade In

↓

Year

↓

Category

↓

Interaction Hint

Click to Explore

Hover digunakan untuk memberi preview.

Hover tidak membuka detail.

---

# 15. CLICK BEHAVIOR

Saat Click.

Freeze Card

↓

Highlight Selected Card

↓

Open Drawer

↓

Show Detail

↓

Photo

↓

Description

↓

Metadata

↓

Evidence

↓

Related Evidence

↓

Close

↓

Return

Posisi Camera tidak berubah.

---

# 16. DRAWER STRUCTURE

Drawer dapat berisi.

- Judul
- Tahun
- Lokasi
- Deskripsi
- Gallery
- Video
- PDF
- Award
- HKI
- Related Story

Drawer merupakan lapisan kedua dari Experience.

---

# 17. CAMERA BEHAVIOR

Camera

↓

Arrive

↓

Ease

↓

Stop

↓

Allow Exploration

↓

User Hover

↓

User Click

↓

User Read

↓

User Close

↓

Continue Scroll

↓

Exit

↓

Next Experience

Camera selalu dikendalikan oleh sistem.

Camera tidak pernah dikendalikan pengguna.

---

# 18. INTERACTION RULE

Pengguna hanya melakukan interaksi sederhana.

✅ Scroll

↓

Memindahkan Camera

✅ Hover

↓

Preview

↓

Highlight

↓

Reveal Metadata

↓

Show Interaction Hint

✅ Click

↓

Open Drawer

↓

Read Story

↓

Watch Video

↓

View PDF

↓

Explore Evidence

↓

Close

↓

Continue Journey

---

# 19. FORBIDDEN INTERACTION

Tidak diperbolehkan menggunakan.

❌ Drag Canvas

❌ Free Camera

❌ Mini Map

❌ WASD Navigation

❌ Orbit Camera

❌ Manual Camera Zoom

❌ Joystick Navigation

❌ Infinite Canvas Navigation

Seluruh eksplorasi dilakukan menggunakan.

- Scroll
- Hover
- Click

---

# 20. EXPERIENCE STATE

Setiap Experience memiliki empat state.

Arrival

↓

Explore

↓

Deep Dive

↓

Exit

State harus jelas.

Tidak boleh saling bertabrakan.

---

# 21. RELATED EVIDENCE

Setiap Evidence dapat memiliki hubungan.

Workshop

↓

Produk

↓

Branding

↓

HKI

↓

Award

↓

Impact Story

Pengguna harus memahami hubungan antar evidence.

Bukan melihat evidence secara acak.

---

# 22. EMPTY EXPERIENCE

Apabila Experience belum memiliki evidence.

Jangan render Experience.

Tidak diperbolehkan menggunakan placeholder kosong sebagai Experience.

---

# 23. RESPONSIVE RULE

Desktop

Editorial Layout

Tablet

Simplified Editorial Layout

Mobile

Single Column Narrative Layout

Storytelling harus tetap terjaga pada seluruh ukuran layar.

---

# 24. PERFORMANCE RULE

Drawer hanya dirender saat dibutuhkan.

Gallery menggunakan Lazy Loading.

Video tidak Autoplay.

PDF tidak dimuat sebelum dibuka.

Hover Animation maksimal 200ms.

Semua animasi menggunakan GPU Friendly Properties.

---

# 25. AI IMPLEMENTATION RULES

AI wajib mengikuti seluruh aturan berikut.

- Jangan menganggap Experience sebagai satu card.
- Bangun Experience sebagai ruang eksplorasi.
- Setiap Experience wajib memiliki Hero Evidence.
- Setiap Experience wajib memiliki Supporting Evidence.
- Setiap Experience wajib memiliki minimal satu Deep Dive.
- Camera wajib berhenti pada setiap Experience.
- Hover hanya Preview.
- Click membuka Drawer.
- Camera tidak berubah ketika Drawer terbuka.
- Drawer tidak mengganggu Story Flow.
- Jangan membuat layout dashboard.
- Jangan membuat gallery biasa.
- Jangan membuat infinite canvas.
- Jangan membuat free navigation.
- Jangan membuat interaction di luar Scroll, Hover, dan Click.

AI tidak diperbolehkan mengambil keputusan desain di luar spesifikasi dokumen ini.

---

# 26. RELATIONSHIP

Dokumen ini melengkapi.

05_EXPERIENCE_SYSTEM.md

08_COMPONENT_SYSTEM.md

09_INTERACTION_SYSTEM.md

Seluruh implementasi Experience wajib mengikuti ketiga dokumen tersebut.

---

# 27. NEXT DOCUMENT

Lanjut ke.

# 10_ANIMATION_SYSTEM.md

---

# Project Lock

Status:

LOCKED

Satu Experience bukan sebuah card.

Satu Experience adalah ruang eksplorasi yang membawa pengguna menemukan evidence, memahami cerita, dan membangun kepercayaan melalui interaksi sederhana yang terarah.

Setiap implementasi wajib mengikuti spesifikasi ini tanpa pengecualian.