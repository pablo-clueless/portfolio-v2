import { ExperiencesProps } from "types"

const WorkCard = (props: ExperiencesProps) => {
	return (
		<div className="h-auto w-full p-2">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-1">
					<p className="text-sm font-medium lg:text-lg">{props.company}</p>
				</div>
				<p className={`text-xs ${props.active ? "text-green-500" : "text-red-500"}`}>{props.date}</p>
			</div>
			<p className="my-2 text-xs font-light lg:text-sm">{props.role}</p>
			<p className="text-sm lg:text-base">{props.highlights}</p>
		</div>
	)
}

export default WorkCard
