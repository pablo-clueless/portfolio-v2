/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	darkMode: "class",
	theme: {
		fontFamily: {
			secondary: ["Architects Daughter", "cursive"],
		},
		extend: {
			animation: {
				rock: "rock 200ms cubic-bezier(0.22, 1, 0.36, 1)",
			},
			backgroundImage: {
				main:
					"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fJlKINj8I4HtUizaLOocDCYqKOph0dPBng&usqp=CAU')",
			},
			colors: {
				primary: "#3a53e4",
				secondary: "#fa2945",
				light: "#fbfbfb",
				mid: "#dde0e7",
				dark: "#29292b",
				"dark-400": "#151419",
				"dark-300": "#1b1b1e",
				"dark-200": "#262626",
				"dark-100": "#878787",
			},
			keyframes: {
				rock: {
					"0%": { transform: "translateX(-4px)" },
					"50%": { transform: "translateX(4px)" },
					"100%": { transform: "translateX(0px)" },
				},
			},
		},
	},
	plugins: [],
}
