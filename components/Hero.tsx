import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-utbex-maroon text-white py-24 px-4 relative overflow-hidden">
            {/* Dekorasi Background Bulat */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    From Ideas To <span className="text-yellow-400">Impact</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
                    Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise. Mengubah ide kreatif menjadi dampak nyata untuk memberdayakan pemuda desa.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/layanan" className="bg-white text-utbex-maroon px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                        Jelajahi Program Kami
                    </Link>
                    <Link href="/kontak" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-utbex-maroon transition transform hover:-translate-y-1">
                        Mari Berkolaborasi
                    </Link>
                </div>
            </div>
        </section>
    );
}