import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { handles } from "constants/index"
import { slide } from "utils/motion"
import { logo_invert } from "assets"

const links = [
	{ label: "about", to: "/about" },
	{ label: "work history", to: "/work" },
	{ label: "works", to: "/works" },
	{ label: "contact", to: "/contact" },
]

const Home = () => {
	return (
		<main className="grid h-screen w-full grid-cols-1 transition-all duration-500">
			<div className="flex h-[10vh] w-full items-center justify-between border-b bg-dark px-5 lg:px-20">
				<Link to="/">
					<img src={logo_invert} alt="" className="w-[30px] lg:w-[50px]" />
				</Link>
				<div></div>
			</div>
			<div className="relative h-[75vh] w-full">
				<div className="absolute left-0 top-0 !z-10 flex h-full w-full items-center justify-center text-center">
					<div className="w-full overflow-hidden">
						<motion.div {...slide(0.25, "up", 1, "spring")} className="mb-40 flex flex-col items-center">
							<p className="text-7xl font-light uppercase text-white lg:text-9xl">Samson Okunola</p>
							<p className="w-fit text-center text-sm font-semibold uppercase text-secondary lg:text-lg">
								developer | open source
							</p>
						</motion.div>
						<div className="mx-auto flex w-4/5 items-center justify-between lg:w-2/3">
							{links.map((link) => (
								<Link key={link.label} to={link.to} className="link text-white">
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex h-[15vh] w-full items-center justify-between border-t bg-dark px-5 py-10 lg:px-20">
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
