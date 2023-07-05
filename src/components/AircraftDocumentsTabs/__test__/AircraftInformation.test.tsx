import { render } from "@testing-library/react"
import { ArrowUp } from "components/Icons/ArrowUp"
import { ExternalLink } from "components/Icons/ExternalLink"
import { TabsList } from "components/Tabs"
import { AircraftInformation } from "../AircraftInformation"

describe("AircraftInformation component", () => {
	const mockNoDocs = [
		{
			menu: "Commercial Aviation",
			portais: [
				{
					links: [
						{
							code: "https://example.com/link1",
							name: "Link 1",
						},
						{
							code: "https://example.com/link2",
							name: "Link 2",
						},
					],
				},
			],
		},
		{
			menu: "Executive Aviation",
			portais: [
				{
					links: [
						{
							code: "https://example.com/link3",
							name: "Link 3",
						},
						{
							code: "https://example.com/link4",
							name: "Link 4",
						},
					],
				},
			],
		},
	]

	test("renders tabs and links correctly", () => {
		const { getByText, getByRole } = render(<AircraftInformation noDocs={mockNoDocs} />)

		// Check tab labels
		expect(getByText("Commercial Aviation")).toBeInTheDocument()
		expect(getByText("Executive Aviation")).toBeInTheDocument()

		// Check arrow icons
		expect(getByRole("img", { name: "arrow-up" })).toBeInTheDocument()

		// Check links
		expect(getByText("Link 1")).toBeInTheDocument()
		expect(getByText("Link 2")).toBeInTheDocument()
		expect(getByText("Link 3")).toBeInTheDocument()
		expect(getByText("Link 4")).toBeInTheDocument()
	})

	test("renders correctly when noDocs prop is not provided", () => {
		const { queryByText } = render(<AircraftInformation />)

		// Check that no tab or link is rendered
		expect(queryByText("Commercial Aviation")).toBeNull()
		expect(queryByText("Link 1")).toBeNull()
	})
})
