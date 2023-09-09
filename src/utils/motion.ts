type AnimationType = "inertia" | "just" | "keyframes" | "spring" | "tween"
type AnimationDirection = "down" | "left" | "right" | "up"

export const textVariant = (delay: number) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
				delay,
			},
		},
	}
}

export const fadeIn = (
	direction: AnimationDirection,
	type: AnimationType,
	delay: number,
	duration: number
) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut",
			},
		},
	}
}

export const zoomIn = (delay: number, duration: number) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	}
}

export const slideIn = (
	direction: AnimationDirection,
	type: AnimationType,
	delay: number,
	duration: number
) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut",
			},
		},
	}
}

export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	}
}
