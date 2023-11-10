import { Newspaper } from "@phosphor-icons/react"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

import { PostEdge, Publication } from "../../generated/graphql"
import { BlogCard, Loader } from "components"
import styles from "utils/styles"

const AllBlogs = () => {
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
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>
				<Newspaper />
				blogposts
			</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
				{publication &&
					publication.posts.edges.map((post: PostEdge) => <BlogCard key={post.node.id} {...post} />)}
			</div>
		</main>
	)
}

export default AllBlogs
