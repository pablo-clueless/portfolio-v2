import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link to={`/blog/${node.slug}`}>
			<div className="aspect-square w-full rounded border-2 transition-all duration-300 hover:border-primary">
				<img src={node.coverImage?.url} alt="" className="h-1/2 w-full rounded-t" />
				<div className="w-full p-2">
					<div className="flex w-full items-center justify-between">
						<p className="text-xs">{new Date(node.publishedAt).toLocaleDateString()}</p>
						<p className="flex items-center text-xs">
							<Eye />
							{node.views}
						</p>
					</div>
					<p className="text-xl">{node.title}</p>
					<p className="text-xs font-semibold">{node.subtitle}</p>
				</div>
			</div>
		</Link>
	)
}

export default BlogCard
