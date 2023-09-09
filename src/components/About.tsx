import styles from "utils/styles"

const About = () => {
	return (
		<section id="about" className="w-full px-5 py-6 lg:px-20">
			<p className={styles["section-heading"]}>about.</p>
			<p className={styles["section-subheading"]}>- Introduction</p>
			<p className="text-dark mt-5 w-full text-xl dark:text-white lg:w-2/3 lg:text-2xl">
				I was born and raised in Lagos, Nigeria. I am a full stack developer with love for sleek
				designs, motion and 3D. The endless possibilities of the web fuels my passion. I constantly
				endeavor to get better and surpass my threshold to deliver outstanding results. I am crunching
				numbers as the lead developer (FE) at Zummit Africa. <br />
				When I'm not coding, I love to relax by playing video games, watch anime and read books.
			</p>
		</section>
	)
}

export default About
