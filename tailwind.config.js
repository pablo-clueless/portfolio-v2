/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	darkMode: "class",
	theme: {
		fontFamily: {
			secondary: ["Urbanist", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				main:
					"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fJlKINj8I4HtUizaLOocDCYqKOph0dPBng&usqp=CAU')",
			},
			colors: {
				primary: "#3A53E4",
				secondary: "#FA2945",
				light: "#F5F5F8",
				mid: "#DDE0E7",
				dark: "#29292B",
			},
		},
	},
	plugins: [],
}
