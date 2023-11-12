import { CodepenLogo, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

export const links = [
	{ label: "home", to: "/" },
	{ label: "about", to: "/about" },
	{ label: "projects", to: "/projects" },
	{ label: "contact", to: "/contact" },
	{ label: "archive", to: "/archive" },
]

export const handles = [
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
