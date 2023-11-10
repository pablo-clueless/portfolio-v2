import { Link } from "react-router-dom"

import { PostEdge } from "../../../generated/graphql"

const BlogCard = (props: PostEdge) => {
	const { node } = props

	return (
		<Link to={`/blog/${node.slug}`}>
			<div className="aspect-square w-full rounded border-2 transition-all duration-300 hover:border-primary">
				<img src={node.coverImage?.url} alt="" className="h-1/2 w-full rounded-t" />
				<div className="w-full p-2">
					<p className="text-xs">{new Date(node.publishedAt).toLocaleDateString()}</p>
					<p className="text-xl">{node.title}</p>
				</div>
			</div>
		</Link>
	)
}

export default BlogCard
