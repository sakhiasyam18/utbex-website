// components/navigation/types/navigation.ts

export interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

export interface NavigationState {
    isScrolled: boolean;
    isDrawerOpen: boolean;
    activeSection: string | null;
}
