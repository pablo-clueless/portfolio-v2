import { Globe } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import { links } from "constants"

const Navbar = () => {
	const [time, setTime] = useState("")

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(interval)
	})

	return (
		<header className="flex w-screen flex-col bg-light">
			<nav className="flex w-screen flex-col items-start border-b border-gray-400 px-5 py-10 lg:flex-row lg:items-baseline lg:justify-between lg:px-40 lg:py-14">
				<Link to="/" className="flex items-center gap-2">
					<p className="text-3xl font-light uppercase text-dark lg:text-7xl">Samson okunola</p>
				</Link>
				<p className="flex items-center gap-1 text-xs font-medium lg:text-sm">
					<Globe />
					{time}
				</p>
			</nav>
			{/* <div className="flex items-center gap-3 px-5 py-4 lg:px-40">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`trs text-xs capitalize lg:text-sm ${isActive ? "text-primary" : "text-gray-500"}`
						}>
						{link.label}
					</NavLink>
				))}
			</div> */}
		</header>
	)
}

export default Navbar
