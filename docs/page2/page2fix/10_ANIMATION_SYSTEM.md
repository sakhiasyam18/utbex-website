# 10_ANIMATION_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM
## ANIMATION SYSTEM
### Page 02 — Motion Behavior & Animation Specification

> Version: 1.0 (Locked)

Dokumen ini mendefinisikan seluruh sistem animasi pada Interactive Evidence Explorer.

Animation bukan dekorasi.

Animation adalah media untuk memandu perhatian pengguna, memperjelas hubungan antar evidence, dan membuat eksplorasi terasa hidup tanpa mengganggu storytelling.

Seluruh animation wajib mengikuti spesifikasi berikut.

---

# 1. Animation Objective

Animation digunakan untuk:

- Membimbing perhatian pengguna.
- Memberikan feedback.
- Memperjelas hierarki.
- Membuat eksplorasi terasa natural.
- Menjelaskan perpindahan state.
- Meningkatkan kualitas pengalaman.

Animation bukan untuk pamer teknologi.

---

# 2. Animation Principle

Animation harus:

- Smooth.
- Calm.
- Elegant.
- Premium.
- Documentary.
- Purpose Driven.

Animation tidak boleh terasa:

- Berlebihan.
- Cepat.
- Berisik.
- Mengganggu.
- Gaming Style.

---

# 3. Animation Hierarchy

Animation dibagi menjadi lima level.

Ambient Motion

↓

Camera Motion

↓

Experience Transition

↓

Component Motion

↓

Interaction Motion

Setiap level memiliki tugas yang berbeda.

---

# 4. Ambient Motion

Background selalu hidup.

Namun sangat halus.

Contoh.

- Gradient Drift.
- Noise Movement.
- Soft Glow.
- Floating Blur.

Kecepatan sangat lambat.

Pengguna hampir tidak menyadarinya.

---

# 5. Camera Motion

Camera dikendalikan oleh sistem.

Camera hanya bergerak ketika pengguna melakukan scroll.

Camera tidak pernah:

- Drag.
- Orbit.
- Zoom Manual.
- Free Move.

Camera hanya memiliki tiga state.

Move

↓

Stop

↓

Move

---

# 6. Camera Stop

Setiap Experience memiliki Camera Stop.

Camera

↓

Ease In

↓

Stop

↓

Allow Exploration

↓

Ease Out

↓

Next Experience

Camera wajib berhenti.

Tidak diperbolehkan terus bergerak sepanjang halaman.

---

# 7. Experience Entry

Saat Camera tiba.

Experience melakukan Entry Animation.

Urutan.

Background

↓

Hero Evidence

↓

Supporting Evidence

↓

Micro Motion

↓

Interaction Ready

Animation berlangsung bertahap.

Tidak semuanya muncul bersamaan.

---

# 8. Experience Exit

Saat pengguna melanjutkan scroll.

Interaction dinonaktifkan.

↓

Evidence Fade

↓

Camera Move

↓

Next Experience

Exit tidak boleh terasa terputus.

---

# 9. Hero Evidence Animation

Hero Evidence selalu muncul pertama.

Animasi.

Opacity

0

↓

100

Scale

0.97

↓

1

Duration

600–900 ms

Ease

Out

---

# 10. Supporting Evidence Animation

Supporting Evidence muncul bergantian.

Menggunakan stagger animation.

Contoh.

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

Jangan muncul bersamaan.

---

# 11. Hover Animation

Saat Hover.

Card

↓

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

Year Fade In

↓

Category Fade In

↓

Interaction Hint

Click to Explore

Hover hanya memberikan preview.

Hover tidak membuka detail.

---

# 12. Hover Duration

Scale

150–200 ms

Glow

200 ms

Text

150 ms

Border

150 ms

Semua menggunakan Ease Out.

---

# 13. Click Animation

Saat Click.

Card

↓

Freeze

↓

Highlight

↓

Drawer Slide In

↓

Content Reveal

↓

Interaction Ready

Camera tetap diam.

Camera tidak berpindah.

---

# 14. Drawer Animation

Drawer muncul secara bertahap.

Overlay

↓

Drawer

↓

Title

↓

Description

↓

Gallery

↓

Evidence

↓

Related Content

Drawer tidak boleh muncul sekaligus.

---

# 15. Drawer Close

Close

↓

Fade Content

↓

Drawer Slide Out

↓

Return Focus

↓

Continue Exploration

Posisi Camera tidak berubah.

---

# 16. Gallery Animation

Gallery menggunakan:

Fade

↓

Scale

↓

Lazy Load

Tidak menggunakan Carousel otomatis.

Tidak menggunakan Infinite Slider.

---

# 17. Image Hover

Image

↓

Scale

↓

Glow

↓

