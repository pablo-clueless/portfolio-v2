import { useParams } from "react-router-dom"

import { Navbar } from "components"
import styles from "utils/styles"
import { works } from "works"

const Work = () => {
	const { id } = useParams()

	const work = works.find((work) => work.id === id)

	if (!work) return null

	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center px-5 py-10 lg:px-20">
				<div className="my-20">
					<p className={styles.subheading}>{work.title}</p>
				</div>
				<img
					src={work.image}
					alt={work.title}
					className="aspect-[2/1] w-full object-cover object-top"
				/>
				<div className="mt-5 flex w-full flex-col items-center justify-center">
					<p className="text-sm font-medium uppercase text-white lg:text-base">
						<span className="font-extralight">role: </span>
						{work.role.map((text, index) => (
							<span key={index} className="mx-2">
								{text}
							</span>
						))}
					</p>
					<p className="text-sm font-medium uppercase text-white lg:text-base">
						<span className="font-extralight">category: </span>
						{work.category.map((text, index) => (
							<span key={index} className="mx-2">
								{text}
							</span>
						))}
					</p>
				</div>
				<div className="my-10 flex w-full flex-col items-center">
					<p className={styles.title}>[ brief ]</p>
					<p className="flex w-full flex-col items-center gap-4 text-center text-lg text-white lg:w-2/3 lg:text-xl">
						{work.description.map((text, index) => (
							<span key={index}>{text}</span>
						))}
					</p>
				</div>
				<div className="my-10 flex w-full flex-col items-center">
					<p className={styles.title}>[ screens ]</p>
					<p className="w-full text-center text-white lg:w-2/3"></p>
				</div>
			</main>
		</>
	)
}

export default Work
