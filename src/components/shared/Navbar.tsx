import { Globe } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [time, setTime] = useState("")

	const handleScroll = () => setScrolled(window.scrollY > 400)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" }))
		}, 1000)
		return () => clearInterval(interval)
	})

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-10 flex w-screen flex-col items-start gap-2 border-gray-400 px-5 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-40 lg:py-5 ${
				scrolled ? "fixed border-b bg-light" : "static border-b-0 bg-transparent"
			}`}>
			<div className="flex flex-col">
				<p className="text-xl font-semibold uppercase text-dark lg:text-2xl">Samson okunola</p>
				<p className="text-sm font-semibold uppercase text-dark lg:text-base">frontend developer</p>
			</div>
			<p
				className={`flex items-center gap-1 text-xs font-medium capitalize lg:text-sm ${
					new Date().getHours() < 8 || new Date().getHours() > 18 ? "text-red-500" : "text-green-500"
				}`}>
				<Globe />
				{time}
				<span>&bull;</span>
				<span>{new Date().getHours() < 8 || new Date().getHours() > 18 ? "closed" : "open"}</span>
			</p>
		</nav>
	)
}

export default Navbar
