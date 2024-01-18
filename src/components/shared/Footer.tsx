const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-between px-5 py-5 font-semibold text-dark-400 lg:px-40">
			<p className="text-xs lg:text-sm">Samson Okunola.</p>
			<p className="text-xs lg:text-sm">&copy;{new Date().getFullYear()}. All rights reserved.</p>
		</footer>
	)
}

export default Footer
