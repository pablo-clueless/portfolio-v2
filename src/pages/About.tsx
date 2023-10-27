import styles from "utils/styles"

const About = () => {
	return (
		<main className="flex w-full flex-col px-5 lg:px-40">
			<div className="flex w-full flex-col py-10">
				<p className={styles.heading}>About</p>
				<div className="my-10 flex w-full flex-col">
					<p className="flex w-full flex-col gap-4 text-lg font-light text-dark lg:w-2/3 lg:text-xl">
						<span>
							Samson Okunola is a developer with over 3 years experience in design and development. He was
							born and raised in Lagos, Nigeria. He is a lover of the web and the endless possibilities of
							the web fuels his passion. He constantly endeavor to get better and surpass his threshold and
							deliver outstanding results.
						</span>
						<span>
							As a developer, Samson's expertise includes React, Next.js, Vue, Javascript, Typescript,
							Expressjs and a wide range of related frameworks and libraries. He has experience with
							Three.js and WebGL, Python, along with CSS and Sass. Everything a web based project might
							need. He also does cross-platform mobile development using React-Native.
						</span>
						<span>
							He is an irregular writer on{" "}
							<a
								href="https://clueless-developer.hashnode.dev/"
								target="_blank"
								className="link text-secondary">
								hashnode
							</a>
							, contributes to open source at{" "}
							<a href="https://communitypro.netlify.app/" target="_blank" className="link text-secondary">
								community pro
							</a>{" "}
							and has play pens on{" "}
							<a href="https://codepen.io/pablo-clueless" target="_blank" className="link text-secondary">
								codepen
							</a>
							. He loves playing video games, watching anime and reading books.
						</span>
					</p>
				</div>
			</div>
		</main>
	)
}

export default About
