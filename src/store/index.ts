import { proxy } from "valtio"

interface State {
	mode: "dark" | "light"
}

const state = proxy<State>({
	mode: "light",
})

export default state
