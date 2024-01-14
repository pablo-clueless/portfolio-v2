import { BrandLineDark } from "assets/images"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center gap-5 bg-dark-400 px-5 py-4 lg:px-40">
			<div className="flex w-full items-center justify-between text-xs lg:text-sm">
				<div className="flex items-center gap-1">
					<img src={BrandLineDark} alt="" className="w-6" />
					<p className="text-light">Samson Okunola</p>
				</div>
				<p className="text-light">&copy;{new Date().getFullYear()}. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
