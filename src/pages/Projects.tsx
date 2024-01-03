import { ArrowLeft, Kanban } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

import { usePageTitle, useScrollToTop } from "hooks"
import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Projects = () => {
	const navigate = useNavigate()
	usePageTitle("Projects")
	useScrollToTop()

	return (
		<main className="my-10 flex w-full flex-col px-5 lg:px-40">
			<div className="mb-10 flex w-full items-center justify-between">
				<button onClick={() => navigate(-1)} className="flex items-center gap-2">
					<ArrowLeft />
					Back
				</button>
			</div>
			<p className={styles.heading}>
				<Kanban />
				Projects
			</p>
			<div className="mt-10 flex w-full flex-col items-center gap-20">
				{projects.map((project, index) => (
					<Card key={project.id} data={project} index={index + 1} />
				))}
			</div>
		</main>
	)
}

export default Projects
