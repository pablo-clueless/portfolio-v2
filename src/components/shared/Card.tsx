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
			<div className="group aspect-square w-full overflow-hidden rounded-bl-[45px] bg-black transition-all">
				<div style={{ background: data.color }} className="h-2/3 w-full p-3">
					<img
						src={data.image}
						alt={data.title}
						className="h-full w-full border-2 object-cover object-top"
					/>
				</div>
				<div className="w-full p-3">
					<div className="flex items-center gap-2 text-light">
						<p className="text-base font-light lg:text-lg">{data.title}</p>
						<ArrowRight className="duration-500 group-hover:ml-3" />
					</div>
					<div className="mb-4 flex w-full items-center justify-between text-xs font-light uppercase text-gray-400 lg:text-xs">
						<p>{data.category}</p>
						<p>{index}</p>
					</div>
				</div>
			</div>
		</a>
	)
}

export default Card
