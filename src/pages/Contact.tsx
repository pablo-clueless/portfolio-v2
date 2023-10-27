import { Envelope, MapPin } from "@phosphor-icons/react"

// import { LordIcon } from "lord-icon"
import styles from "utils/styles"

const Contact = () => {
	return (
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>get in touch</p>
			<div className="mt-5 flex w-full flex-col gap-1 text-xl text-dark lg:mt-20 lg:gap-5 lg:text-4xl">
				<div className="row">
					<Envelope />
					<a href="mailto:smsnmicheal@gmail.com" className="link trs w-fit">
						smsnmicheal@gmail.com
					</a>
				</div>
				<div className="row">
					<MapPin />
					<a href="https://maps.app.goo.gl/p6cpi9fZ9gHPb3gA9" target="_blank" className="link trs w-fit">
						Lagos, Nigeria.
					</a>
				</div>
			</div>
		</main>
	)
}

export default Contact
