import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import CheckBox from "."

describe("<CheckBox />", () => {
	it("should render the CheckBox and match the previous version", () => {
		const { container } = render(<CheckBox id="label">Label</CheckBox>)

		expect(screen.queryByLabelText("Label")).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it("should be checked by default", () => {
		render(
			<CheckBox id="label" defaultChecked>
				Label
			</CheckBox>
		)

		expect(screen.queryByLabelText("Label")).toBeChecked()
	})

	it("should change the checked state of the CheckBox", async () => {
		render(<CheckBox id="label">Label</CheckBox>)

		expect(screen.getByRole("checkbox")).not.toBeChecked()

		userEvent.click(screen.getByRole("checkbox"))

		await waitFor(() => {
			expect(screen.getByRole("checkbox")).toBeChecked()
		})
	})

	it("should show the field is required", () => {
		render(
			<CheckBox id="label" required>
				Label
			</CheckBox>
		)

		expect(screen.queryByLabelText("Label *")).toBeInTheDocument()
	})

	it("should be accessible by tab", () => {
		render(<CheckBox id="label">Label</CheckBox>)

		const input = screen.getByLabelText("Label")
		expect(document.body).toHaveFocus()

		userEvent.tab()
		expect(input).toHaveFocus()
	})
})
