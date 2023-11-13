import { ArrowLeft, Article, Eye } from "@phosphor-icons/react"
import { useNavigate, useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

import { Publication } from "../../generated/graphql"
import { usePageTitle, useScrollToTop } from "hooks"
import { Loader } from "components"
import styles from "utils/styles"

const Blog = () => {
	const [publication, setPublication] = useState<Publication | null>(null)
	usePageTitle(`${publication?.post?.title}`)
	const slug = useParams().slug as string
	const navigate = useNavigate()
	useScrollToTop()

	const query = gql`
		query FetchPost($slug: String!) {
			publication(host: "clueless-developer.hashnode.dev") {
				post(slug: $slug) {
					id
					title
					slug
					subtitle
					tags {
						id
						name
					}
					url
					coverImage {
						url
					}
					readTimeInMinutes
					publishedAt
					content {
						markdown
						html
					}
					views
				}
			}
		}
	`

	const { data, loading } = useQuery(query, { variables: { slug } })

	useEffect(() => {
		setPublication(data?.publication)
	}, [data])

	useEffect(() => {
		Prism.highlightAll()
	}, [])

	if (loading || publication === null) return <Loader />

	return (
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<div className="mb-10 flex w-full items-center justify-between">
				<button onClick={() => navigate(-1)} className="flex items-center gap-2">
					<ArrowLeft />
					Back
				</button>
			</div>
			{publication && (
				<div className="w-full">
					<p className={styles["blog-title"]}>
						<Article />
						{publication.post?.title}
					</p>
					<div className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
						<p className={styles["blog-subtitle"]}>{publication.post?.subtitle}</p>
						<p className={styles["blog-subtitle"]}>
							{new Date(publication.post?.publishedAt).toLocaleDateString("en-NG", {
								dateStyle: "medium",
							})}
						</p>
					</div>
					<div className="flex w-full flex-wrap items-center justify-between">
						<div className="flex flex-wrap items-center gap-2">
							{publication.post?.tags?.map((tag) => (
								<p key={tag.id} className={styles.tag}>
									{tag.name}
								</p>
							))}
						</div>
						<p className="flex items-center gap-1 text-sm font-semibold">
							<Eye />
							{publication.post?.views}
						</p>
					</div>
					<img
						src={publication.post?.coverImage?.url}
						alt={publication.post?.title}
						className="my-4 aspect-[2/1] w-full border-2"
					/>
					<div
						className="markdown w-full"
						dangerouslySetInnerHTML={{ __html: String(publication.post?.content.html) }}
					/>
				</div>
			)}
		</main>
	)
}

export default Blog
