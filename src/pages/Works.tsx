import { useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Image, Navbar } from "components"
import styles from "utils/styles"
import { works } from "works"

const Works = () => {
	const navigate = useNavigate()
	usePageTitle("Works")
	useScrollToTop()

	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center bg-black/50 px-5 lg:px-20">
				<p className={`${styles.heading} before:content-["works"]`}>projects</p>
				<div className="mt-20 grid w-full grid-cols-1 gap-20 py-10 lg:grid-cols-2">
					{works.map((work, index) => (
						<div key={index} className="group flex w-full">
							<div onClick={() => navigate(`/works/${work.id}`)} className="w-full cursor-pointer">
								<Tilt
									options={{ max: 15, scale: 1, speed: 1000 }}
									className="mb-3 aspect-[3/2] w-full lg:mb-5">
									<Image src={work.image} alt={work.title} />
								</Tilt>
								<p className="text-2xl font-bold text-white lg:text-4xl">{work.title}</p>
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Works
