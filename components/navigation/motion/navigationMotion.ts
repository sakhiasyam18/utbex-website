export const smoothTransition = {
    type: "tween" as const,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    duration: 0.5
};

export const slowTransition = {
    type: "tween" as const,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    duration: 0.8
};
