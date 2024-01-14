import { ArrowLeft } from "@phosphor-icons/react"
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
			<p className={styles.heading}>Projects</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
				{projects.map((project) => (
					<Card key={project.id} {...project} />
				))}
			</div>
		</main>
	)
}

export default Projects
