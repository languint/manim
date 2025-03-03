import { Manim } from "@rbxts/manim";
import { ConeAttributes } from "@rbxts/manim/out/object";
import { Workspace } from "@rbxts/services";

@Manim.Decorators.Scene(
	{
		name: "ColorSpace",
		visible: true,
		destroyOnCompleted: false,
	},
	Workspace,
)
@Manim.Decorators.Ticker()
export class ColorSpace extends Manim.SceneWithCamera {
	construct(): void {
		const cone = new Manim.Objects.Cone({
			visible: true,
			CFrame: new CFrame(),
			Color: Manim.Colors.BLUE_E,
		});

		this.addChild<ConeAttributes>("cone", cone);
	}

	tick(dt: number): void {
		this.tickAllChildren(dt);
	}
}

Manim.init();
