// // app/components/Navbar.tsx
// import Link from 'next/link';

// export default function Navbar() {
//     return (
//         <nav className="bg-utbex-maroon text-white shadow-md sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     {/* Bagian Logo */}
//                     <div className="flex-shrink-0 font-bold text-2xl tracking-wider">
//                         <Link href="/">UTBEX<span className="text-gray-300">.ID</span></Link>
//                     </div>

//                     {/* Menu Navigasi (Desktop) */}
//                     <div className="hidden md:flex space-x-8 font-medium">
//                         <Link href="/" className="hover:text-gray-300 transition">Beranda</Link>
//                         <Link href="/tentang" className="hover:text-gray-300 transition">Tentang Kami</Link>
//                         <Link href="/layanan" className="hover:text-gray-300 transition">Layanan</Link>
//                         <Link href="/produk" className="hover:text-gray-300 transition">Produk</Link>
//                         <Link href="/scovil" className="hover:text-gray-300 transition">SCoVil</Link>
//                         <Link href="/kontak" className="hover:text-gray-300 transition">Kontak</Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }