import { Manim, ObjectTypes } from "@rbxts/manim";

export type MyObjectAttributes = {

} & ObjectTypes.MObjectAttributes;

export class MyObject extends Manim.Objects.MObject<MyObjectAttributes> {
	private line: LineHandleAdornment;

	construct(): void {
	}

	setNative(prop: keyof WritableInstanceProperties<LineHandleAdornment>, value: any) {
	}

	tick(): void {
	}

	constructor(params: MyObjectAttributes) {
		super();
		this.params = params;
	}
}