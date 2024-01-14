import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"

import { usePageTitle, useScrollToTop } from "hooks"
import { Loader } from "components"
import styles from "utils/styles"
import { projects } from "works"

const Project = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	useScrollToTop()

	const project = projects.find((project) => project.id === id)
	usePageTitle(`${project?.title}`)

	if (!project) return <Loader />

	return (
		<main className="my-10 flex w-full flex-col px-5 lg:px-40">
			<div className="mb-10 flex w-full items-center justify-between">
				<button onClick={() => navigate(-1)} className="flex items-center gap-2">
					<ArrowLeft />
					Back
				</button>
			</div>
			<section className="w-full">
				<p className={styles.heading}>{project.title}</p>
				<img
					src={project.image[0]}
					alt={project.title}
					className="my-20 aspect-[3/2] w-full rounded-2xl object-cover"
				/>
				<hr className="my-20" />
				<div className="grid w-full grid-cols-1 lg:grid-cols-2">
					<div className="w-full">
						<p className="text-base text-dark-400 lg:text-xl">Project Information</p>
					</div>
					<div className="w-full">
						<p className="text-2xl font-semibold lg:text-3xl">{project.meta.title}</p>
						<p className="text-base lg:text-lg">{project.meta.description}</p>
						<a
							href={project.url}
							target="_blank"
							className="link primary my-5 flex w-fit items-center gap-2 text-base text-primary lg:text-lg">
							{project.url}
						</a>
						<div className="grid w-full grid-cols-2 gap-1">
							<p className="text-base capitalize text-dark-100 lg:text-lg">
								Client: <br />
								<b className="text-dark-400">{project.meta.client}</b>
							</p>
							<p className="text-base capitalize text-dark-100 lg:text-lg">
								Sector: <br />
								<b className="text-dark-400">{project.meta.sector}</b>
							</p>
							<p className="text-base capitalize text-dark-100 lg:text-lg">
								Year: <br />
								<b className="text-dark-400">{project.meta.year}</b>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Project
