import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { About, Contact, History, Home, Work, Works } from "pages"
import { useConcurrentTransition } from "hooks"
import { Loader, Plane } from "components"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<div className="relative w-full">
				<div className="absolute left-0 top-0 !z-[5] w-full">
					<Routes location={location}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<History />} />
						<Route path="/works" element={<Works />} />
						<Route path="/works/:id" element={<Work />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<div className="fixed left-0 top-0 h-screen w-full bg-black/60">
					<Plane />
				</div>
			</div>
		</Suspense>
	)
}

export default Router
