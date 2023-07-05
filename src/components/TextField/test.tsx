import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import TextField from "."

describe("<TextField />", () => {
	it("should render the TextField and match the previous version", () => {
		const { container } = render(<TextField id="label">Label</TextField>)

		expect(screen.queryByLabelText("Label")).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it("should show the field is required", () => {
		render(
			<TextField id="label" required>
				Label
			</TextField>
		)

		expect(screen.queryByLabelText("Label *")).toBeInTheDocument()
	})

	it("should render with an error", () => {
		render(
			<TextField id="label" error="Error">
				Label
			</TextField>
		)

		expect(screen.queryByText("Error")).toBeInTheDocument()
	})

	it("should be accessible by tab", () => {
		render(<TextField id="label">Label</TextField>)

		const input = screen.getByLabelText("Label")
		expect(document.body).toHaveFocus()

		userEvent.tab()
		expect(input).toHaveFocus()
	})
})
