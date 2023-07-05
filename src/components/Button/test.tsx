import { screen, render } from "@testing-library/react"

import Button from "."

describe("<Button />", () => {
	it("should render the Button and match the previous version", () => {
		const { container } = render(<Button>Label</Button>)

		expect(screen.getByRole("Button", { name: /Label/i })).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it("should render the secondary variant", () => {
		const { container } = render(<Button variant="secondary">Label</Button>)

		expect(container.firstChild).toHaveAttribute("class", expect.stringContaining("variant-secondary"))
	})

	it("should render the tertiary variant", () => {
		const { container } = render(<Button variant="tertiary">Label</Button>)

		expect(container.firstChild).toHaveAttribute("class", expect.stringContaining("variant-tertiary"))
	})

	it("should render the big variant", () => {
		const { container } = render(<Button variant="big">Label</Button>)

		expect(container.firstChild).toHaveAttribute("class", expect.stringContaining("variant-big"))
	})

	it("should render the Button as another element", () => {
		render(
			<Button asChild>
				<a href="#">Label</a>
			</Button>
		)

		expect(screen.getByRole("link", { name: /Label/i })).toBeInTheDocument()
	})
})
