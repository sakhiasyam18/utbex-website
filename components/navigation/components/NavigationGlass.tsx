interface NavigationGlassProps {
    isScrolled: boolean;
}

export function NavigationGlass({ isScrolled }: NavigationGlassProps) {
    return (
        <div 
            className={`absolute inset-0 rounded-full transition-all duration-700 ease-out pointer-events-none
                ${isScrolled 
                    ? 'bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60' 
                    : 'bg-white/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white/30'
                }
            `}
        >
            {/* Extremely subtle ambient glow on the top left */}
            <div className="absolute top-0 left-[10%] w-[30%] h-[50%] bg-utbex-maroon/5 blur-xl rounded-full mix-blend-multiply opacity-50" />
            {/* Soft white reflection */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80" />
        </div>
    );
}
