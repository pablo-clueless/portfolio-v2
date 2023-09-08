import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import React from "react"

import App from "App"
import "index.css"

const container = document.getElementById("app")

export const ReactApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	)
}

if (import.meta.hot || !container?.innerText) {
	const root = ReactDOM.createRoot(container!)
	root.render(<ReactApp />)
} else {
	ReactDOM.hydrateRoot(container!, <ReactApp />)
}
