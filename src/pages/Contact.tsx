import { LordIcon } from "lord-icon"

import { Navbar } from "components"
import styles from "utils/styles"
import { handles } from "constants"

const Contact = () => {
	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center px-5 py-10 lg:px-20">
				<p className={`${styles.heading} before:content-["contact"]`}>get in touch</p>
				<div className="mt-0 w-full lg:mt-20 lg:w-2/3">
					<div className="flex items-center text-xl text-white lg:text-5xl">
						<LordIcon
							colors={{ primary: "#fff" }}
							size={72}
							src="https://cdn.lordicon.com/tkgyrmwc.json"
							trigger="loop"
						/>
						<a href="mailto:smsnmicheal@gmail.com" className="link">
							smsnmicheal@gmail.com
						</a>
					</div>
					<div className="mx-auto mt-10 flex w-2/3 items-center justify-between lg:mt-20 lg:w-full">
						{handles.map(({ icon, url }, index) => (
							<a key={index} href={url} target="_blank" className="trs text-white hover:scale-[1.2]">
								<span className="text-3xl lg:text-5xl">{icon}</span>
							</a>
						))}
					</div>
				</div>
			</main>
		</>
	)
}

export default Contact
