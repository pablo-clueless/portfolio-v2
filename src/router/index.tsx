import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { Blog, Blogs, Home, Projects } from "pages"
import { useConcurrentTransition } from "hooks"
import { Loader, MainLayout } from "components"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="blog/" element={<Blogs />} />
					<Route path="blog/:slug" element={<Blog />} />
					<Route path="project" element={<Projects />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
