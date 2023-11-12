import {} from "react"

import { ExperiencesProps } from "types"

interface Props {
	data: ExperiencesProps
	index: number | string
}

const WorkCard = (props: Props) => {
	const { data, index } = props

	return (
		<div className="h-auto w-full p-1">
			<p className="text-8xl font-thin">{index}</p>
			<p className="text-base font-light lg:text-lg">{data.company}</p>
			<p className="text-xs font-semibold lg:text-sm">{data.role}</p>
		</div>
	)
}

export default WorkCard
