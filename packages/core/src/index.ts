import { MANIM_CONFIG } from "./config";

import * as decorators from "./decorators";
import * as colors from "./colors";
import * as scene from "./object/scene";
import * as registry from "./registry";
import * as objs from "./object";

import { RunService } from "@rbxts/services";
import { util } from "./util";

export namespace Manim {
	export const VERSION = "0.0.4";
	export const CONFIG = MANIM_CONFIG;

	export const Objects = objs;
	export const Decorators = decorators;
	export const Colors = colors.Colors;
	export const Registry = registry.Registry;

	export const Scene = scene.Scene;
	export const SceneWithCamera = scene.SceneWithCamera;

	export function init() {
		util.logDebug(`Manim::init() Registering ${Registry.getAllScenes().size()} scenes, and ${Registry.getAllTickers().size()} tickers.`);

		Registry.getAllScenes().forEach((scene) => {
			scene._construct();
		});

		Registry.getAllTickers().forEach((ticker) => {
			RunService.Heartbeat.Connect((dt) => ticker._tick(dt));
		});
	}
}

export * from "./object/types";