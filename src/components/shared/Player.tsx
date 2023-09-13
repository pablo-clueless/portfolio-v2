import { useEffect } from "react"

import { journey_end } from "assets/audios"

interface Props {
	isPlaying: boolean
}

const Player = (props: Props) => {
	useEffect(() => {
		const audio = new Audio(journey_end)
		audio.loop = true
		audio.addEventListener("canplaythrough", () => {
			if (props.isPlaying) {
				audio.play()
			} else {
				audio.pause()
			}
		})

		return () => {
			audio.pause()
			audio.removeEventListener("canplaythrough", () => {})
		}
	}, [props.isPlaying])

	return <div />
}

export default Player
