import { Colors } from "../../colors";
import { util } from "../../util";
import { MObject, MObjectAttributes } from "../mobject";

export type LineAttributes = {
    Length: number;
    Thickness?: number;
    Color?: Color3;
    CFrame?: CFrame;
} & MObjectAttributes;

export class Line extends MObject<LineAttributes> {
    private line: LineHandleAdornment;

    construct(): void {
        if (!this.getOutputInstance()) {
            util.logDebug("Manim::Line::construct(): Output instance is undefined!", "verbose", false);
        }

        const line = new Instance("LineHandleAdornment");
        line.Length = this.params.Length;
        line.Thickness = this.params.Thickness ?? 8;
        line.Color3 = this.params.Color ?? Colors.WHITE;
        line.Visible = this.params.Visible ?? true;
        line.Adornee = this.getOutputInstance() as PVInstance | undefined;
        line.Parent = this.getOutputInstance();

        this.line = line;
    }

    setNative(prop: keyof WritableInstanceProperties<LineHandleAdornment>, value: any) {
        if (!this.line) return;
        this.line[prop] = value as never;
    }

    tick(): void {
        if (!this.line) return;
        this.line.Length = this.params.Length;
        this.line.Thickness = this.params.Thickness ?? 6;
        this.line.Color3 = this.params.Color ?? Colors.WHITE;
        this.line.Adornee = this.getOutputInstance() as PVInstance | undefined;
        this.line.Parent = this.getOutputInstance();
    }

    constructor(params: LineAttributes) {
        super();
        this.params = params;
    }
}
