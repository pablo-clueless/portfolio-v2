import { Envelope, MapPin, MegaphoneSimple } from "@phosphor-icons/react"

import styles from "utils/styles"

const Contact = () => {
	return (
		<main className="flex h-full w-full flex-col px-5 py-10 lg:px-40">
			<p className={styles.heading}>
				<MegaphoneSimple />
				get in touch
			</p>
			<div className="mt-5 flex w-full flex-col gap-1 text-lg text-dark lg:mt-20 lg:gap-5 lg:text-2xl">
				<div className="row group">
					<Envelope className="transition-all duration-300 group-hover:animate-bounce" />
					<a href="mailto:smsnmicheal@gmail.com" className="link trs w-fit">
						smsnmicheal@gmail.com
					</a>
				</div>
				<div className="row group">
					<MapPin className="transition-all duration-300 group-hover:animate-bounce" />
					<a href="https://maps.app.goo.gl/p6cpi9fZ9gHPb3gA9" target="_blank" className="link trs w-fit">
						Lagos, Nigeria.
					</a>
				</div>
			</div>
		</main>
	)
}

export default Contact
