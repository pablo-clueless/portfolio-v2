import { Fragment } from "react"

import type { ProjectProps } from "types"

const Card = (props: ProjectProps) => {
	return (
		<div className="group relative w-full lg:w-[464px]">
			<div className="aspect-[3/2] w-full overflow-hidden rounded-t-2xl border">
				<img
					src={props.image[0]}
					alt={props.title}
					className="trs h-full w-full object-cover hover:rotate-1 hover:scale-[1.05]"
				/>
			</div>
			<div className="mt-1 flex w-full flex-col px-2">
				<div className="mb-1 flex w-full items-center justify-between">
					<a href={props.url} target="_blank" className="link text-base font-medium lg:text-lg">
						{props.title}
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
