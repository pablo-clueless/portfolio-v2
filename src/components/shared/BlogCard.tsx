import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link
			to={`/blog/${node.slug}`}
			key={node.id}
			className="flex w-fit items-center gap-2 transition-all duration-300">
			<p className="flex items-center gap-[2px] text-xs lg:text-sm">
				<Eye />
				{node.views}
			</p>
			<p className="link primary my-2 text-sm font-semibold text-primary lg:text-base">{node.title}</p>
			<p className="text-xs lg:text-sm">{new Date(node.publishedAt).toLocaleDateString("en-NG")}</p>
		</Link>
	)
}

export default BlogCard
