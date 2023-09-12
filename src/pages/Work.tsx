import { useNavigate, useParams } from "react-router-dom"
import { ArrowCircleRight } from "@phosphor-icons/react"

import { Footer, Navbar } from "components"
import { LordIcon } from "lord-icon"
import styles from "utils/styles"
import { works } from "works"

const Work = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const work = works.find((work) => work.id === id)
	const current = works.findIndex((work) => work.id === id)
	const next = (current + 1) % works.length
	const prev = (current - 1 + works.length) % works.length

	const onNext = () => navigate(`/works/${works[next].id}`)
	const onPrev = () => navigate(`/works/${works[prev].id}`)

	if (!work) return null

	return (
		<>
			<Navbar />
			<main className="flex w-full flex-col items-center bg-black/60 px-5 py-10 lg:px-20">
				<div className="flex w-full items-center justify-between">
					<button onClick={onPrev} className="rotate-180">
						<LordIcon
							colors={{ primary: "#fff" }}
							size={24}
							src="https://cdn.lordicon.com/zmkotitn.json"
							trigger="hover"
						/>
					</button>
					<button onClick={onNext} className="">
						<LordIcon
							colors={{ primary: "#fff" }}
							size={24}
							src="https://cdn.lordicon.com/zmkotitn.json"
							trigger="hover"
						/>
					</button>
				</div>
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
					<a
						href={work.url}
						className="link group mt-4 flex items-center gap-2 text-lg text-white/40 hover:text-white lg:text-2xl">
						{work.url}
						<ArrowCircleRight className="trs group-hover:-rotate-45" />
					</a>
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
			<Footer />
		</>
	)
}

export default Work
