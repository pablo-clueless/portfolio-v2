import { Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link
			to={`/blog/${node.slug}`}
			key={node.id}
			className="w-full border bg-light transition-all duration-300 hover:shadow-2xl">
			<img src={node.coverImage?.url} alt="" className="aspect-[3/2] w-full object-cover" />
			<div className="w-full p-2">
				<div className="flex w-full items-center justify-between text-xs lg:text-sm">
					<p>{new Date(node.publishedAt).toLocaleDateString("en-NG")}</p>
					<p className="flex items-center gap-[2px]">
						<Eye />
						{node.views}
					</p>
				</div>
				<p className="my-2 text-sm font-semibold text-primary lg:text-base">{node.title}</p>
				<p className="text-xs lg:text-sm">{node.brief.substring(0, 100)}...</p>
			</div>
		</Link>
	)
}

export default BlogCard
