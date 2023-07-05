import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Card } from "./index"

describe("Card component", () => {
	test("renders card with title and children", () => {
		const { getByText } = render(
			<Card title="Card Title">
				<div>Card Content</div>
			</Card>
		)

		expect(getByText("Card Title")).toBeInTheDocument()
		expect(getByText("Card Content")).toBeInTheDocument()
	})

	test("renders card with left and right icons", () => {
		const { getByTestId } = render(
			<Card
				title="Card Title"
				iconLeft={<span data-testid="left-icon" />}
				iconRight={<span data-testid="right-icon" />}
			/>
		)

		expect(getByTestId("left-icon")).toBeInTheDocument()
		expect(getByTestId("right-icon")).toBeInTheDocument()
	})

	test("clicking on collapsible card toggles open state", () => {
		const { getByText } = render(
			<Card title="Collapsible Card" collapsible={true}>
				<div>Card Content</div>
			</Card>
		)

		fireEvent.click(getByText("Collapsible Card"))
		expect(getByText("Card Content")).toBeInTheDocument()

		fireEvent.click(getByText("Collapsible Card"))
		expect(getByText("Card Content")).not.toBeInTheDocument()
	})

	test("renders card as a link when link prop is provided", () => {
		const { container } = render(
			<Card title="Linked Card" link="https://example.com">
				<div>Card Content</div>
			</Card>
		)

		const linkElement = container.querySelector("a")
		expect(linkElement).toBeInTheDocument()
		expect(linkElement?.getAttribute("href")).toBe("https://example.com")
	})
})
