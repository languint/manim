import { MANIM_CONFIG } from "./config";

export namespace util {
    export function logDebug(message: string, level?: typeof MANIM_CONFIG.LOG_LEVEL, isWarn?: boolean) {
        const realLevel = level ?? "info";
    
        if (!MANIM_CONFIG.MANIM_DEBUG) return;
        if (MANIM_CONFIG.LOG_LEVEL === "info" && realLevel === "verbose") return;
        
        isWarn ? warn(message) : print(message);
    }
}