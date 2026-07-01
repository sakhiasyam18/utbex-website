// src/sections/hero/components/BackgroundEffects.tsx

export function BackgroundEffects() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Warm canvas base — DS: warm white, never cold blue-white */}
            <div className="absolute inset-0 bg-utbex-canvas"></div>

            {/* Soft radial diffusion from top-left — DS: white radial light, warm ivory glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-neutral-50/30 to-neutral-100/50 opacity-70"></div>

            {/* Soft maroon ambient glow top-right — DS: "soft maroon ambient glow" */}
            <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-utbex-maroon/[0.04] rounded-full blur-[120px] transform-gpu"></div>

            {/* Neutral warm glow bottom-left — DS: "neutral light bloom" */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-[120px] transform-gpu"></div>

            {/* Central warm white bloom — creates invisible depth */}
            <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-white/50 rounded-full blur-[100px] transform-gpu"></div>

            {/* Ultra-subtle noise texture — DS: felt, not seen */}
            <div
                className="absolute inset-0 opacity-[0.018] mix-blend-multiply"
                style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: 'repeat' }}
            ></div>
        </div>
    );
}