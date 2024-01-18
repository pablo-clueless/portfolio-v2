import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge, Publication } from "../../../generated/graphql"
import { BlogCard } from "components"
import styles from "utils/styles"

interface Props {
	publication: Publication
}

const Blogs = (props: Props) => {
	return (
		<section className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>blog</p>
			<p className="my-4 text-sm text-primary lg:text-3xl">
				<span className="text-dark-400">I write articles on</span> web development, occassionally.
			</p>
			<div className="mt-5 grid w-full grid-cols-3 gap-3 lg:grid-cols-6">
				{props.publication?.posts?.edges
					.map((post: PostEdge) => <BlogCard key={post.node.id} {...post} />)
					.slice(0, 6)}
			</div>
			<Link to="/blog" className="link primary group mt-6 flex w-fit items-center gap-2 text-primary">
				View all
				<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
			</Link>
		</section>
	)
}

export default Blogs
