import { util } from "../util";

/**
 * @name Scene
 * @description Scene classes decorated with this will be picked up by the Registry.
 */
export function Scene() {
	return (ctor: object) => {
		if (!(ctor instanceof Scene)) {
			util.logDebug(
				`Manim::Decorators::Scene(): Cannot decorate ${ctor} with Scene(), instance is not a Scene!`,
				"info",
				true,
			);
			return;
		} else {
		}
	};
}
