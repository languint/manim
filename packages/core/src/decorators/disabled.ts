import { MObject } from "../object/mobject";
import { util } from "../util";

/**
 * @name Disabled
 * @description Disables MObjects, when a MObject is decorated the tick() and construct() functions will not run.
 */
export function Disabled() {
	return (ctor: object) => {
		if (ctor instanceof MObject) {
			(ctor as MObject).__enabled = false;
		} else {
			util.logDebug(`Manim::Decorators::Disabled: Cannot disable ${ctor}, it is not of class MObject`, "info", true);
		}
	};
}
