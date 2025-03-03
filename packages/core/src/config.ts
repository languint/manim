export interface ManimGlobals {
    MANIM_DEBUG: boolean;
    LOG_LEVEL: "info" | "verbose";
}

export const MANIM_CONFIG = {
    MANIM_DEBUG: true,
    LOG_LEVEL: "verbose",
} as ManimGlobals;