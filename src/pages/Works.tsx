import { Code } from "@phosphor-icons/react"

import { useScrollToTop } from "hooks"
import { Card } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Works = () => {
	useScrollToTop()

	return (
		<main className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>
				<Code />
				Selected Works
			</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
				{projects.map((project, index) => {
					const i = index + 1 < 10 ? `0${index + 1}` : index + 1
					return <Card key={project.id} data={project} index={`${i}`} />
				})}
			</div>
		</main>
	)
}

export default Works