Shadow

↓

Metadata

↓

Click Hint

Hover selalu memberi feedback.

---

# 18. Video Animation

Thumbnail

↓

Hover

↓

Play Icon Reveal

↓

Click

↓

Open Player

Video tidak autoplay.

---

# 19. PDF Animation

PDF Card

↓

Hover

↓

Highlight

↓

Click

↓

Open Viewer

↓

Load PDF

PDF dimuat setelah Viewer terbuka.

---

# 20. Timeline Animation

Timeline muncul mengikuti scroll.

2014

↓

2019

↓

2021

↓

2023

Setiap tahun muncul secara bertahap.

Tidak sekaligus.

---

# 21. Evidence Cluster Animation

Saat Camera berhenti.

Cluster

↓

Hero Evidence

↓

Supporting Evidence

↓

Interaction Enabled

Pengguna dapat mulai mengeksplorasi.

---

# 22. Exploration State

Saat Camera berhenti.

Pengguna bebas.

- Hover.
- Click.
- Open Drawer.
- Read.
- Watch Video.
- Open PDF.

Camera tetap diam.

Storytelling tetap berjalan.

---

# 23. Interaction Lock

Selama Drawer terbuka.

Camera tidak bergerak.

Scroll tidak memindahkan Experience.

Pengguna fokus pada evidence.

Setelah Drawer ditutup.

Story kembali aktif.

---

# 24. Scroll Continue

Setelah pengguna selesai.

Scroll

↓

Camera Move

↓

Exit Animation

↓

Next Experience

Transisi tetap halus.

---

# 25. Animation Duration

Micro

100–150 ms

Hover

150–200 ms

Component

300–500 ms

Hero

600–900 ms

Camera

800–1400 ms

Durasi harus konsisten.

---

# 26. Easing

Gunakan.

Ease Out

Ease In Out

Ease Standard

Tidak menggunakan:

Bounce

Elastic

Spring berlebihan

Animation harus terasa premium.

---

# 27. Reduced Motion

Jika pengguna mengaktifkan Reduced Motion.

Nonaktifkan.

- Floating Motion.
- Parallax.
- Glow Drift.
- Camera Interpolation.

Tetap pertahankan:

Opacity.

Fade.

Visibility.

---

# 28. GPU Friendly Rules

Gunakan hanya.

Transform

Opacity

Scale

Rotate ringan

Hindari.

Width Animation

Height Animation

Top

Left

Margin Animation

Layout Thrashing

---

# 29. Animation Sequence

Experience

↓

Entry

↓

Hero

↓

Supporting

↓

Hover

↓

Click

↓

Drawer

↓

Close

↓

Exit

↓

Next Experience

Urutan tidak boleh berubah.

---

# 30. AI IMPLEMENTATION RULES

AI wajib mengikuti aturan berikut.

- Camera wajib berhenti pada setiap Experience.
- Hover selalu memberikan feedback visual.
- Hover selalu menampilkan metadata.
- Hover selalu menampilkan "Click to Explore".
- Click selalu membuka Drawer.
- Drawer tidak memindahkan Camera.
- Drawer tidak membuka halaman baru.
- Hero muncul lebih dahulu daripada Supporting Evidence.
- Supporting Evidence menggunakan stagger animation.
- Gallery menggunakan lazy loading.
- Video tidak autoplay.
- PDF dimuat saat dibuka.
- Jangan menggunakan animation yang terasa seperti game.
- Jangan menggunakan bounce berlebihan.
- Jangan menggunakan transition acak.
- Jangan mengubah urutan animation.

---

# 31. Motion Flow

Seluruh Experience mengikuti alur berikut.

Camera Arrive

↓

Experience Entry

↓

Hero Reveal

↓

Supporting Reveal

↓

Interaction Enabled

↓

Hover

↓

Click

↓

Drawer

↓

Read

↓

Close

↓

Continue Scroll

↓

Experience Exit

↓

Camera Move

↓

Next Experience

Animation wajib mengikuti alur ini.

---

# 32. Relationship

Dokumen ini merupakan implementasi teknis dari.

02_CAMERA_SYSTEM.md

04_MOTION_SYSTEM.md

08_COMPONENT_SYSTEM.md

09_INTERACTION_SYSTEM.md

09A_EXPERIENCE_LAYOUT_SYSTEM.md

---

# 33. Next Document

Lanjut ke.

# 11_FOLDER_STRUCTURE.md

---

# Project Lock

Status:

LOCKED

Animation bukan dekorasi.

Animation adalah sistem yang menghubungkan Camera, Experience, Evidence, dan Interaction menjadi satu perjalanan yang terasa hidup.

Setiap implementasi wajib mengikuti spesifikasi ini tanpa pengecualian.