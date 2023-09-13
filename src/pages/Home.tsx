import { Pause, Play } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useSnapshot } from "valtio"

import { handles } from "constants/index"
import { slide } from "utils/motion"
import { logo_invert } from "assets"
import { usePageTitle } from "hooks"
import state from "store"

const links = [
	{ label: "about", to: "/about" },
	{ label: "work history", to: "/work" },
	{ label: "works", to: "/works" },
	{ label: "contact", to: "/contact" },
]

const Home = () => {
	const snap = useSnapshot(state)
	usePageTitle("Home")

	return (
		<main className="grid h-screen w-full grid-cols-1 transition-all duration-500">
			<div className="flex h-[10vh] w-full items-center justify-between bg-dark px-5 lg:px-20">
				<Link to="/">
					<img src={logo_invert} alt="" className="w-[30px] lg:w-[50px]" />
				</Link>
				<div className="text-white">
					<button
						onClick={() => (state.music = !state.music)}
						className="trs text-xl active:animate-ping">
						{snap.music ? <Pause /> : <Play />}
					</button>
				</div>
			</div>
			<div className="relative h-[75vh] w-full">
				<div className="absolute left-0 top-0 !z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 text-center">
					<div className="w-full overflow-hidden">
						<motion.div {...slide(0.25, "up", 1, "spring")} className="flex flex-col items-center">
							<p className="text-7xl font-extralight uppercase text-white lg:text-9xl">Samson Okunola</p>
						</motion.div>
					</div>
					<p className="flex w-fit items-center justify-center text-sm font-semibold uppercase text-secondary lg:text-xl">
						developer | open source
					</p>
					<div className="mx-auto mt-40 flex w-4/5 items-center justify-between lg:w-2/3">
						{links.map((link) => (
							<Link key={link.label} to={link.to} className="link capitalize text-white">
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="flex h-[15vh] w-full flex-col items-center justify-between bg-dark px-5 py-10 lg:flex-row lg:px-20">
				<div className="flex items-center justify-center gap-5">
					{handles.map(({ icon, url }, index) => (
						<a
							key={index}
							href={url}
							target="_blank"
							className="rounded-full text-base transition-all duration-500 hover:scale-[1.2] lg:text-2xl">
							<span className="text-white">{icon}</span>
						</a>
					))}
				</div>
				<p className="font-secondary text-xs font-medium text-white">
					<span className="font-light">Copyright &copy;{new Date().getFullYear()}.</span>
					<span className="ml-1 uppercase">samson okunola</span>
				</p>
			</div>
		</main>
	)
}

export default Home
