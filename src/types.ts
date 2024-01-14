/* eslint-disable no-mixed-spaces-and-tabs */
import { ComponentProps } from "react"

export type ProjectProps = {
	category: string
	id: string
	image: string[]
	title: string
	subtitle: string
	url: string
	color: string
	stacks: string[]
	meta: {
		title: string
		description: string
		client: string
		sector: string
		year: string
	}
}

export type ExperiencesProps = {
	id: string
	company: string
	role: string
	active: boolean
	date: string
	highlights: string
}

export type ArchiveProps = {
	id: string
	image: string
	title: string
}

export type LordIconTrigger =
	| "in"
	| "hover"
	| "click"
	| "loop"
	| "loop-on-hover"
	| "morph"
	| "morph-two-way"

export type LordIconState =
	| "in-reveal"
	| "hover-slide"
	| "hover-rise"
	| "loop-roll"
	| "morph-slide"
	| "morph-two-way-slide"

export type LordIconColors = {
	primary?: string
	secondary?: string
}

type LordIconProps = {
	src?: string
	state?: LordIconState
	trigger?: LordIconTrigger
	delay?: string | number
	size?: number
	stroke?: "regular" | "bold"
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

export type InputProps =
	| (Omit<ComponentProps<"input">, "type"> & {
			as?: "input"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
			typed: React.InputHTMLAttributes<HTMLInputElement>["type"]
	  })
	| (ComponentProps<"textarea"> & {
			as: "textarea"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (ComponentProps<"select"> & {
			as: "select"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
