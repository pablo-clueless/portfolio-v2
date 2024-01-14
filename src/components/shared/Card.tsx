import { ArrowSquareOut } from "@phosphor-icons/react"
import { Fragment } from "react"

import type { ProjectProps } from "types"

const Card = (props: ProjectProps) => {
	return (
		<div className="group relative w-full">
			<div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border">
				<span className="absolute left-4 top-4 !z-[1] rounded-2xl bg-dark-400/60 px-3 text-xs uppercase text-light shadow-xl lg:text-sm">
					{props.category}
				</span>
				<img
					src={props.image[0]}
					alt={props.title}
					className="trs h-full w-full object-cover hover:rotate-1 hover:scale-[1.05]"
				/>
			</div>
			<div className="mt-1 flex w-full flex-col px-2">
				<div className="flex w-full items-center justify-between">
					<p className="text-base font-medium lg:text-xl">{props.title}</p>
					<a href={props.url} target="_blank" className="text-xl">
						<ArrowSquareOut className="transition-all duration-500 ease-in-out group-hover:scale-125" />
					</a>
				</div>
				<p className="text-[10px] capitalize text-dark-300 lg:text-xs">
					{props.stacks.map((stack, index) => (
						<Fragment key={index}>
							<span key={index}>{stack}</span>
							{index !== props.stacks.length - 1 && <span>, </span>}
						</Fragment>
					))}
				</p>
			</div>
		</div>
	)
}

export default Card
