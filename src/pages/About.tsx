import { Link } from "react-router-dom"

import { Footer, Navbar } from "components"
import styles from "utils/styles"

const About = () => {
	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center bg-black/60 px-5 py-10 lg:px-20">
				<p className={`${styles.heading} before:content-["about"]`}>introduction</p>
				<img
					src="https://wallpapercave.com/wp/wp10634611.jpg"
					alt="a picture of samson"
					className="aspect-[2/1] w-full border object-cover object-top"
				/>
				<div className="my-10 flex w-full flex-col items-center">
					<p className={styles.title}>[ bio ]</p>
					<p className="flex w-full flex-col items-center gap-4 text-center text-lg text-white lg:w-2/3 lg:text-xl">
						<span>
							Samson Okunola is a developer with over 3 years experience in design and development. He was
							born and raised in Lagos, Nigeria. He loves sleek designs, motion and 3D. The endless
							possibilities of the web fuels his passion. He constantly endeavor to get better and surpass
							his threshold and deliver outstanding results.
						</span>
						<span>
							As a developer, Samson's expertise includes React, Next.js, Vue, Javascript, Typescript,
							Expressjs and a wide range of related frameworks and libraries. He has experience with
							Three.js and WebGL, Python, along with CSS and Sass. Everything a web based project might
							need.
						</span>
						<span>
							He is an irregular writer on{" "}
							<a href="https://clueless-developer.hashnode.dev/" target="_blank" className={styles.link}>
								hashnode
							</a>{" "}
							and contributes to open source at{" "}
							<a href="https://communitypro.netlify.app/" target="_blank" className={styles.link}>
								community pro
							</a>
							. He loves to watch anime, read books and play video games to relax.
						</span>
						<span>
							<Link to="/contact" className={styles.link}>
								Contact me
							</Link>{" "}
							for availability for freelance work or as part of a team.
						</span>
					</p>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default About
