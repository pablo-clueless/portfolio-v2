import { BrandLineDark } from "assets/images"
import { handles } from "constants"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center gap-5 bg-dark-400 px-5 pb-4 pt-16 lg:px-40">
			<img src={BrandLineDark} alt="" className="w-[150px]" />
			<div className="mt-10 flex w-2/3 items-center justify-between gap-4 lg:w-1/3">
				{handles.map((handle) => (
					<a
						key={handle.url}
						href={handle.url}
						className="text-xl text-light transition-all duration-300 hover:scale-[1.2] hover:text-secondary lg:text-3xl">
						{handle.icon}
					</a>
				))}
			</div>
			<hr className="mt-10 w-full bg-light" />
			<div className="flex w-full items-center justify-between text-xs lg:text-sm">
				<p className="text-light">&copy;{new Date().getFullYear()}. All rights reserved.</p>
				<p className="uppercase text-light">samson okunola</p>
			</div>
		</footer>
	)
}

export default Footer
