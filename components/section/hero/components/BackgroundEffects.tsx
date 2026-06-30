// src/sections/hero/components/BackgroundEffects.tsx

export function BackgroundEffects() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-white"></div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-neutral-50/50 to-neutral-100/80 opacity-80"></div>

            <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-utbex-maroon/5 rounded-full blur-[120px] transform-gpu"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-utbex-red/5 rounded-full blur-[120px] transform-gpu"></div>

            <div
                className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
                style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: 'repeat' }}
            ></div>

            <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-white/60 rounded-full blur-[100px] transform-gpu"></div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
    );
}