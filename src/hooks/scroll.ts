import { useEffect } from "react"

export const useScrollToTop = () => {
	useEffect(() => {
		window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
	}, [])
}
