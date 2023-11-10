import { ArrowRight, Newspaper } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { PostEdge, Publication } from "../../generated/graphql"
import { BlogCard } from "components"
import styles from "utils/styles"

interface Props {
	publication: Publication
}

const Blogs = (props: Props) => {
	return (
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>
				<Newspaper />
				blogposts
			</p>
			<div className="mt-5 grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
				{props.publication?.posts?.edges
					.map((post: PostEdge) => <BlogCard key={post.node.id} {...post} />)
					.slice(0, 4)}
			</div>
			<Link to="/blog" className="link group mt-4 flex w-fit items-center gap-2 text-primary">
				See all
				<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
			</Link>
		</main>
	)
}

export default Blogs
