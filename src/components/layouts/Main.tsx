import { Outlet } from "react-router-dom"

import { Footer, Navbar } from "components"

const Main = () => {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Navbar />
			<div className="w-full overflow-x-hidden">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Main
