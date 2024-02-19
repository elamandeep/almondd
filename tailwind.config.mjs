/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro, tsx, html}'],
	theme: {
		extend: {
			colors: {
				"redpink": "#EC7671",
				"darkpink": "#401714",
				"lightred": "#FF213A",
				"darkgreen": "#15392B",
				"lightpink": "#FFD4F1",
				"brown": "#380306",
				"yellow":"#f3c77c",
				"violet":"#2A0830",
				"goldyellow":"#FFBC89",
				"lightyellow":"#FFEA4A",
				"coralgreen":"#B7E2EF",
				"lightblack":"#1C1C1C",
				"darkred":"#A91E31",
				"olive":"#3C3318"
			  }
		},
		fontFamily:{
			playFair:["Playfair Display", "serif"],
		}
	},
	plugins: [],
}
