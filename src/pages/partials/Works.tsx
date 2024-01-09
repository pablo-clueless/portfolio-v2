import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Works = () => {
	return (
		<section className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>Selected Works</p>
			<div className="mt-10 flex w-full flex-col items-center gap-20">
				{projects
					.map((project, index) => <Card key={project.id} data={project} index={index + 1} />)
					.slice(0, 4)}
				<Link to="/project" className="link primary group flex w-fit items-center gap-2 text-primary">
					See all
					<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
				</Link>
			</div>
		</section>
	)
}

export default Works
