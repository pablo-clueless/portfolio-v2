import type { ProjectProps } from "types"

import { chatt, olonagirl, onboard, three_shirt, traxo, zummit_ai } from "assets/images"

export const projects: ProjectProps[] = [
	{
		id: "dba68196-100c-4043-89b9-911aebdf65ae",
		title: "Olonagirl",
		subtitle: "",
		image: [olonagirl],
		url: "https://olonagirl.vercel.app/",
		category: "e-commerce",
		color: "#FFEA00",
		stacks: ["nextjs", "tailwind", "framer-motion", "commercejs"],
		meta: {
			title: "Afro-fashion at it's finest. Celebrating and promoting the Afro-fashion movement.",
			client: "Olonagirl",
			sector: "e-commerce",
			description:
				"Olonagirl is a platform to buy and sell clothes online. It is a platform that connects people to buy and sell clothes, and helps them to find the right clothes for them.",
			year: "2024",
		},
	},
	{
		id: "e11dcef1-1103-46d8-80c8-94a30cf823d7",
		title: "Zummit Africa",
		subtitle: "",
		image: [zummit_ai],
		url: "https://development.d23rav6l6c7mra.amplifyapp.com/",
		category: "website",
		color: "#FFEA00",
		stacks: ["react", "tailwind", "framer-motion", "vite"],
		meta: {
			title: "Building the next generaton of African tech giants.",
			client: "Zummit Africa",
			sector: "sftware developement",
			description: "Zummit Africa is a ",
			year: "2023",
		},
	},
	{
		id: "387d3954-c2ea-4186-a31f-e9e39fd0c78c",
		title: "Onboard",
		subtitle: "",
		image: [onboard],
		url: "https://onboard.com.ng",
		category: "website",
		color: "#6FA7B4",
		stacks: ["react", "tailwind", "framer-motion", "vite"],
		meta: {
			title: "Trusted partner in travels.",
			client: "Onboard",
			sector: "travel",
			description: "Onboard is a platform that helps people to book travels, hotels and .",
			year: "2022",
		},
	},
	{
		id: "d68841fd-d639-4a53-b9c5-e8ca37ef510a",
		title: "Traxo Finance",
		subtitle: "",
		image: [traxo],
		url: "https://master.d16z9rxqclx4lm.amplifyapp.com/",
		category: "digital product",
		color: "#151515",
		stacks: ["react", "tailwind", "headless UI", "vite"],
		meta: {
			title: "A financial platform that allows users to invest in cryptocurrencies.",
			client: "Traxo Finance",
			sector: "finance",
			description:
				"Traxo Finance is a financial platform that allows users to invest in cryptocurrencies. It is a platform that allows users to invest in cryptocurrencies and earn rewards. It is a platform that allows users to invest in cryptocurrencies and earn rewards.",
			year: "2021",
		},
	},
	{
		id: "54aa9973-0f32-4dff-8075-936425b14070",
		title: "Chatt",
		subtitle: "",
		image: [chatt],
		url: "https://chatt-mu.vercel.app",
		category: "website",
		color: "#3B82F6",
		stacks: ["react", "tailwind", "vite"],
		meta: {
			title: "Free messaging. VoIP and video calling. Connect seamlessly with friends and family.",
			client: "Chatt",
			sector: "software",
			description:
				"Chatt is a messaging app that allows users to chat with friends and family using voice or video calling.",
			year: "2021",
		},
	},
	{
		id: "88feedc7-7167-4284-8db5-7ed1bf0f22e4",
		title: "Three-Shirt",
		subtitle: "",
		image: [three_shirt],
		url: "https://3-shirt.vercel.app",
		category: "website",
		color: "#CDCDCD",
		stacks: ["react", "tailwind", "framer-motion", "threejs", "vite"],
		meta: {
			title: "Need a fast mockup for your next project? No problem.",
			client: "side project",
			sector: "software",
			description:
				"Three-Shirt is a website that allows users to create mockups of shirts. It allows adding logo, text, and images to your mockup.",
			year: "2023",
		},
	},
]
