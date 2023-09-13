import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Navbar } from "components"
import styles from "utils/styles"
import { work } from "constants"

const History = () => {
	usePageTitle("Work History")
	useScrollToTop()

	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center bg-black/60 px-5 py-10 lg:px-20">
				<p className={`${styles.heading} before:content-["experience"]`}>work history</p>
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
					{work.map((wrk) => (
						<div key={wrk.id} className="flex w-full items-start gap-4">
							<img
								src={wrk.image}
								alt={wrk.company}
								className="aspect-square w-[50px] rounded lg:w-[100px]"
							/>
							<div className="text-white">
								<p className="text-xl font-extralight">{wrk.company}</p>
								<p className="text-lg font-extralight">{wrk.role}</p>
								<p className="text-sm font-semibold">{wrk.date}</p>
								<p className="mt-1 font-extralight">{wrk.highlights}</p>
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default History
