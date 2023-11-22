import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link
			to={`/blog/${node.slug}`}
			key={node.id}
			className="flex w-full flex-col rounded bg-gray-500 p-3 text-white transition-colors duration-300 hover:bg-primary/75">
			<div className="flex w-full items-center justify-between text-[10px] font-semibold lg:text-xs">
				<p>{new Date(node.publishedAt).toLocaleDateString("en-NG")}</p>
				<p className="flex items-center gap-1">
					<Eye />
					{node.views}
				</p>
			</div>
			<p className="my-1 w-fit font-light lg:text-2xl">{node.title}</p>
			<p className="text-xs lg:text-sm">{node.brief}</p>
		</Link>
	)
}

export default BlogCard
