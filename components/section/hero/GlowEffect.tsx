// src/components/sections/hero/GlowEffect.tsx
interface GlowEffectProps {
    className?: string;
}

export function GlowEffect({ className = "" }: GlowEffectProps) {
    return (
        <div className={`absolute pointer-events-none rounded-full blur-[100px] ${className}`} aria-hidden="true" />
    );
}