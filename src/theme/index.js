import { createTheme } from "@mui/material/styles";

import { bcBlack, black, blues, greys, white, yellows } from "./colors";

/*
	Material UI uses the following values for sizing (based on 16px = 1.0rem base size):
	 7      0.5rem       8px
	14      1.0rem      16px
	21      1.5rem      24px
	28      2.0rem      32px
	35      2.5rem      40px
	42      3.0rem      48px
	49      3.5rem      56px
	56      4.0rem      64px
*/

const theme = createTheme({
	typography: {
		color: bcBlack,
		fontFamily: "BC Sans, Calibri, Arial, sans-serif",
		fontSize: 14,
		lineHeight: 1.5,
		h1: {
			fontSize: 28 /* 32px */,
			fontWeight: 600,
		},
		h2: {
			fontSize: 21 /* 24px */,
			fontWeight: 700,
		},
		h3: {
			fontSize: 18 /* 21px */,
			fontWeight: 700,
		},
		h4: {
			fontSize: 16 /* 18px */,
			fontWeight: 700,
		},
		h5: {
			fontSize: 14 /* 16px */,
			fontWeight: 700,
		},
		body1: {
			color: bcBlack,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					textTransform: "none",
				},
				contained: {
					backgroundColor: blues.default,
					boxShadow: "none",
					color: white,
					height: "48px",
					"&:hover": {
						boxShadow: "none",
					},
					"&.Mui-disabled": {
						color: white,
						backgroundColor: blues.light,
					},
				},
				containedPrimary: {
					backgroundColor: blues.default,
					"&:hover": {
						backgroundColor: blues.dark,
						color: white,
					},
					"&.Mui-disabled": {
						color: white,
						backgroundColor: blues.lightest,
					},
				},
				containedSecondary: {
					backgroundColor: yellows.default,
					color: black,
					"&:hover": {
						backgroundColor: yellows.dark,
						color: black,
					},
					"&.Mui-disabled": {
						backgroundColor: yellows.lightest,
						color: black,
					},
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					fontWeight: 700,
					textTransform: "none",
				},
			},
		},
	},
	palette: {
		common: {
			black,
			white,
		},
		primary: {
			main: blues.default,
			dark: blues.dark,
			light: blues.light,
		},
		grey: {
			main: greys.default,
			dark: greys.dark,
			light: greys.light,
		},
		secondary: {
			main: yellows.default,
			dark: yellows.dark,
			light: yellows.light,
		},
		text: {
			primary: bcBlack,
		},
	},
});

export default theme;
