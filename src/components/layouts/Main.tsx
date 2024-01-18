import { Outlet } from "react-router-dom"

import { Footer, Navbar } from "components"

const Main = () => {
	return (
		<main className="h-screen w-screen">
			<Navbar />
			<div className="w-full">
				<Outlet />
			</div>
			<Footer />
		</main>
	)
}

export default Main
