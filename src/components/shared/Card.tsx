import { ArrowRight } from "@phosphor-icons/react"
import { Fragment } from "react"

import type { ProjectProps } from "types"

interface Props {
	data: ProjectProps
	index: number
}

const Card = (props: Props) => {
	const { data, index } = props

	return (
		<div className="group relative flex w-full gap-4 rounded-2xl border bg-light p-8 lg:w-[700px]">
			<p className="stroked text-7xl font-bold lg:-left-8 lg:text-9xl">{index}</p>
			<div className="flex flex-1 flex-col">
				<img
					src={data.image[0]}
					alt={data.title}
					className="mb-4 aspect-[3/2] w-2/3 rounded-2xl object-cover"
				/>
				<p className="inline-block bg-gradient-to-r from-secondary to-primary bg-clip-text text-xl font-semibold text-dark-300 transition-colors duration-1000 group-hover:text-transparent lg:text-4xl">
					{data.title}
				</p>
				<p className="my-4 text-[10px] font-bold uppercase text-dark-300 lg:text-xs">
					{data.stacks.map((stack, index) => (
						<Fragment key={index}>
							<span key={index}>{stack}</span>
							{index !== data.stacks.length - 1 && <span>, </span>}
						</Fragment>
					))}
				</p>
				<a
					href={data.url}
					target="_blank"
					rel="noreferrer"
					className="link flex w-fit items-center gap-2 text-xs font-semibold uppercase transition-all duration-300 hover:gap-4 lg:text-sm">
					visit the website <ArrowRight className="" />
				</a>
			</div>
		</div>
	)
}

export default Card
