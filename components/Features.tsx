export default function Features() {
    return (
        <section className="py-20 px-4 bg-utbex-light">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-utbex-dark mb-4">Membangun Ekosistem Kreatif</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Sejak 2014, kami terus mendorong generasi muda desa untuk bangkit, berkarya, dan berwirausaha melalui berbagai divisi layanan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="w-14 h-14 bg-red-100 text-utbex-maroon rounded-lg flex items-center justify-center text-2xl mb-6">
                            👕
                        </div>
                        <h3 className="text-xl font-bold text-utbex-dark mb-3">Kriya & Fashion Inovatif</h3>
                        <p className="text-gray-600">
                            Pelopor Kaos Lukis Tanpa Tinta pertama di Indonesia yang telah diakui hingga mancanegara dan menjadi merchandise resmi MotoGP.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="w-14 h-14 bg-red-100 text-utbex-maroon rounded-lg flex items-center justify-center text-2xl mb-6">
                            📢
                        </div>
                        <h3 className="text-xl font-bold text-utbex-dark mb-3">Advertising & Branding</h3>
                        <p className="text-gray-600">
                            Layanan full-service mulai dari desain, cetak banner, hingga pembuatan packaging untuk membantu UMKM desa naik kelas.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="w-14 h-14 bg-red-100 text-utbex-maroon rounded-lg flex items-center justify-center text-2xl mb-6">
                            💡
                        </div>
                        <h3 className="text-xl font-bold text-utbex-dark mb-3">School of Village Learning</h3>
                        <p className="text-gray-600">
                            Program edukasi SCoVil untuk memberikan pelatihan wirausaha muda, digital marketing, dan pendampingan legalitas usaha.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}