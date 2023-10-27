import { logo_invert } from "assets"
import { handles } from "constants"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center gap-5 bg-dark px-5 pb-4 pt-16 lg:px-40">
			<img src={logo_invert} alt="" className="w-[150px]" />
			<div className="mt-10 flex w-2/3 items-center justify-between gap-4 lg:w-1/3">
				{handles.map((handle) => (
					<a
						key={handle.url}
						href={handle.url}
						className="text-2xl text-light transition-all duration-300 hover:scale-[1.2] hover:text-secondary lg:text-3xl">
						{handle.icon}
					</a>
				))}
			</div>
			<p className="mt-10 text-sm text-light">Samson Okunola &copy;{new Date().getFullYear()}</p>
		</footer>
	)
}

export default Footer
