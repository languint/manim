import { Colors } from "../../colors";
import { util } from "../../util";
import { MObject, MObjectAttributes } from "../mobject";

export type ConeAttributes = {
	Radius?: number;
	Height?: number;
	Color?: Color3;
	CFrame?: CFrame;
} & MObjectAttributes;

export class Cone extends MObject<ConeAttributes> {
	private cone: ConeHandleAdornment;

	construct(): void {
		if (!this.getOutputInstance()) {
			util.logDebug("Manim::Cone::construct(): Output instance is undefined!", "verbose", false);
		}

		const cone = new Instance("ConeHandleAdornment");
		cone.Radius = this.params.Radius ?? 0.25;
		cone.Height = this.params.Height ?? 1;
		cone.Color3 = this.params.Color ?? Colors.WHITE;
		cone.Adornee = this.getOutputInstance() as PVInstance | undefined;
		cone.Parent = this.getOutputInstance();

		this.cone = cone;
	}

	setNative(prop: keyof WritableInstanceProperties<ConeHandleAdornment>, value: never) {
		if (!this.cone) return;
		this.cone[prop] = value;
	}

	tick(): void {
		if (!this.cone) return;
		this.cone.Radius = this.params.Radius ?? 0.25;
		this.cone.Height = this.params.Height ?? 1;
		this.cone.Color3 = this.params.Color ?? Colors.WHITE;
		this.cone.Adornee = this.getOutputInstance() as PVInstance | undefined;
		this.cone.Parent = this.getOutputInstance();
	}

	constructor(params: ConeAttributes) {
		super();
		this.params = params;
	}
}
