# 08_COMPONENT_SYSTEM.md

# UTBEX DIGITAL EXPERIENCE SYSTEM
## COMPONENT SYSTEM
### Page 02 — Reusable Experience Components

> **Version:** 1.0 (Locked)

Dokumen ini mendefinisikan seluruh komponen yang membangun Interactive Evidence Explorer. Component bukan sekadar UI, melainkan media untuk menyampaikan evidence, cerita, dan interaksi secara konsisten.

Component harus dapat digunakan ulang pada berbagai Experience tanpa mengubah identitas visual.

---

# 1. Filosofi Component

Component adalah alat.

Bukan tujuan.

Component tidak boleh lebih menonjol daripada evidence.

Evidence tetap menjadi tokoh utama.

---

# 2. Tujuan Component

Component bertugas untuk:

- Menampilkan evidence.
- Mengelompokkan informasi.
- Membantu eksplorasi.
- Menjaga konsistensi visual.
- Mempermudah pengembangan.

---

# 3. Prinsip Component

Seluruh Component harus:

- Reusable.
- Modular.
- Ringan.
- Responsive.
- Accessible.
- Mudah dikembangkan.

Tidak membuat component khusus apabila component yang sudah ada masih dapat digunakan.

---

# 4. Component Hierarchy

World Canvas

↓

Experience

↓

Component

↓

Content

↓

Interaction

↓

Motion

Component selalu berada di tengah antara Experience dan Content.

---

# 5. Hero Visual Component

Digunakan pada:

Arrival

Fungsi:

- Menampilkan visual utama.
- Menjadi pembuka perjalanan.
- Memberikan first impression.

---

# 6. Image Card

Digunakan untuk:

- Dokumentasi.
- Foto kegiatan.
- Arsip.
- Aktivitas.

Image Card merupakan component paling sering digunakan.

---

# 7. Image Cluster

Sekelompok Image Card yang membentuk satu cerita.

Bukan sekadar gallery.

Image Cluster mengikuti komposisi editorial.

---

# 8. Gallery Wall

Digunakan untuk:

- Banyak dokumentasi.
- Banyak foto.
- Dokumentasi kegiatan.

Gallery Wall bersifat bebas.

Tidak menggunakan grid yang kaku.

---

# 9. Timeline Component

Digunakan untuk:

- Sejarah.
- Perjalanan.
- Perkembangan.

Timeline mengikuti Timeline resmi UTBEX.

2014

↓

2019

↓

2021

↓

2023

Timeline tidak boleh menggunakan tahun lain tanpa pembaruan dokumen resmi.

---

# 10. Evidence Card

Digunakan untuk:

- Sertifikat.
- HKI.
- Dokumen.
- Artikel.
- PDF.

Evidence Card menjadi bukti resmi.

---

# 11. Recognition Card

Digunakan untuk:

- Award.
- Penghargaan.
- Kompetisi.
- Pengakuan.

Recognition Card menampilkan pencapaian.

---

# 12. Product Showcase

Digunakan untuk:

- Branding.
- Packaging.
- Produk.
- Mockup.

Product Showcase menunjukkan hasil inovasi.

---

# 13. Community Card

Digunakan untuk:

- UMKM.
- Desa.
- Mitra.
- Pemerintah.
- Organisasi.

Community Card menunjukkan hubungan sosial.

---

# 14. Impact Card

Digunakan untuk:

- Before.
- Process.
- After.
- Testimoni.

Impact Card menjadi inti Experience Impact Story.

---

# 15. Quote Card

Digunakan untuk:

- Pendiri.
- Mitra.
- UMKM.
- Tokoh.

Quote harus berbasis narasumber nyata.

---

# 16. Statistics Card

Digunakan hanya apabila data tersedia.

Statistik harus berasal dari data nyata.

Tidak boleh menggunakan dummy.

---

# 17. Document Viewer

Digunakan untuk:

- PDF.
- Company Profile.
- Artikel.
- Dokumen.

Viewer dibuka melalui Drawer atau Lightbox.

---

# 18. Video Component

Digunakan untuk:

- Dokumentasi video.
- Profil.
- Liputan.

Video hanya digunakan apabila memperkuat cerita.

---

# 19. Logo Component

Digunakan untuk:

- Logo mitra.
- Logo pemerintah.
- Logo institusi.

Logo tidak menjadi fokus utama.

---

# 20. Section Label

Walaupun Page 02 tidak menggunakan section, setiap Experience dapat memiliki label kecil sebagai penanda posisi pengguna.

Label bersifat ringan dan tidak mengganggu visual.

---

# 21. Floating Decoration

Digunakan sebagai pendukung atmosfer.

Contoh:

- Soft Glow.
- Particle.
- Abstract Shape.
- Gradient Blur.

Tidak boleh mengganggu evidence.

---

# 22. Drawer Component

Drawer digunakan untuk membuka:

- Detail evidence.
- PDF.
- HKI.
- Award.
- Metadata.

Drawer tidak memindahkan Camera.

---

# 23. Lightbox

Digunakan untuk:

- Foto.
- Video.
- Dokumen.

Lightbox mempertahankan konteks pengguna di dalam World Canvas.

---

# 24. Navigation Indicator

Component kecil yang menunjukkan posisi Experience saat ini.

Bukan navbar.

Tidak digunakan untuk berpindah halaman.

---

# 25. Scroll Indicator

Digunakan pada awal perjalanan.

Memberikan petunjuk bahwa pengalaman dibangun melalui scroll.

---

# 26. Component Relationship

Satu Component dapat digunakan pada banyak Experience.

Contoh.

Image Card

↓

Arrival

↓

Movement

↓

Community

↓

Innovation

↓

Impact Story

Component tidak dimiliki oleh satu Experience tertentu.

---

# 27. Component Rules

Component tidak boleh:

- Memiliki identitas visual sendiri.
- Mengubah Visual System.
- Mengubah Motion System.
- Mengubah Camera System.

Component mengikuti sistem global.

---

# 28. AI Component Rules

AI tidak boleh:

- Membuat component baru tanpa alasan.
- Menggandakan component yang sudah ada.
- Mengubah fungsi component.

Apabila kebutuhan baru muncul, gunakan component yang sudah ada terlebih dahulu.

---

# 29. Future Expansion

Component System harus mampu mendukung:

- Penambahan Experience.
- Penambahan jenis evidence.
- Penambahan media.
- Penambahan interaksi.

Tanpa mengubah struktur yang ada.

---

# 30. Hubungan dengan Dokumen Berikutnya

Component menjelaskan apa yang digunakan untuk membangun dunia.

Dokumen berikutnya menjelaskan bagaimana pengguna berinteraksi dengan setiap component tersebut.

Lanjut ke:

# 09_INTERACTION_SYSTEM.md

---

# Project Lock

Status:

LOCKED

Seluruh implementasi Interactive Evidence Explorer wajib menggunakan Component System ini.

Component merupakan fondasi teknis yang menerjemahkan Experience menjadi antarmuka yang konsisten, modular, dan dapat digunakan kembali.