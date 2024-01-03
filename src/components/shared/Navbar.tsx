import { Globe } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { logo } from "assets/images"

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
			<nav className="flex w-screen flex-col items-start gap-2 border-b border-gray-400 px-5 py-10 lg:flex-row lg:items-baseline lg:justify-between lg:px-40 lg:py-14">
				<Link to="/" className="flex items-center gap-2">
					<img src={logo} alt="" className="w-10 lg:w-20" />
					<p className="text-3xl font-light uppercase text-dark lg:text-7xl">Samson okunola</p>
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
