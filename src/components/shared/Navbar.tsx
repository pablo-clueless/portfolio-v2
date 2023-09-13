import { NavLink } from "react-router-dom"

import { links } from "constants"

const Navbar = () => {
	return (
		<nav className="trs !z-20 flex w-screen items-center justify-center bg-dark px-5 py-10 lg:px-20">
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
