import { Manim, ObjectTypes } from "@rbxts/manim";
import { Workspace } from "@rbxts/services";

@Manim.Decorators.Scene(
	{
		name: "VectorTestScene",
		destroyOnCompleted: false,
	},
	Workspace,
)
@Manim.Decorators.Ticker()
export class VectorTestScene extends Manim.SceneWithCamera {
	construct(): void {
		const axes = new Manim.Objects.Axes({
			Sizes: [10, 10, 10],
		});

		this.add({
			axes: axes,
		});
	}

	tick(dt: number): void {
		this.tickAllChildren(dt);
	}
}

Manim.init();
