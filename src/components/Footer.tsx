import { SOCIAL_HANDLES } from "constants"

const Footer = () => {
	return (
		<footer className="w-full bg-black px-5 py-10 text-white lg:px-20">
			<div className="flex items-center justify-center gap-4">
				{SOCIAL_HANDLES.map(({ icon, url }, index) => (
					<a key={index} href={url} target="_blank">
						<span>{icon}</span>
					</a>
				))}
			</div>
			<div className="flex w-full flex-col items-center justify-center">
				<p>samson okunola</p>
				<p>{new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}

export default Footer
