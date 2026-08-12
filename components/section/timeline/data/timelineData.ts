// components/section/timeline/data/timelineData.ts

export interface TimelineEvidence {
    label: string;
    href?: string;
    type: 'certificate' | 'documentation' | 'media';
}

export interface TimelineMilestone {
    id: string;
    year: string;
    tag: string;
    title: string;
    story: string;
    image?: string;
    imageAlt?: string;
    evidence?: TimelineEvidence[];
}

export const timelineMilestones: TimelineMilestone[] = [
    {
        id: 'tl-1',
        year: '2019',
        tag: 'INTERNASIONAL',
        title: 'Juara I Penemu Ide Kreatif Malaysia',
        story: 'Mewakili inovasi dari Indonesia dan berhasil meraih Juara I pada ajang penemuan ide kreatif di Malaysia.',
        image: '/images/logo-utbex-persegi.avif',
        imageAlt: 'Juara I Ide Kreatif Malaysia',
    },
    {
        id: 'tl-2',
        year: '2020',
        tag: 'PENGHARGAAN',
        title: 'Top 10 Breakthru UMKM Jawa Timur',
        story: 'Masuk dalam jajaran 10 besar UMKM paling terobosan (Breakthru) di tingkat Provinsi Jawa Timur.',
        image: '/images/Kaos-Lukis-Tanpa Tinta-Kreativitas-Arik-Dwi-Asmara-yang-Dapat-Pujian.avif',
        imageAlt: 'Top 10 Breakthru UMKM',
        evidence: [
            { label: 'Baca Artikel Berita', href: 'https://timesindonesia.co.id/gaya-hidup/239485/kaos-lukis-tanpa-tinta-kreativitas-arik-dwi-asmara-yang-dapat-pujian', type: 'media' },
        ],
    },
    {
        id: 'tl-3',
        year: '2021',
        tag: 'PENGHARGAAN GUBERNUR',
        title: 'Terinovatif II INOTEK Award Jawa Timur',
        story: 'Meraih penghargaan Terinovatif II Kategori Inovasi Bidang Ekonomi dari Gubernur Jawa Timur atas gagasan program "Y-STAR" sebagai media pemberdayaan generasi nusantara.',
        image: '/images/Selamat-dan-Sukses-Arik-Dwi-Asmara-KECAMATAN-BANTUR-Dan-KABUPATEN-MALANG-TERINOVATIF-II-KATEGORI-INOVASI-BIDANG-EKONOMIAnugerah-Inovasi-Daerah-dan-Inovasi-Teknologi-INOTEK-AWARD-diberikan-oleh-GUBERNUR.avif',
        imageAlt: 'Terinovatif II INOTEK Award',
        evidence: [
            { label: 'Lihat Sertifikat', href: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-3b',
        year: '2021',
        tag: 'TRANSFORMASI',
        title: 'Transformasi Menjadi Social Enterprise',
        story: 'Hari ini, UTBEX resmi bertransformasi menjadi Social Enterprise berbasis desa yang memadukan usaha bisnis kreatif dengan gerakan pemberdayaan pemuda.',
        image: '/images/postiingan-utbex-news-wajah-baru-semangat-baru-logo-utbex-lahir.avif',
        imageAlt: 'Transformasi UTBEX',
    },
    {
        id: 'tl-4',
        year: '2022',
        tag: 'KOLABORASI GLOBAL',
        title: 'Menjadi Merchandise MotoGP Mandalika',
        story: 'Produk inovasi UTBEX terpilih menjadi bagian dari merchandise resmi pada ajang internasional MotoGP Mandalika 2022. Pencapaian ini terwujud berkat dukungan penuh para stakeholder, termasuk Bapak Emil Dardak, Walikota Malang, Kapolresta Malang, Kapolsek Klojen, DANDIM, BAPPEDA Kota Malang, Kombespol Djoko HU, serta rekan-rekan penggerak seperti bang imam dan bang wahyu dari (Juragan Parkir Madiun) yang terus memberikan ruang bagi pelaku industri kreatif Malang Raya untuk melangkah ke kancah global.',
        image: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif',
        imageAlt: 'MotoGP Mandalika',
        evidence: [
            { label: 'Lihat Dokumentasi', href: '/images/Produk-inovasi-UTBEX-terpilih-menjadi-bagian-dari-merchandise-resmi-pada-ajang-internasional-MotoGP-Mandalika 2022.avif', type: 'documentation' },
        ],
    },
    {
        id: 'tl-5',
        year: '2022',
        tag: 'INOVASI',
        title: 'Juara II KRENOTEK Award Kabupaten Malang',
        story: 'Berhasil meraih Juara II KRENOTEK Award pada Kategori Bidang Non-Ekonomi di tingkat Kabupaten Malang. Pencapaian gemilang yang diapresiasi oleh BRIDA Kabupaten Malang ini terus menjadi bahan bakar penyemangat kami untuk selalu menghadirkan inovasi terbaik dengan dampak yang lebih nyata.',
        image: '/images/Juara-2-KRENOTEK-Award-(Bidang-Non-Ekonomi)-Kab.-Malang.avif',
        imageAlt: 'KRENOTEX Award',
    },
    {
        id: 'tl-6',
        year: '2023',
        tag: 'INOVASI JATIM',
        title: 'Juara II INOTEK Award Provinsi Jatim',
        story: 'Puncak penghargaan INOTEK AWARD 2023 tingkat Provinsi Jawa Timur. Bersama-sama, kita berhasil meraih Juara II pada Kategori III (Inovasi Bidang Ekonomi) di antara 75 peserta inovatif dari seluruh penjuru Jawa Timur.',
        image: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
        imageAlt: 'INOTEK Award 2023 Jatim',
        evidence: [
            { label: 'Lihat Dokumentasi', href: '/images/Puncak-penghargaan-INOTEX-AWARD-2023-tingkat-Provinsi-Jawa-Timur.avif', type: 'documentation' },
            { label: 'Sertifikat', href: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-7',
        year: '2023',
        tag: 'PEMUDA BERPRESTASI',
        title: 'Penghargaan Sumpah Pemuda Bupati Malang',
        story: 'Sebuah kado berharga kembali di dapat UTBEX ® INDONESIA Group pada hari spesial SUMPAH PEMUDA ke 95, 28 oktober 2023. Kami ucapkan terima kasih yang tertinggi untuk keluarga besar KNPI KAB MALANG Zulham Akhmad Mubarrok Axel Kharisma Pemerintah Daerah Kabupaten Malang, Pemdes Bantur, Muspika Bantur dan sahabat UTBEX ® INDONESIA Group yang telah mendukung kami dalam membangun bangsa melalui pergerakan pumuda desa untuk negri.',
        image: '/images/postingan-utbex-news-kolase-foto-foto.avif',
        imageAlt: 'Penghargaan Sumpah Pemuda',
        evidence: [
            { label: 'Dokumentasi', href: '/images/Penghargaan-Sumpah-Pemuda-di-Pendopo-Kabupaten-Malang.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-7b',
        year: '2023',
        tag: 'KOLABORASI',
        title: 'Jaringan Kolaborasi Lintas Sektor',
        story: 'UTBEX Indonesia dan Bantur Creative Network (BCN) kini bersatu! Kami hadir untuk memperkuat semangat kolaborasi, membuka ruang belajar, berkarya, dan tumbuh bersama generasi muda desa. Meliputi Pelatihan Wirausaha, Inkubasi UMKM, Edukasi Digital & Kreatif, Showcase Produk Lokal.',
        image: '/images/UTBEX-Indonesia-dan-Bantur-Creative-Network-(BCN)-kini-bersatu--Kami-hadir-untuk-memperkuat-semangat-kolaborasi,-membuka-ruang-belajar,-berkarya,-dan-tumbuh-bersama -generasi-muda-desa.avif',
        imageAlt: 'Kolaborasi Lintas Sektor',
    },
    {
        id: 'tl-8',
        year: 'Berkelanjutan',
        tag: 'KONTRIBUSI',
        title: 'Narasumber di Kementerian, Universitas, BLK, hingga Lembaga Pemasyarakatan',
        story: 'Berbagi wawasan dan pengalaman secara berkelanjutan sebagai narasumber di berbagai instansi dan lembaga.',
        image: '/images/Narasumber-di-Kementerian,-Universitas,-BLK,-hingga-Lembaga-Pemasyarakatan.avif',
        imageAlt: 'Narasumber di berbagai instansi',
    },
];

export const timelineHeader = {
    label: 'PENGALAMAN & PRESTASI PENDUKUNG',
    headline: 'Rekam Jejak & Dedikasi.',
    description: 'Perjalanan Arik Dwi Asmara sebagai CEO dan Pemilik Utbex Indonesia adalah bukti dedikasi dan visinya. Latar belakangnya yang mengesankan dan gaya kepemimpinannya terus menginspirasi orang-orang di sekitarnya. Masa depan terlihat cerah di bawah bimbingannya saat ia berusaha untuk pertumbuhan dan inovasi yang berkelanjutan.',
};
