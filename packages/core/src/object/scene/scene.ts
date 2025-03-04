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
	add(objs: { [k: string]: MObject }): void {
		for (const [name, obj] of pairs(objs)) {
			this.addChild(tostring(name), obj);
		}
	}

	/**
	 * @name get
	 * @description Returns name-value pairs of the given objects.
	 * @param objs
	 * @returns 
	 */
	get(objs: string[]) {
		const children = [];

		for (const name of objs) {
			children.push([name, this.getChild(name)]);
		}

		return children;
	}

	tick(dt: number) {
		this.tickAllChildren(dt);
	}
}
