import { Newspaper } from "@phosphor-icons/react"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { PostEdge, Publication } from "../../generated/graphql"
import { Loader } from "components"
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
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>
				<Newspaper />
				blogposts
			</p>
			<ul className="cool-list mt-10 flex w-full flex-col gap-4">
				{publication &&
					publication.posts.edges.map((post: PostEdge) => (
						<li key={post.node.id} className="">
							<div className="flex w-full items-center justify-between">
								<Link to={`/blog/${post.node.slug}`} className="link text-xl font-light lg:text-2xl">
									{post.node.title}
								</Link>
								<p className="text-xs font-medium lg:text-sm">
									{new Date(post.node.publishedAt).toDateString()}
								</p>
							</div>
						</li>
					))}
			</ul>
		</main>
	)
}

export default AllBlogs
