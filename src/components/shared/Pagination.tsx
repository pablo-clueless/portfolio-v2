import { CaretLeft, CaretRight } from "@phosphor-icons/react"

import { PaginationProps } from "interfaces"

const Pagination = (props: PaginationProps) => {
	const totalPages = Math.ceil(props.total / props.pageSize)

	const onPrevious = () => {
		if (props.current > 1) {
			props.onPageChange(props.current - 1)
		}
	}

	const onNext = () => {
		if (props.current < totalPages) {
			props.onPageChange(props.current + 1)
		}
	}

	const renderPageNumbers = () => {
		const pageNumbers = []
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					onClick={() => props.onPageChange(i)}
					className={`flex h-[33px] w-[29px] cursor-pointer items-center justify-center rounded font-light ${
						props.current === i ? "bg-dark text-light" : "text-dark"
					}`}>
					{i}
				</li>
			)
		}
		return pageNumbers
	}

	return (
		<div className="my-4 flex w-full items-center justify-center gap-4">
			<button
				onClick={onPrevious}
				disabled={props.current === 1}
				className="rounded border border-dark bg-dark p-2 text-light disabled:bg-transparent disabled:text-dark">
				<CaretLeft />
			</button>
			<ul className="flex items-center gap-2">{renderPageNumbers()}</ul>
			<button
				onClick={onNext}
				disabled={props.current === totalPages}
				className="rounded border border-dark bg-dark p-2 text-light disabled:bg-transparent disabled:text-dark">
				<CaretRight />
			</button>
		</div>
	)
}

export default Pagination
