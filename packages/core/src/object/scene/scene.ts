import { MObject, MObjectAttributes } from "../mobject";

export type SceneAttributes = {
	name: string;
	destroyOnCompleted?: boolean;
} & MObjectAttributes;

export abstract class Scene extends MObject<SceneAttributes> {
	/**
	 * @name add
	 * @description Adds all given child MObjects to the scene.
	 * @param args
	 */
	add(...args: { name: string; obj: MObject }[]): void {
		args.forEach((obj) => {
			this.addChild(obj.name, obj.obj);
		});
	}
}
