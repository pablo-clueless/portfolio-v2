import {
	CodepenLogo,
	DiscordLogo,
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from "@phosphor-icons/react"

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
		name: "codepen",
		url: "https://codepen.io/pablo-clueless",
	},
	{
		icon: <GithubLogo />,
		name: "github",
		url: "https://github.com/pablo-clueless",
	},
	{
		icon: <LinkedinLogo />,
		name: "linkedin",
		url: "https://linkedin.com/in/samson-okunola/",
	},
	{
		icon: <TwitterLogo />,
		name: "twitter",
		url: "https://twitter.com/pablo_clueless",
	},
	{
		icon: <DiscordLogo />,
		name: "discord",
		url: "https://discord.com/users/@pablo_clueless",
	},
]
