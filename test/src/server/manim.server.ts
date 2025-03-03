import { Manim } from "@rbxts/manim";


@Manim.Decorators.Ticker()
export class ColorSpace extends Manim.SceneWithCamera  {
    construct(): void {
        print("Hello from ColorSpace!");
    }

    tick(): void {
        
    }
}