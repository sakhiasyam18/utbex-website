// components/navigation/utils/navigationHelpers.ts

export function cx(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}
