import { render, screen } from "@testing-library/react"

import Text from "."

describe("<Text />", () => {
	it("should render the Text and match the previous version", () => {
		const { container } = render(<Text>Label</Text>)

		expect(screen.getByText(/Label/i)).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it("should render the text as another element", () => {
		render(<Text as="h1">Label</Text>)

		expect(screen.getByRole("heading", { name: /Label/i })).toBeInTheDocument()
	})
})
