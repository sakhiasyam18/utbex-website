// src/sections/about/components/BackgroundEffects.tsx
// Continue Hero background. Soft white, subtle gradient, light radial glow[cite: 3, 4].

export const BackgroundEffects = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none -z-10 bg-white overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,rgba(240,240,245,0.4)_0%,rgba(255,255,255,0)_70%)] opacity-70" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-multiply" />
        </div>
    );
};