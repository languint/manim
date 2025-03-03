import { MObject } from "./object";
import { Scene } from "./object/scene";

export namespace Registry {
    const __scenes: Map<string, Scene> = new Map();
    const __tickers: Map<string, MObject> = new Map();

    export function getScene(name: string): Scene | undefined {
        return __scenes.get(name);
    }

    export function setScene(name: string, scene: Scene) {
        __scenes.set(name, scene);
    }

    export function removeScene(name: string) {
        if (getScene(name)) __scenes.delete(name);
    }

    export function getAllScenes() {
        return __scenes;
    }

    export function clearScenes() {
        __scenes.clear();
    }

    export function getTicker(name: string): MObject | undefined {
        return __tickers.get(name);
    }

    export function setTicker(name: string, scene: MObject) {
        __tickers.set(name, scene);
    }

    export function removeTicker(name: string) {
        if (getScene(name)) __tickers.delete(name);
    }

    export function getAllTickers() {
        return __tickers;
    }

    export function clearTickers() {
        __tickers.clear();
    }
}