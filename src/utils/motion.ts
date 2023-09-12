type AnimationType = "inertia" | "just" | "keyframes" | "spring" | "tween"
type AnimationDirection = "down" | "left" | "right" | "up"

export const fade = (
	delay: number,
	direction: AnimationDirection,
	duration: number,
	type: AnimationType
) => {
	return {
		initial: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 120 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		whileInView: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}

export const slide = (
	delay: number,
	direction: AnimationDirection,
	duration: number,
	type: AnimationType
) => {
	return {
		initial: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 120 : direction === "down" ? -100 : 0,
		},
		whileInView: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}

export const zoom = (
	delay: number,
	direction: AnimationDirection,
	duration: number,
	type: AnimationType
) => {
	return {
		initial: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 120 : direction === "down" ? -100 : 0,
			scale: 0.5,
		},
		whileInView: {
			x: 0,
			y: 0,
			scale: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}
