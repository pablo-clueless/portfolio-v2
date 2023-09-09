import { Moon, Sun } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSnapshot } from "valtio"

import { logo, logo_invert } from "assets"
import state from "store"

const Navbar = () => {
	const snap = useSnapshot(state)
	const [scrolled, setScrolled] = useState(false)

	const toggle = () => (snap.mode === "dark" ? (state.mode = "light") : (state.mode = "dark"))

	useEffect(() => {
		const handleScrolled = () => setScrolled(window.scrollY > 700)
		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	return (
		<nav
			className={`dark:bg-dark left-0 top-0 flex w-screen items-center justify-between border-b bg-white px-5 py-4 lg:px-20 ${
				scrolled ? "fixed" : "static"
			}`}>
			<div className="flex items-center justify-center gap-4">
				<Link to="/" className="border-dark border-r-2 pr-4 dark:border-white">
					<img src={snap.mode === "dark" ? logo_invert : logo} alt="" className="w-[50px]" />
				</Link>
				<p className="text-dark font-bold uppercase dark:text-white">Samson okunola</p>
			</div>
			<div className="">
				{snap.mode === "dark" ? (
					<button onClick={toggle} className="text-xl text-white active:animate-spin">
						<Sun />
					</button>
				) : (
					<button onClick={toggle} className="text-dark text-xl active:animate-spin">
						<Moon />
					</button>
				)}
			</div>
		</nav>
	)
}

export default Navbar
