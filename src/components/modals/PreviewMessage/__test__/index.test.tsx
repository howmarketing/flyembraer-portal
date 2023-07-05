import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ModalPreviewMessage from "../index"

describe("Alert component", () => {
	test("renders message preview when showPreviewMessage is true", () => {
		const setShowPreviewMessage = jest.fn()
		const { getByText } = render(
			<ModalPreviewMessage
				showPreviewMessage={true}
				setShowPreviewMessage={setShowPreviewMessage}
				closeWithX={true}
				title="Alert Title"
				message="This is the alert message."
				id="123"
			/>
		)

		expect(getByText("Alert Title")).toBeInTheDocument()
		expect(getByText("This is the alert message.")).toBeInTheDocument()
		expect(getByText("123")).toBeInTheDocument()
	})

	test("does not render message preview when showPreviewMessage is false", () => {
		const setShowPreviewMessage = jest.fn()
		const { queryByText } = render(
			<ModalPreviewMessage
				showPreviewMessage={false}
				setShowPreviewMessage={setShowPreviewMessage}
				closeWithX={true}
				title="Alert Title"
				message="This is the alert message."
				id="123"
			/>
		)

		expect(queryByText("Alert Title")).toBeNull()
		expect(queryByText("This is the alert message.")).toBeNull()
		expect(queryByText("123")).toBeNull()
	})

	test("calls setShowPreviewMessage when X button is clicked", () => {
		const setShowPreviewMessage = jest.fn()
		const { getByTestId } = render(
			<ModalPreviewMessage
				showPreviewMessage={true}
				setShowPreviewMessage={setShowPreviewMessage}
				closeWithX={true}
				title="Alert Title"
				message="This is the alert message."
				id="123"
			/>
		)

		fireEvent.click(getByTestId("close-button"))
		expect(setShowPreviewMessage).toHaveBeenCalledWith(false)
	})
})
