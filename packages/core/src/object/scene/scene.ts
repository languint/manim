import { MObject, MObjectAttributes } from "../mobject";

type SceneAttributes = {
	name: string;
	destroyOnCompleted?: boolean;
} & MObjectAttributes;

export abstract class Scene extends MObject<SceneAttributes> {
	add(...args: { name: string; obj: MObject }[]): void {
		args.forEach((obj) => {
			this.addChild(obj.name, obj.obj);
		});
	}
}
