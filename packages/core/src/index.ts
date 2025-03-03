import { MANIM_CONFIG } from "./config";

import * as decorators from "./decorators";
import * as colors from "./colors"
import * as scene from "./object/scene";

export namespace Manim {
	export const VERSION = "0.0.1";
	export const CONFIG = MANIM_CONFIG;

	export const Decorators = decorators;
    export const Colors = colors;

	export const Scene = scene.Scene;
	export const SceneWithCamera = scene.SceneWithCamera;

}

export * from "./object";
