import { Colors } from "../../colors";
import { util } from "../../util";
import { MObject, MObjectAttributes } from "../mobject";
import { Vector } from "./vector";

export type AxesAttributes = {
	Sizes: [number, number, number];
	Colors?: [Color3, Color3, Color3];
	Origin?: Vector3;
} & MObjectAttributes;

export class Axes extends MObject<AxesAttributes> {
	private xVector: Vector;
	private yVector: Vector;
	private zVector: Vector;

	construct(): void {
		if (!this.getOutputInstance()) {
			util.logDebug("Manim::Axes::construct(): Output instance is undefined!", "verbose", false);
		}

		this.params.Origin = this.params.Origin ?? new Vector3(0, 0, 0);
		this.params.Colors = this.params.Colors ?? [Colors.WHITE, Colors.WHITE, Colors.WHITE];

		const originCF = new CFrame(this.params.Origin);

		const [sizeX, sizeY, sizeZ] = this.params.Sizes;
		const [colorX, colorY, colorZ] = this.params.Colors;

		this.xVector = new Vector({
			Origin: originCF,
			CFrame: new CFrame(this.params.Origin.add(new Vector3(sizeX, 0, 0))),
			Color: colorX,
			Visible: true,
		});

		this.yVector = new Vector({
			Origin: originCF,
			CFrame: new CFrame(this.params.Origin.add(new Vector3(0, sizeY, 0))),
			Color: colorY,
			Visible: true,
		});

		this.zVector = new Vector({
			Origin: originCF,
			CFrame: new CFrame(this.params.Origin.add(new Vector3(0, 0, sizeZ))),
			Color: colorZ,
			Visible: true,
		});

		this.addChild("xAxis", this.xVector);
		this.addChild("yAxis", this.yVector);
		this.addChild("zAxis", this.zVector);
	}

	tick(dt: number): void {
		this.tickAllChildren(dt);
	}

	constructor(params: AxesAttributes) {
		super();
		this.params = params;
	}
}
