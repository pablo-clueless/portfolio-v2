import { StaticRouter } from "react-router-dom/server"
import ReactDOMServer from "react-dom/server"
import React from "react"

import App from "App"
import "index.css"

const SSRRender = (url: string | Partial<Location>) => {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</React.StrictMode>
	)
}

export default SSRRender
