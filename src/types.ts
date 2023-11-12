export type ProjectProps = {
	category: string
	id: string
	image: string
	title: string
	url: string
	color: string
}

export type ExperiencesProps = {
	id: string
	company: string
	role: string
	image: string
	date: string
	highlights: string
}

export type ArchiveProps = {
	id: string
	image: string
	title: string
}

type LordIconTrigger = "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way"

type LordIconProps = {
	src?: string
	trigger?: LordIconTrigger
	colors?: string
	delay?: string | number
}

type LordIconElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
	LordIconProps

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			"lord-icon": LordIconElement
		}
	}
}
