import { WorkCard } from "components"
import styles from "utils/styles"
import { work } from "work"

const Work = () => {
	return (
		<section className="my-10 flex w-full flex-col px-5 lg:px-40">
			<p className={styles.heading}>work experience</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-4 lg:w-2/3 lg:grid-cols-2">
				{work.map((item, index) => {
					const i = index + 1 < 10 ? `0${index + 1}` : index + 1
					return <WorkCard key={i} {...item} />
				})}
			</div>
		</section>
	)
}

export default Work
