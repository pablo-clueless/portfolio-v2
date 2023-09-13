import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import { links } from "constants"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 500)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`trs left-0 top-0 !z-20 flex w-screen items-center justify-center bg-black/80 px-5 py-10 lg:px-20 ${
				scrolled ? "fixed" : "static"
			}`}>
			<div className="flex items-center justify-center gap-4">
				{links.map((link) => (
					<NavLink
						key={link.label}
						to={link.to}
						className={({ isActive }) =>
							`link text-sm font-extralight capitalize text-white lg:text-base ${
								isActive ? "link__active" : ""
							}`
						}>
						{link.label}
					</NavLink>
				))}
			</div>
		</nav>
	)
}

export default Navbar
