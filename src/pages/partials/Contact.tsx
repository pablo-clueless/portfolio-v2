import { Link } from "react-router-dom"

import { handles } from "constants"
import styles from "utils/styles"

const Contact = () => {
	return (
		<section className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>get in touch</p>
			<div className="mt-5 flex w-full flex-col gap-1 text-base text-dark lg:gap-5 lg:text-lg">
				<Link to="/start" className="button mb-4 max-w-fit bg-dark-400 text-light">
					Start a project
				</Link>
				<div className="group flex flex-col">
					<span className="text-sm">Socials</span>
					{handles.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="_blank"
							className="link my-1 w-fit capitalize text-dark-100 transition-all duration-500 hover:text-dark-400">
							{item.name}
						</a>
					))}
				</div>
				<div className="group flex flex-col">
					<span className="text-sm">Mail</span>
					<a
						href="mailto:smsnmicheal@gmail.com"
						className="link w-fit text-dark-100 transition-all duration-500 hover:text-dark-400">
						smsnmicheal@gmail.com
					</a>
				</div>
			</div>
		</section>
	)
}

export default Contact
