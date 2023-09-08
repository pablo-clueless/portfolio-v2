import { Route, Routes } from "react-router-dom"

import { useConcurrentTransition } from "hooks"
import Home from "pages/Home"

const pages = import.meta.glob("../pages/*.tsx", { eager: true })

const routes = Object.keys(pages).map((path: string) => {
	// @ts-expect-error path is not null but ts thinks it is
	const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1]
	return {
		name,
		path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
		component: pages[path],
	}
})

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default Router
