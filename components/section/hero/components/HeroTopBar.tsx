// components/section/hero/components/HeroTopBar.tsx
import Link from "next/link";

const topBarSocials = [
  {
    platform: "Instagram",
    href: "https://instagram.com/utbexindonesia.group",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@utbexindonesiagroup",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a4 4 0 0 1-8 0z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/@utbexindonesia",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/UtbexclothingIndonesia/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    platform: "WhatsApp",
    href: "https://wa.me/6282252358901",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export function HeroTopBar() {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-10 pt-[72px] lg:pt-10 animate-fade-up opacity-0"
      style={{ animationDelay: "60ms", animationFillMode: "forwards" }}
    >
      <div className="relative group cursor-default">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-utbex-maroon to-red-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <span className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/90 backdrop-blur-md text-utbex-dark text-[9px] sm:text-xs font-black tracking-[0.15em] border border-black/5 shadow-sm uppercase">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-utbex-maroon opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-utbex-maroon"></span>
          </span>
          PT. UTBEX INOVASI INDONESIA
        </span>
      </div>

      {/* Social media icons with text labels for comparison */}
      <nav className="hidden md:flex flex-wrap items-center gap-2" aria-label="Social media links">
        {topBarSocials.map((social) => (
          <Link
            key={social.platform}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="group/social relative flex items-center gap-2 px-3 py-2 rounded-xl text-utbex-dark/60 hover:text-utbex-maroon transition-all duration-300 hover:bg-utbex-maroon/[0.06]"
          >
            {social.icon}
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-80 group-hover/social:opacity-100">
              {social.platform}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
