import { ArrowRight } from "@phosphor-icons/react"

import type { ProjectProps } from "types"

interface Props {
	data: ProjectProps
	index: string
}

const Card = (props: Props) => {
	const { data, index } = props

	return (
		<a href={data.url} target="_blank">
			<div className="group relative w-full overflow-hidden border-t border-gray-400 p-1 transition-all">
				<div className="absolute -bottom-full left-0 !-z-[1] h-full w-full origin-bottom bg-gray-300 transition-all duration-500 group-hover:bottom-0"></div>
				<div className="flex items-center gap-2">
					<p className="text-base font-light lg:text-lg">{data.title}</p>
					<ArrowRight className="duration-500 group-hover:ml-3" />
				</div>
				<div className="mb-4 flex w-full items-center justify-between text-xs font-light uppercase text-gray-700 lg:text-xs">
					<p>{data.category}</p>
					<p>{index}</p>
				</div>
				<div className="grid aspect-square w-full place-items-center rounded-lg px-10 duration-300">
					<img src={data.image} alt={data.title} className="h-4/5 w-full object-cover object-left" />
				</div>
			</div>
		</a>
	)
}

export default Card
