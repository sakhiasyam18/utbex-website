import Link from "next/link";
import { navigationContent } from "../data/navigationContent";

export function NavigationLogo() {
    return (
        <div className="flex-shrink-0 font-bold text-xl md:text-2xl tracking-wider z-10 relative">
            <Link href={navigationContent.logo.href} className="flex items-center transition-all duration-500 ease-out opacity-90 hover:opacity-100 hover:brightness-105">
                <span className="text-utbex-dark">{navigationContent.logo.primary}</span>
                <span className="text-utbex-text-secondary/60 transition-colors duration-500">{navigationContent.logo.accent}</span>
            </Link>
        </div>
    );
}
