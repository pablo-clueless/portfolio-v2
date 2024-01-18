import me from "assets/images/me.jpeg"

const About = () => {
	return (
		<section className="w-full px-5 py-10 lg:px-40">
			<img src={me} alt="" className="aspect-square w-40 rounded-lg object-cover" />
			<div className="relative mt-5 w-full lg:w-2/3">
				<p className="bg-gradient-to-br from-primary to-secondary bg-clip-text py-2 text-3xl font-semibold text-transparent lg:text-5xl">
					Developer. Crafting awesome UI. Building things. Making awesome products.
				</p>
				<p className="my-4 text-sm lg:text-3xl">
					I am a <span className="text-primary">web developer</span> based in Nigeria focused on building
					awesome <span className="text-primary">digital products & websites</span> and
					<span className="text-primary"> creating beautiful experiences</span>.
				</p>
			</div>
		</section>
	)
}

export default About
