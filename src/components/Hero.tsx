import { motion } from "framer-motion"

import { fade } from "utils/motion"
import styles from "utils/styles"

const Hero = () => {
	return (
		<div className="relative grid min-h-[90vh] w-full grid-cols-1 px-5 lg:px-20">
			<div className="flex h-full w-full items-center justify-center overflow-hidden text-center">
				<motion.div {...fade(0.25, "up", 2, "spring")}>
					<p className={styles["section-subheading"]}></p>
					<p className="text-dark text-7xl font-bold dark:text-white lg:text-9xl">Samson Okunola</p>
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
