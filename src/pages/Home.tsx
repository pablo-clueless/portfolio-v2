import { About, Contact, Footer, Hero, Navbar, Work, Works } from "components"

const Home = () => {
	return (
		<>
			<Navbar />
			<main className="dark:bg-dark w-full bg-white">
				<Hero />
				<About />
				<Work />
				<Works />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default Home
