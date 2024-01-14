import { InputProps } from "types"

const Input = (props: InputProps) => {
	if (props.as === "textarea") {
		return (
			<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
				{props.label && (
					<label htmlFor={props.id} className="text-sm font-light">
						{props.label}
					</label>
				)}
				<textarea
					className="min-h-[150px] w-full resize-none border border-dark-100 bg-transparent px-1 text-sm transition-all duration-300 focus:border-dark-400"
					{...props}></textarea>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	if (props.as === "select") {
		return (
			<div className={`flex flex-col ${props.width ? props.width : "w-full min-w-[150px]"}`}>
				{props.label && (
					<label htmlFor={props.id} className="text-sm font-light">
						{props.label}
					</label>
				)}
				<select
					className="flex h-[40px] w-full cursor-pointer items-center gap-2 border border-dark-100 px-1 py-1 text-sm capitalize transition-all duration-300 focus-within:border-dark-400"
					{...props}>
					{props.children}
				</select>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	return (
		<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
			{props.label && (
				<label htmlFor={props.id} className="text-sm font-light">
					{props.label}
				</label>
			)}
			<div className="flex w-full items-center gap-2 border border-dark-100 px-1 text-sm transition-all duration-300 focus-within:border-dark-400">
				{props.icon && <span>{props.icon}</span>}
				<input type={props.typed} className="w-full border-none bg-transparent px-1 py-2" {...props} />
			</div>
			{props.error && <p className="text-xs text-red-600">{props.error}</p>}
		</div>
	)
}

export default Input
