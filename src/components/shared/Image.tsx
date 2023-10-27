import { useState } from "react"

import "./image.css"

interface Props {
	src: string
	alt?: string
}

const Image = (props: Props) => {
	const [hovered, setHovered] = useState(false)
	return (
		<div className="glitch h-full w-full">
			<img src={props.src} alt={props.alt} className="trs h-full w-full object-cover" />
			<div
				className="glitch__layers"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				<div
					style={{ backgroundImage: `url("${props.src}")` }}
					className={`${hovered ? "glitch__layer" : ""}`}></div>
				<div
					style={{ backgroundImage: `url("${props.src}")` }}
					className={`${hovered ? "glitch__layer" : ""}`}></div>
				<div
					style={{ backgroundImage: `url("${props.src}")` }}
					className={`${hovered ? "glitch__layer" : ""}`}></div>
			</div>
		</div>
	)
}

export default Image
