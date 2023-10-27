import { Outlet } from "react-router-dom"

import { Footer, Navbar } from "components"

const Main = () => {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Navbar />
			<div className="min-h-[50vh] w-full overflow-y-scroll">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Main
