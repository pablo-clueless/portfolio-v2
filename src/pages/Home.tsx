import { programmer } from "assets"
// import styles from "utils/styles"

const Home = () => {
	return (
		<main className="relative min-h-[84.5vh] w-full lg:min-h-[81vh]">
			<img src={programmer} className="h-[84.5vh] w-full object-cover object-center lg:h-[81vh]" />
			<div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-black/40">
				<p className="text-lg font-light uppercase text-light lg:text-3xl">
					developer | fullstack | open source
				</p>
			</div>
		</main>
	)
}

export default Home
