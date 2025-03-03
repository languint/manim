import { RunService } from "@rbxts/services";
import { MObject } from "../object/mobject";
import { util } from "../util";

/**
 * @name Ticker
 * @description Connects the tick function on a class to RunService.Heartbeat()
 */
export function Ticker() {
	return (ctor: object) => {
		if (!(ctor instanceof MObject)) {
			util.logDebug(
				`Manim::Decorators::Ticker(): Cannot decorate ${ctor} with Ticker(), instance is not a MObject!`,
				"info",
				true,
			);
			return;
		} else {
			util.logDebug(`Manim::Decorators::Ticker(): Decorated ${ctor} with Ticker().`, "verbose");
			RunService.Heartbeat.Connect(() => (ctor as MObject).tick());
		}
	};
}
