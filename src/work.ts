import { kappari, sun, zummit } from "assets"
import { ExperiencesProps } from "types"

export const work: ExperiencesProps[] = [
	{
		id: "one",
		company: "OnboardNG",
		role: "Frontend Developer",
		image: zummit,
		date: "Nov 2022 - Active",
		highlights:
			"Refactored the entire frontend code and made it operational using the latest technologies and best practices. Improved performance and accessibility. Added new features and integrations.",
	},
	{
		id: "two",
		company: "Zummit Africa",
		role: "Lead Developer (FE)",
		image: zummit,
		date: "Apr 2022 - Nov 2023",
		highlights:
			"I had major contributions to the core features of Zapi v1 and v2. I boosted productivity and reduced average development time by introducing tools, procedures and processes that ensure faster and better development. I ran and participated in code reviews and peering coding.",
	},
	{
		id: "three",
		company: "Kappari Enterprise",
		role: "Frontend Developer",
		image: kappari,
		date: "Jul 2020 - Jan 2022",
		highlights:
			"I developed and maintained web applications, collaborated with designers, product managers, and other developers to create high-quality products, ensuring scalability, responsive design and cross-browser compatibility.",
	},
	{
		id: "four",
		company: "Federal Palace Hotel & Casino",
		role: "Waiter/Bartender",
		image: sun,
		date: "Jan 2018 - Dec 2019",
		highlights:
			"I managed multiple areas of the hotel, including the coffee shop, bar, restaurant, and banquet. Increased sales by 30% in 6 months and got promoted twice in a year.",
	},
]
