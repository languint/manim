import { Colors } from "../../colors";
import { util } from "../../util";
import { MObject, MObjectAttributes } from "../mobject";
import { Cone } from "./cone";
import { Line } from "./line";

export type VectorAttributes = {
	Origin?: CFrame;
	CFrame: CFrame;
	Color?: Color3;
} & MObjectAttributes;

export class Vector extends MObject<VectorAttributes> {
	private line: Line;
	private cone: Cone;

	construct(): void {
		if (!this.getOutputInstance()) {
			util.logDebug("Manim::Vector::construct(): Output instance is undefined!", "verbose", false);
		}

		this.line = new Line({
			...this.params,
			Length: 0,
		});

		this.cone = new Cone({
			...this.params,
		});

		this.addChild("line", this.line);
		this.addChild("cone", this.cone);
	}

	setNativeLine(prop: keyof WritableInstanceProperties<LineHandleAdornment>, value: any) {
		if (!this.line) return;
		this.line.setNative(prop, value);
	}

	setNativeCone(prop: keyof WritableInstanceProperties<ConeHandleAdornment>, value: any) {
		if (!this.cone) return;
		this.cone.setNative(prop, value);
	}

	tick(): void {
		if (!this.line || !this.cone) return;

		const tail = (this.params.Origin ?? new CFrame(0, 0, 0)).Position;
		const head = this.params.CFrame.Position;
		const direction = head.sub(tail);
		const length = direction.Magnitude;

		const mid = tail.add(direction);
		const orient = CFrame.lookAt(tail, head);
		const rotation = orient.Rotation;

		const lineCF = new CFrame(mid).mul(rotation).mul(CFrame.Angles(-math.pi, 0, 0));

		this.line.setNative("Length", length);
		this.line.setNative("CFrame", lineCF);
		this.line.setNative("Color3", this.params.Color ?? Colors.WHITE);
		this.line.setNative("Visible", this.params.Visible ?? true);

		const coneCF = new CFrame(head).mul(orient.sub(orient.Position));
		this.cone.setNative("CFrame", coneCF);
		this.cone.setNative("Color3", this.params.Color ?? Colors.WHITE);
		this.cone.setNative("Visible", this.params.Visible ?? true);
	}

	constructor(params: VectorAttributes) {
		super();
		this.params = params;
	}
}
