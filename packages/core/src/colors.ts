export const Colors = {
    BLUE_E: Color3.fromHex("#1C758A"),
    BLUE_D: Color3.fromHex("#29ABCA"),
    BLUE_C: Color3.fromHex("#58C4DD"),
    BLUE_B: Color3.fromHex("#9CDCEB"),
    BLUE_A: Color3.fromHex("#C7E9F1"),
    TEAL_E: Color3.fromHex("#49A88F"),
    TEAL_D: Color3.fromHex("#55C1A7"),
    TEAL_C: Color3.fromHex("#5CD0B3"),
    TEAL_B: Color3.fromHex("#76DDC0"),
    TEAL_A: Color3.fromHex("#ACEAD7"),
    GREEN_E: Color3.fromHex("#699C52"),
    GREEN_D: Color3.fromHex("#77B05D"),
    GREEN_C: Color3.fromHex("#83C167"),
    GREEN_B: Color3.fromHex("#A6CF8C"),
    GREEN_A: Color3.fromHex("#C9E2AE"),
    YELLOW_E: Color3.fromHex("#E8C11C"),
    YELLOW_D: Color3.fromHex("#F4D345"),
    YELLOW_C: Color3.fromHex("#FFFF00"),
    YELLOW_B: Color3.fromHex("#FFEA94"),
    YELLOW_A: Color3.fromHex("#FFF1B6"),
    GOLD_E: Color3.fromHex("#C78D46"),
    GOLD_D: Color3.fromHex("#E1A158"),
    GOLD_C: Color3.fromHex("#F0AC5F"),
    GOLD_B: Color3.fromHex("#F9B775"),
    GOLD_A: Color3.fromHex("#F7C797"),
    RED_E: Color3.fromHex("#CF5044"),
    RED_D: Color3.fromHex("#E65A4C"),
    RED_C: Color3.fromHex("#FC6255"),
    RED_B: Color3.fromHex("#FF8080"),
    RED_A: Color3.fromHex("#F7A1A3"),
    MAROON_E: Color3.fromHex("#94424F"),
    MAROON_D: Color3.fromHex("#A24D61"),
    MAROON_C: Color3.fromHex("#C55F73"),
    MAROON_B: Color3.fromHex("#EC92AB"),
    MAROON_A: Color3.fromHex("#ECABC1"),
    PURPLE_E: Color3.fromHex("#644172"),
    PURPLE_D: Color3.fromHex("#715582"),
    PURPLE_C: Color3.fromHex("#9A72AC"),
    PURPLE_B: Color3.fromHex("#B189C6"),
    PURPLE_A: Color3.fromHex("#CAA3E8"),
    GREY_E: Color3.fromHex("#222222"),
    GREY_D: Color3.fromHex("#444444"),
    GREY_C: Color3.fromHex("#888888"),
    GREY_B: Color3.fromHex("#BBBBBB"),
    GREY_A: Color3.fromHex("#DDDDDD"),
    WHITE: Color3.fromHex("#FFFFFF"),
    BLACK: Color3.fromHex("#000000"),
    GREY_BROWN: Color3.fromHex("#736357"),
    DARK_BROWN: Color3.fromHex("#8B4513"),
    LIGHT_BROWN: Color3.fromHex("#CD853F"),
    PINK: Color3.fromHex("#D147BD"),
    LIGHT_PINK: Color3.fromHex("#DC75CD"),
    GREEN_SCREEN: Color3.fromHex("#00FF00"),
    ORANGE: Color3.fromHex("#FF862F"),
    colorGradient(colors: Color3[], n: number): Color3[] {
        if (n === 0) return [];
    
        const alphas = linearSpace(0, 1, n);
        const result: Color3[] = [];
    
        for (let i = 0; i < n; i++) {
            const alpha = alphas[i];
            const idx = math.floor(alpha * (colors.size() - 1));
            const f = alpha * (colors.size() - 1) - idx;
    
            const col1 = colors[idx];
            const col2 = colors[math.min(idx + 1, colors.size() - 1)];
    
            const r = math.sqrt((1 - f) * (col1.R * col1.R) + f * (col2.R * col2.R));
            const g = math.sqrt((1 - f) * (col1.G * col1.G) + f * (col2.G * col2.G));
            const b = math.sqrt((1 - f) * (col1.B * col1.B) + f * (col2.B * col2.B));
    
            result.push(new Color3(r, g, b));
        }
    
        return result;
    }
}

function linearSpace(start: number, stop: number, num: number) {
    const arr: number[] = [];
    if (num === 1) {
        arr.push(start);
    } else {
        const step = (stop - start) / (num - 1);
        for (let i = 0; i < num; i++) {
            arr.push(start + i * step);
        }
    }
    return arr;
}