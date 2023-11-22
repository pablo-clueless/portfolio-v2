export interface PaginationProps {
	current: number
	onPageChange: (value: number) => void
	pageSize: number
	total: number
}
