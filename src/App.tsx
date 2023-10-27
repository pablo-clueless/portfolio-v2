import { ErrorBoundary } from "react-error-boundary"
import { AnimatePresence } from "framer-motion"

import { ErrorFallback } from "components"
import Router from "router"

const App = () => {
	return (
		<AnimatePresence>
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				onReset={() => typeof window !== "undefined" && window.location.reload()}>
				<Router />
			</ErrorBoundary>
		</AnimatePresence>
	)
}

export default App
