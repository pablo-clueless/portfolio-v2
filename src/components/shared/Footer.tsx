import { logo_invert } from "assets"
import { handles } from "constants"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center justify-between gap-5 border-t bg-dark px-5 py-10 lg:flex-row lg:px-20">
			<div className="flex items-center gap-10">
				<img src={logo_invert} alt="" className="w-[40px]" />
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
			</div>
			<p className="font-secondary text-xs font-medium text-white">
				<span className="font-light">Copyright &copy;{new Date().getFullYear()}.</span>
				<span className="ml-1 uppercase">samson okunola</span>
			</p>
		</footer>
	)
}

export default Footer
