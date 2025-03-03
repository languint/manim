import { util } from "../util";

export interface MObjectAttributes {
	visible: boolean;
}

export abstract class MObject<T extends MObjectAttributes = MObjectAttributes> {
	/**@hidden @internal */
	public __enabled: boolean = true;
	/**@hidden @internal */
	public __name: string = "scene";
	/**@hidden @internal */
	public __children: Map<string, MObject> = new Map();
	/**@hidden @internal */
	public __outputInstance: Instance | undefined;
	/**@hidden @internal */
	public __parent: MObject | undefined;
	/**@hidden @internal */
	public __destroying: boolean;

	public params: T;

	constructor(params: T, instance?: Instance) {
		this.params = params;
		this.__outputInstance = instance;
	}

	addChild(name: string, child: MObject) {
		this.__children.set(name, child);
	}

	removeChild(name: string) {
		this.__children.delete(name);
	}

	getChild(name: string): MObject | undefined {
		return this.__children.get(name);
	}

	getOutputInstance(): Instance | undefined {
		return this.__outputInstance;
	}

	/**
	 * @name construct
	 * @description This is the entry point of the MObject, this is where all code should be written.
	 */
	abstract construct(): void;
	/**
	 * @name tick()
	 * @description Updates the mobject.
	 * @description Use Ticker() to automatically call this function on RunService.Heartbeat()
	 */
	abstract tick(): void;

	/**
	 * @name _construct
	 * @description Does some preprocessing before calling construct()
	 * @hidden
	 * @internal
	 */
	_construct(): void {
		if (!this.__enabled) {
			util.logDebug(`Manim::MObject::_construct() -- MObject "${this.__name}" is disabled, skipping.`, "verbose");
			return;
		}

		this.construct();
		this.__children.forEach((child) => child._construct());
	}

	/**
	 * @name _tick
	 * @description Does some preprocessing before calling tick()
	 * @hidden
	 * @internal
	 */
	_tick(): void {
		if (!this.__enabled) return;
		this.tick();
	}

    /**
     * @name tickAllChildren
     * @description Recursively ticks all child MObjects of this object.
     */
    tickAllChildren() {
        this.__children.forEach((child) => child.tick());
    }

	destroy() {
		util.logDebug("Manim::MObject::destroy(): Destroying!", "verbose");
		this.__children.forEach((child) => child.destroy());
		this.getOutputInstance()?.Destroy();
	}
}
