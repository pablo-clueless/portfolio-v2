import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link
			to={`/blog/${node.slug}`}
			key={node.id}
			className="flex aspect-square w-full flex-col justify-between gap-2 rounded border border-dark-400 bg-dark-400 p-2 text-light transition-all duration-300 hover:bg-light hover:text-dark-400">
			<div className="flex w-full flex-col">
				<span className="text-xs lg:text-lg">{node.title}</span>
				<span className="text-[10px] lg:text-xs">{new Date(node.publishedAt).toDateString()}</span>
			</div>
			<div className="flex items-center gap-1 text-[10px] lg:text-xs">
				<Eye /> <span>{node.views}</span>
			</div>
		</Link>
	)
}

export default BlogCard
