import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Navbar } from "components"
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
						<motion.div key={index} className="group relative cursor-pointer overflow-hidden">
							<Tilt options={{ max: 15, scale: 1, speed: 1000 }} className="w-full">
								<div onClick={() => navigate(`/works/${work.id}`)} className="aspect-[3/2] w-full">
									<img src={work.image} alt={work.title} className="trs h-full w-full object-cover" />
									<div className="trs absolute left-0 top-full h-3/4 w-full bg-black/90 p-4 group-hover:top-3/4">
										<p className="text-xl font-light text-white lg:text-2xl">{work.title}</p>
									</div>
								</div>
							</Tilt>
						</motion.div>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Works
