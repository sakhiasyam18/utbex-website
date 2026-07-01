interface NavigationGlassProps {
    isScrolled: boolean;
}

export function NavigationGlass({ isScrolled }: NavigationGlassProps) {
    return (
        <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ease-out pointer-events-none overflow-hidden
                ${isScrolled 
                    ? 'bg-white/[0.65] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] border-[0.5px] border-white/50' 
                    : 'bg-white/[0.25] backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-[0.5px] border-white/20'
                }
            `}
        >
            {/* Ultra-soft noise layer */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            {/* Soft radial white glow behind logo */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-[120px] h-[60px] bg-white blur-2xl rounded-full mix-blend-screen opacity-[0.04]" />
            
            {/* Extremely soft center light diffusion */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[100%] bg-white blur-3xl mix-blend-screen opacity-[0.03]" />

            {/* Soft maroon ambient glow behind CTA */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[100px] h-[60px] bg-utbex-maroon blur-2xl rounded-full mix-blend-multiply opacity-[0.03]" />
            
            {/* Soft white edge reflection / highlight gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.12] via-transparent to-white/[0.02] pointer-events-none" />
            <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
        </div>
    );
}
