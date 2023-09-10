import { render, screen } from "@testing-library/react"
import { expect } from "chai"
import { it } from "mocha"

const Button = () => {
	return <button>Save</button>
}

it("Button test", async () => {
	render(<Button />)

	const button = await screen.getByText("Save")
	expect(button).to.be.not.null

	const buttonDom = await screen.getByRole("button")
	expect(buttonDom).to.be.not.null
})
