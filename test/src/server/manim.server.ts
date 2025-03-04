import { Manim, ObjectTypes } from "@rbxts/manim";
import { VectorAttributes } from "@rbxts/manim/out/object";
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
		const vector = new Manim.Objects.Vector({
			Origin: new CFrame(0, 0, 0),
			CFrame: new CFrame(0, 0, 0),
			Color: Manim.Colors.RED_E,
		});

		const vector2 = new Manim.Objects.Vector({
			Origin: new CFrame(0, 0, 0),
			CFrame: new CFrame(0, 0, 0),
			Color: Manim.Colors.YELLOW_E,
		});

		const vector3 = new Manim.Objects.Vector({
			Origin: new CFrame(0, 0, 0),
			CFrame: new CFrame(0, 0, 0),
			Color: Manim.Colors.BLUE_E,
		});

		this.addChild("vector", vector);
		this.addChild("vector2", vector2);
		this.addChild("vector3", vector3);
	}

	tick(dt: number): void {
		this.tickAllChildren(dt);
	}
}

Manim.init();
