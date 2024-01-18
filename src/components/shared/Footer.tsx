const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center bg-dark-400 px-5 py-10 lg:px-40">
			<div className="flex w-full flex-col items-center justify-center">
				<p className="text-3xl font-bold uppercase text-light lg:text-6xl">Samson Okunola</p>
			</div>
			<hr className="my-4 w-full" />
			<div className="flex w-full items-center justify-center text-xs lg:text-sm">
				<p className="text-light">&copy;{new Date().getFullYear()}. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
