/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	plugins: [require("tailwind-gradient-mask-image")],
	theme: {
		extend: {
			keyframes: {
				blur: {
					"0%": { filter: "blur(100px)" },
					"20%": { filter: "blur(150px)" },
					"40%": { filter: "blur(170px)" },
					"60%": { filter: "blur(120px)" },
					"80%": { filter: "blur(90px)" },
					"100%": { filter: "blur(100px)" },
				},
			},
			animation: {
				blur: "blur 10s ease-in-out infinite",
			},
			colors: {
				stone: colors.stone,
			},
			fontFamily: {
				sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
			},
		},
		container: {
			padding: "2rem",
			center: true,
		},
	},
};
