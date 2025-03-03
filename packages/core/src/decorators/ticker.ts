import { RunService } from "@rbxts/services";
import { MObject } from "../object/mobject";
import { util } from "../util";
import { Registry } from "../registry";

/**
 * @name Ticker
 * @description Connects the tick function on a class to RunService.Heartbeat()
 */
export function Ticker() {
	return (ctor: object) => {
		if (!(ctor as MObject).tick) {
			util.logDebug(
				`Manim::Decorators::Ticker(): Cannot decorate ${ctor} with Ticker(), instance does not contain a tick() function!`,
				"info",
				true,
			);
			return;
		} else {
			util.logDebug(`Manim::Decorators::Ticker(): Decorated ${ctor} with Ticker().`, "verbose");
			Registry.setTicker(`${ctor}`, ctor as MObject);
		}
	};
}
