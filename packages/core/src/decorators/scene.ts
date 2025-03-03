import { Scene as S, SceneAttributes } from "../object/scene";
import { Registry } from "../registry";
import { util } from "../util";

/**
 * @name Scene
 * @description Scene classes decorated with this will be picked up by the Registry.
 */
export function Scene(config: SceneAttributes, outputInstance: Instance) {
	return (ctor: object) => {
		if (!(ctor as S).add) {
			util.logDebug(
				`Manim::Decorators::Scene(): Cannot decorate ${ctor} with Scene(), instance does not contain a add() function!`,
				"info",
				true,
			);
			return;
		} else {
			util.logDebug(`Manim::Decorators::Scene(): Decorated ${ctor} with Scene().`, "verbose");
			(ctor as S).params = config;
			if ((ctor as S).__enabled === undefined) (ctor as S).__enabled = true;
			(ctor as S).__children = new Map();
			(ctor as S).__outputInstance = outputInstance;
			Registry.setScene(config.name, ctor as S);
		}
	};
}
