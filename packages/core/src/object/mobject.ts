import { util } from "../util";

export interface MObjectAttributes {
	Visible?: boolean;
}

export abstract class MObject<T extends MObjectAttributes = MObjectAttributes> {
	/**@hidden @internal */
	public __enabled: boolean = true;
	/**@hidden @internal */
	public __children: Map<string, MObject> = new Map();
	/**@hidden @internal */
	public __outputInstance: Instance | undefined;
	/**@hidden @internal */
	public __parent: MObject | undefined;
	/**@hidden @internal */
	public __destroying: boolean;

	public params: T;

	addChild<T extends MObjectAttributes = MObjectAttributes>(name: string, child: MObject<T>) {
		this.__children.set(name, child as MObject<T>);
		child.__parent = this;
	}

	removeChild(name: string) {
		this.__children.get(name)?.destroy();
		this.__children.delete(name);
	}

	getChild<T extends MObjectAttributes = MObjectAttributes>(name: string): MObject<T> | undefined {
		return this.__children.get(name) as MObject<T>;
	}

	getOutputInstance(): Instance | undefined {
		if (this.__parent) {
			return this.__parent.getOutputInstance();
		} else {
			return this.__outputInstance;
		}
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
	abstract tick(dt: number): void;

	/**
	 * @name _construct
	 * @description Does some preprocessing before calling construct()
	 * @hidden
	 * @internal
	 */
	_construct(): void {
		if (!this.__enabled) {
			util.logDebug(`Manim::MObject::_construct() -- MObject "${this}" is disabled, skipping.`, "verbose");
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
	_tick(dt: number): void {
		if (!this.__enabled) return;
		this.tick(dt);
	}

	/**
	 * @name tickAllChildren
	 * @description Recursively ticks all child MObjects of this object.
	 */
	tickAllChildren(dt: number) {
		this.__children.forEach((child) => child.tick(dt));
	}

	destroy() {
		util.logDebug("Manim::MObject::destroy(): Destroying!", "verbose");
		this.__children.forEach((child) => child.destroy());
		this.getOutputInstance()?.Destroy();
	}

	setParam(key: keyof T, value: unknown) {
		this.params![key] = value as never;
	}
}
