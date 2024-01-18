import { Link } from "react-router-dom"

import { handles } from "constants"
import styles from "utils/styles"

const Contact = () => {
	return (
		<section className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>get in touch</p>
			<div className="mt-5 flex w-full flex-col gap-1 text-base text-dark lg:gap-5 lg:text-lg">
				<Link
					to="/start"
					className="button mb-4 max-w-fit border border-dark-400 bg-dark-400 text-light transition-all duration-500  hover:bg-light hover:text-dark-400">
					Start a project
				</Link>
				<div className="grid w-full grid-cols-3 gap-3 lg:grid-cols-6">
					{handles.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="_blank"
							className="flex aspect-square w-full flex-col justify-between rounded border border-dark-400 bg-dark-400 p-2 text-light transition-all duration-500 hover:bg-light hover:text-dark-400">
							<div className="flex flex-col">
								<span className="capitalize">{item.name}</span>
								<span className="text-[10px] lg:text-sm">{item.handle}</span>
							</div>
							<div className="text-xl lg:text-2xl">{item.icon}</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Contact
