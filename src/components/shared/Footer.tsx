import { useSnapshot } from "valtio"

import { SOCIAL_HANDLES } from "constants/index"
import { logo, logo_invert } from "assets"
import state from "store"

const Footer = () => {
	const snap = useSnapshot(state)

	return (
		<footer className="border-secondary bg-dark flex w-full flex-col items-center border-t-4 px-5 py-10 dark:bg-white lg:px-20">
			<img src={snap.mode === "dark" ? logo : logo_invert} alt="" className="w-[50px] lg:w-[65px]" />
			<div className="my-10 flex items-center justify-center gap-10">
				{SOCIAL_HANDLES.map(({ icon, url }, index) => (
					<a
						key={index}
						href={url}
						target="_blank"
						className="dark:bg-dark rounded-full bg-white p-2 text-base transition-all duration-500 hover:scale-[1.2] lg:text-xl">
						<span className="text-dark dark:text-white">{icon}</span>
					</a>
				))}
			</div>
			<div className="dark:text-dark flex w-full items-center justify-center gap-5 text-xs text-white lg:text-sm">
				<p className="font-secondary font-medium">
					<span className="font-light">Copyright &copy;{new Date().getFullYear()}.</span>
					<span className="ml-1 uppercase">samson okunola</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
