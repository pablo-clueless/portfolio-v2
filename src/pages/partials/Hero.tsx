import { Illustration } from "components"
import "./styles.css"

const Hero = () => {
	return (
		<section className="relative h-[84.5vh] w-full lg:h-[81vh]">
			<Illustration />
			<div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-black/5">
				<p className="mt-80 text-lg font-light uppercase text-primary lg:text-3xl">
					developer | fullstack | open source
				</p>
			</div>
		</section>
	)
}

export default Hero
