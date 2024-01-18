import { Link } from "react-router-dom"

import { handles } from "constants"
import styles from "utils/styles"

const Contact = () => {
	return (
		<section className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>get in touch</p>
			<p className="my-4 text-sm lg:text-3xl">
				I am a <span className="text-primary">open to work</span> on projects as a{" "}
				<span className="text-primary">frontend developer </span>
				<span className="text-primary"></span>.
			</p>
			<div className="mt-5 flex w-full flex-col gap-1 text-base text-dark lg:gap-5 lg:text-lg">
				<Link
					to="/start"
					className="button mb-4 max-w-fit border border-dark-400 bg-dark-400 text-light transition-all duration-500  hover:bg-light hover:text-dark-400">
					Start a project
				</Link>
				<div className="flex w-full items-center gap-5">
					{handles.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="_blank"
							className="text-xl text-dark-100 transition-colors duration-500 hover:text-dark-400 lg:text-3xl">
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Contact
