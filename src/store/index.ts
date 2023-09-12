import { proxy } from "valtio"

interface State {
	mode: "dark" | "light"
	music: boolean
}

const state = proxy<State>({
	mode: "light",
	music: true,
})

export default state
