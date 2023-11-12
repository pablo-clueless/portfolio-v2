import { ArrowRight, Kanban } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Works = () => {
	return (
		<section className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>
				<Kanban />
				Selected Works
			</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
				{projects
					.map((project, index) => {
						const i = index + 1 < 10 ? `0${index + 1}` : index + 1
						return <Card key={project.id} data={project} index={`${i}`} />
					})
					.slice(0, 4)}
			</div>
			<Link to="/project" className="link group mt-6 flex w-fit items-center gap-2 text-primary">
				See all
				<ArrowRight className="transition-all duration-300 group-hover:ml-3" />
			</Link>
		</section>
	)
}

export default Works
