import { defineElement } from "lord-icon-element"
import Lottie from "lottie-web"

defineElement(Lottie.loadAnimation)

type LordIconTrigger = "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way"

type LordIconColors = {
	primary?: string
	secondary?: string
}

type LordIconProps = {
	src?: string
	trigger?: LordIconTrigger
	colors?: LordIconColors
	delay?: number
	size?: number
}

export const LordIcon = ({ colors, delay, size, src, trigger }: LordIconProps) => {
	return (
		<lord-icon
			colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
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
