import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

import { About, Blogs, Contact, Hero, Works } from "./partials"
import { Publication } from "../../generated/graphql"
import { useScrollToTop } from "hooks"
import { Loader } from "components"

const All = () => {
	const [publication, setPublication] = useState<Publication>()
	useScrollToTop()

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
							brief
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
			<Hero />
			<About />
			{/* <Work /> */}
			<Works />
			{publication && <Blogs publication={publication} />}
			<Contact />
		</>
	)
}

export default All
