import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

import { Publication } from "../../generated/graphql"
import Contact from "./Contact"
import Works from "./Works"
import Blogs from "./Blogs"
import About from "./About"
import Home from "./Home"
import { Loader } from "components"

const All = () => {
	const [publication, setPublication] = useState<Publication>()

	const query = gql`
		query FetchAllPosts($host: String!) {
			publication(host: $host) {
				posts(first: 0) {
					edges {
						node {
							id
							title
							slug
							subtitle
							coverImage {
								url
							}
							publishedAt
							views
						}
					}
				}
			}
		}
	`

	const { data, loading } = useQuery(query, {
		variables: { host: "clueless-developer.hashnode.dev" },
	})

	useEffect(() => {
		setPublication(data?.publication)
	}, [data])

	if (loading) return <Loader />

	return (
		<>
			<Home />
			<About />
			<Works />
			{publication && <Blogs publication={publication} />}
			<Contact />
		</>
	)
}

export default All
