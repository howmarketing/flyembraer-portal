import { render } from "@testing-library/react"

import Footer from "."

describe("<Footer />", () => {
	it("should render the footer and match the previous version", () => {
		const { container } = render(<Footer />)

		expect(container.firstChild).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
