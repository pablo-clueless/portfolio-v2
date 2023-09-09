/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	darkMode: "class",
	theme: {
		fontFamily: {
			secondary: ["Urbanist", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#3A53E4",
				secondary: "#FA2945",
				light: "#F5F5F8",
				mid: "#DDE0E7",
				dark: "#29292B",
			},
		},
	},
	variants: {
		display: ["group", "hover", "focus"],
	},
	plugins: [],
}
