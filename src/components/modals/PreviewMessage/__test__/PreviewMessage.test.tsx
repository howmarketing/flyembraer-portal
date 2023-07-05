import { render, fireEvent } from "@testing-library/react"
import { renderHook, act } from "@testing-library/react-hooks"

import PreviewMessageHelper, { usePreviewMessage } from "../index"

describe("PreviewMessageHelper component", () => {
	test("renders modal with title and message", () => {
		const { getByText } = render(
			<PreviewMessageHelper
				showPreviewMessage={true}
				setShowPreviewMessage={() => {
					return
				}}
				message="Test message"
				title="Test title"
			/>
		)

		expect(getByText("Test title")).toBeInTheDocument()
		expect(getByText("Test message")).toBeInTheDocument()
	})

	test("clicking close button hides the modal", () => {
		let showPreviewMessage = true
		const setShowPreviewMessage = (status: boolean) => {
			showPreviewMessage = status
		}

		const { getByTestId } = render(
			<PreviewMessageHelper
				showPreviewMessage={showPreviewMessage}
				setShowPreviewMessage={setShowPreviewMessage}
				message="Test message"
				title="Test title"
			/>
		)

		fireEvent.click(getByTestId("close-button"))
		expect(showPreviewMessage).toBe(false)
	})
})

describe("PreviewMessageHelper component", () => {
	// ...existing tests...

	describe("usePreviewMessage hook", () => {
		test("returns a function to toggle the preview message", () => {
			const { result } = renderHook(() => usePreviewMessage({ title: "Test title", message: "Test message" }))

			const { setShowPreviewMessage, PreviewMessage } = result.current // Destructure the returned object

			expect(setShowPreviewMessage).toBeInstanceOf(Function)
			expect(PreviewMessage).toBeInstanceOf(Function)

			act(() => {
				PreviewMessage() // Call the function directly
			})

			expect(setShowPreviewMessage).toBe(true)
		})
	})
})
