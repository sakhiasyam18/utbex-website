// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-utbex-dark text-gray-300 py-8 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-xl font-bold text-white mb-2">PT. UTBEX INOVASI INDONESIA</h3>
                <p className="text-sm mb-4">From Ideas To Impact</p>
                <div className="border-t border-gray-700 pt-4 mt-4 text-xs">
                    <p>&copy; {new Date().getFullYear()} UTBEX Indonesia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}