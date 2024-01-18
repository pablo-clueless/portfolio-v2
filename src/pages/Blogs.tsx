import { ArrowLeft } from "@phosphor-icons/react"
import { gql, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { PostEdge, Publication } from "../../generated/graphql"
import { BlogCard, Loader, Pagination } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import styles from "utils/styles"

const PAGE_SIZE = 18

const AllBlogs = () => {
	const [publication, setPublication] = useState<Publication>()
	const [current, setCurrent] = useState(1)
	const navigate = useNavigate()
	usePageTitle("Blog")
	useScrollToTop()

	const startIndex = (current - 1) * PAGE_SIZE
	const endIndex = startIndex + PAGE_SIZE

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

	const onPageChange = (value: number) => setCurrent(value)

	const handlePagination = () => {
		if (publication && publication.posts.edges.length > PAGE_SIZE) {
			return (
				<Pagination
					current={current}
					onPageChange={onPageChange}
					pageSize={PAGE_SIZE}
					total={publication.posts.edges.length}
				/>
			)
		}
	}

	useEffect(() => {
		setPublication(data?.publication)
	}, [data])

	if (loading) return <Loader />

	return (
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<div className="mb-10 flex w-full items-center justify-between">
				<button onClick={() => navigate(-1)} className="flex items-center gap-2">
					<ArrowLeft />
					Back
				</button>
			</div>
			<p className={styles.heading}>blog</p>
			<div className="mt-10 grid w-full grid-cols-3 gap-3 lg:min-h-[590px] lg:grid-cols-6">
				{publication &&
					publication.posts.edges
						.map((post: PostEdge) => <BlogCard key={post.node.id} {...post} />)
						.slice(startIndex, endIndex)}
			</div>
			{handlePagination()}
		</main>
	)
}

export default AllBlogs
