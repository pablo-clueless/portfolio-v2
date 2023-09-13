import { ErrorBoundary } from "react-error-boundary"
import { AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import { useEffect } from "react"

import { ErrorFallback, Player } from "components"
import Router from "router"
import state from "store"

const App = () => {
	const snap = useSnapshot(state)

	useEffect(() => {
		window.addEventListener("click", () => (state.music = true))
		return () => window.removeEventListener("click", () => {})
	}, [])

	return (
		<AnimatePresence>
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				onReset={() => typeof window !== "undefined" && window.location.reload()}>
				<Router />
				<Player isPlaying={snap.music} />
			</ErrorBoundary>
		</AnimatePresence>
	)
}

export default App
