import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import React from "react"

import App from "App"
import "index.css"

const queryclient = new QueryClient()

const client = new ApolloClient({
	uri: "https://gql.hashnode.com",
	cache: new InMemoryCache(),
	headers: {
		Authorization: import.meta.env.VITE_HASHNODE_TOKEN,
	},
})

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryclient}>
			<ApolloProvider client={client}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ApolloProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
