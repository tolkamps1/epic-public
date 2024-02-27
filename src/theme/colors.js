/** Palettes Generated Using https://github.com/mbitson/mcg */

const blueColors = {
	50: "#e5e8ee",
	100: "#bdc6d6",
	200: "#91a0ba",
	300: "#65799e",
	400: "#445d8a",
	500: "#234075",
	600: "#1f3a6d",
	700: "#1a3262",
	800: "#152a58",
	900: "#0c1c45",
	A100: "#7d9dff",
	A200: "#4a76ff",
	A400: "#1750ff",
	A700: "#003efc",
};

const greyColors = {
	50: "#f0f0f0",
	100: "#d9d9d9",
	200: "#c0c0c0",
	300: "#a6a6a6",
	400: "#939393",
	500: "#808080",
	600: "#787878",
	700: "#6d6d6d",
	800: "#636363",
	900: "#505050",
	A100: "#f8c0c0",
	A200: "#f39292",
	A400: "#ff5353",
	A700: "#ff3a3a",
};

const yellowColors = {
	50: "#fcf5e6",
	100: "#f7e5bf",
	200: "#f1d495",
	300: "#ebc26b",
	400: "#e7b54b",
	500: "#e3a82b",
	600: "#e0a026",
	700: "#dc9720",
	800: "#d88d1a",
	900: "#d07d10",
	A100: "#fffffe",
	A200: "#ffe7cb",
	A400: "#ffce98",
	A700: "#ffc27f",
};

const getPalette = (palette) => ({
	lightest: palette[100],
	light: palette[300],
	default: palette[500],
	dark: palette[700],
	darkest: palette[900],
});

const blues = getPalette(blueColors);
const greys = getPalette(greyColors);
const yellows = getPalette(yellowColors);

const bcBlack = "#292929";
const black = "#000000";
const white = "#FFFFFF";

export { bcBlack, black, blues, blueColors, greys, greyColors, white, yellows, yellowColors };
