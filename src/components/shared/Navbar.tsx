import { Globe } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { BrandLineLight } from "assets/images"

const Navbar = () => {
	const [time, setTime] = useState("")
	const date = new Date().toLocaleDateString([], {
		weekday: "short",
		day: "numeric",
		month: "short",
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" }))
		}, 1000)
		return () => clearInterval(interval)
	})

	return (
		<header className="flex w-screen flex-col bg-light">
			<nav className="flex w-screen flex-col items-start gap-2 border-b border-gray-400 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-40 lg:py-10">
				<Link to="/" className="flex items-center gap-2">
					<img src={BrandLineLight} alt="" className="w-5 lg:w-10" />
					<p className="text-xl font-semibold uppercase text-dark lg:text-4xl">Samson okunola</p>
				</Link>
				<p className="flex items-center gap-1 text-xs font-medium lg:text-sm">
					<Globe />
					{time}
					<span className="mx-1 aspect-square w-1 rounded-full bg-dark" />
					{date}
				</p>
			</nav>
		</header>
	)
}

export default Navbar
