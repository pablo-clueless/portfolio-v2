import { CodepenLogo, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

import { kappari, sun, zummit } from "assets"

export const SOCIAL_HANDLES = [
	{
		icon: <CodepenLogo />,
		url: "https://codepen.io/pablo-clueless",
	},
	{
		icon: <GithubLogo />,
		url: "https://github.com/pablo-clueless",
	},
	{
		icon: <LinkedinLogo />,
		url: "https://linkedin.com/in/samson-okunola/",
	},
	{
		icon: <TwitterLogo />,
		url: "https://twitter.com/pablo_clueless",
	},
]

export const WORK_HISTORY = [
	{
		id: "one",
		company: "Zummit Africa",
		role: "Lead Developer (FE)",
		image: zummit,
		date: "Apr 2022 - Active",
		highlights:
			"I had major contributions to the core features of Zapi v1 and v2. I boosted productivity and reduced average development time by introducing tools, procedures and processes that ensure faster and better development. I ran and participaed in code reviews and peering coding.",
	},
	{
		id: "two",
		company: "Kappari Enterprise",
		role: "Frontend Developer",
		image: kappari,
		date: "Jul 2020 - Jan 2022",
		highlights:
			"I developed and maintained web applications, collaborated with designers, product managers, and other developers to create high-quality products, ensuring scalabilty, responsive design and cross-browser compatibility.",
	},
	{
		id: "three",
		company: "Federal Palace Hotel & Casino",
		role: "Waiter/Bartender",
		image: sun,
		date: "January 2018 - December 2019",
		highlights:
			"I managed multiple areas of the hotel, including the coffee shop, bar, restaurant, and banquet. Incre",
	},
]
