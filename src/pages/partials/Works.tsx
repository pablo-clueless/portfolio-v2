import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Works = () => {
	return (
		<section className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>Projects</p>
			<p className="my-4 text-sm font-semibold text-primary lg:text-3xl">
				<span className="text-dark-400">A small selection of projects</span> ranging from websites,
				landing pages to web apps.
			</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
				{projects.map((project) => <Card key={project.id} {...project} />).slice(0, 4)}
				<Link to="/projects" className="link primary group flex w-fit items-center gap-2 text-primary">
					See all
					<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
				</Link>
			</div>
		</section>
	)
}

export default Works
