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
			<div className="mt-5 flex flex-col">
				{props.publication?.posts?.edges
					.map((post: PostEdge) => <BlogCard key={post.node.id} {...post} />)
					.slice(0, 5)}
			</div>
			<Link to="/blog" className="link group mt-6 flex w-fit items-center gap-2 text-primary primary">
				See all
				<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
			</Link>
		</section>
	)
}

export default Blogs
