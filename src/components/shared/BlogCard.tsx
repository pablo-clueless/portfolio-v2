import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link to={`/blog/${node.slug}`}>
			<div className="aspect-square w-full rounded border-2 border-gray-400 bg-light p-4 text-dark transition-all duration-300 hover:shadow-2xl">
				<div className="mb-10 flex w-full items-center justify-between text-xs">
					<p className="font-semibold">{new Date(node.publishedAt).toLocaleDateString()}</p>
					<p className="flex items-center gap-1">
						<Eye />
						{node.views}
					</p>
				</div>
				<p className="min-h-[25%] text-3xl">{node.title}</p>
				<p className="my-2 text-sm font-semibold">{node.subtitle}</p>
			</div>
		</Link>
	)
}

export default BlogCard
