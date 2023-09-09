import { Route, Routes } from "react-router-dom"
import { useSnapshot } from "valtio"

import { useConcurrentTransition } from "hooks"
import { Home } from "pages"
import state from "store"

const Router = () => {
	const location = useConcurrentTransition()
	const snap = useSnapshot(state)

	return (
		<div className={`w-screen select-none ${snap.mode === "dark" ? "dark" : ""}`}>
			<Routes location={location}>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default Router
