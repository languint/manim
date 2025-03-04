import { TweenService } from "@rbxts/services";
import { util } from "../../util";
import { Scene, SceneAttributes } from "./scene";

export abstract class SceneWithCamera extends Scene {
	private camera: Camera | undefined;
	private cameraTweenPlaying: boolean = false;

	moveCameraTo(
		cframe: CFrame,
		time: number,
		easing?: Enum.EasingStyle,
		direction?: Enum.EasingDirection,
		repeatCount?: number,
		reverses?: boolean,
		otherProps?: WritableInstanceProperties<Camera>,
	): Tween | undefined {
        if (!this.cameraTweenPlaying) return;
        
		if (!this.camera) {
			util.logDebug(`Manim::SceneWithCamera::moveCameraTo(): Camera does not exist!`);
			return;
		}

		const tween = TweenService.Create(this.camera, new TweenInfo(time, easing, direction, repeatCount, reverses), {
			CFrame: cframe,
			...otherProps,
		});

		this.cameraTweenPlaying = true;
		tween.Completed.Once(() => (this.cameraTweenPlaying = false));

		tween.Play();

		return tween;
	}

	setCamera(camera: Camera) {
		this.camera = camera;
	}

	tick(dt: number) {
		this.tickAllChildren(dt);
	}
}
