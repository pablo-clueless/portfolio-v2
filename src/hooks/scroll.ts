import { useEffect } from "react"

export const useScrollToTop = () => {
	useEffect(() => {
		window.scrollTo({ behavior: "smooth", top: 0, left: 0 })
	}, [])
}
