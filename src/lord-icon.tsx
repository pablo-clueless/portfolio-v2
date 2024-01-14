import { defineElement } from "lord-icon-element"
import Lottie from "lottie-web"

import type { LordIconState, LordIconTrigger } from "types"

defineElement(Lottie.loadAnimation)

type LordIconColors = {
	primary?: string
	secondary?: string
}

type LordIconProps = {
	src?: string
	state?: LordIconState
	trigger?: LordIconTrigger
	colors?: LordIconColors
	delay?: number
	size?: number
	stroke?: "regular" | "bold"
}

export const LordIcon = ({ colors, delay, size, src, trigger }: LordIconProps) => {
	return (
		<lord-icon
			color={`primary:${colors?.primary},secondary:${colors?.secondary}`}
			src={src}
			trigger={trigger}
			delay={delay}
			style={{
				width: size,
				height: size,
			}}
		/>
	)
}
