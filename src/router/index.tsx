import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { About, Contact, History, Home, Work, Works } from "pages"
import { useConcurrentTransition } from "hooks"
import { Loader } from "components"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<History />} />
				<Route path="/works" element={<Works />} />
				<Route path="/works/:id" element={<Work />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Suspense>
	)
}

export default Router
