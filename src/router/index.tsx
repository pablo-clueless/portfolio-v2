import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

// import { About, All, Contact, Gallery, Home, Works } from "pages"
import { useConcurrentTransition } from "hooks"
import { Loader, MainLayout } from "components"
import { All } from "pages"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<All />} />
					{/* <Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Works />} />
					<Route path="/archive" element={<Gallery />} /> */}
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
