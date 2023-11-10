import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { useConcurrentTransition } from "hooks"
import { Loader, MainLayout } from "components"
import { All, AllBlogs, Blog } from "pages"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<All />} />
					<Route path="blog/" element={<AllBlogs />} />
					<Route path="blog/:slug" element={<Blog />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
