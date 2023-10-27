import { useEffect, useRef } from "react"

import { hero_video } from "assets"
// import styles from "utils/styles"

const Home = () => {
	const ref = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (ref.current) {
			ref.current.playbackRate = 0.5
		}
	}, [])

	useEffect(() => {
		const video = ref.current
		const handleUserInteraction = () => {
			if (video && video.paused) {
				video.play()
			}
		}
		document.addEventListener("click", handleUserInteraction)
		return () => document.removeEventListener("click", handleUserInteraction)
	}, [])

	return (
		<main className="relative min-h-[84.5vh] w-full lg:min-h-[81vh]">
			<video ref={ref} autoPlay loop className="h-[84.5vh] w-full object-cover lg:h-[81vh]">
				<source src={hero_video} type="video/mp4" media="all and (max-width: 480px)" />
			</video>
			<div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-black/40">
				<p className="text-lg font-extralight uppercase text-light lg:text-3xl">
					developer | fullstack | open source
				</p>
			</div>
		</main>
	)
}

export default Home
