// src/sections/hero/components/BackgroundEffects.tsx

export function BackgroundEffects() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Canvas base removed — GlobalAtmosphere provides the continuous warm canvas */}

            {/* Soft radial diffusion from top-left — reinforces Hero's primary ambient light */}
            {/* DS 02: Hero receives highest atmosphere density — "warm optimism" */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-neutral-50/30 to-neutral-100/50 opacity-50"></div>

            {/* Soft maroon ambient glow top-right — section-specific warmth */}
            {/* DS 02: "soft maroon atmosphere" — opacity reduced (GlobalAtmosphere already adds maroon) */}
            <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-utbex-maroon/[0.03] rounded-full blur-[120px] transform-gpu"></div>

            {/* Neutral warm glow bottom-left — spatial depth anchor */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-amber-50/20 rounded-full blur-[120px] transform-gpu"></div>

            {/* Noise texture removed — GlobalAtmosphere provides the unified global noise (DS 05) */}
        </div>
    );
}