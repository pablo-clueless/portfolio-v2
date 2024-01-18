import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Works = () => {
	return (
		<section className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>Projects</p>
			<p className="my-4 text-sm text-primary lg:text-3xl">
				<span className="text-dark-400">A small selection of projects</span> ranging from websites,
				landing pages to web apps.
			</p>
			<div className="mt-10 flex w-full flex-wrap  gap-10">
				{projects.map((project) => (
					<Card key={project.id} {...project} />
				))}
			</div>
		</section>
	)
}

export default Works
