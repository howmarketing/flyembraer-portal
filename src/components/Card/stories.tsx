import { ComponentMeta, ComponentStory } from "@storybook/react"

import { AngleRight } from "components/Icons/AngleRight"
import { Settings } from "components/Icons/Settings"

import { Card } from "."

export default {
	title: "Components/Card",
	component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
	title: "Card title",
}

export const IconLeft = Template.bind({})
IconLeft.args = {
	title: "Icon Left",
	iconLeft: <Settings width="30" height="30" />,
}

export const IconRight = Template.bind({})
IconRight.args = {
	title: "Icon Right",
	iconRight: <AngleRight width="9" height="15" />,
}

export const IconLeftRight = Template.bind({})
IconLeftRight.args = {
	title: "Icon Left Right",
	iconLeft: <Settings width="30" height="30" />,
	iconRight: <AngleRight width="9" height="15" />,
}

export const WithChildren = Template.bind({})
WithChildren.args = {
	title: "With Children",
	iconLeft: <Settings width="30" height="30" />,
	iconRight: <AngleRight width="9" height="15" />,
	children: (
		<ul style={{ padding: "16px", listStyle: "unset", listStylePosition: "inside" }}>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Benefit Analysis Calculator
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				ETechPubs
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance Program
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance Cost
			</li>
		</ul>
	),
}

export const Collapsible = Template.bind({})
Collapsible.args = {
	title: "Collapsible",
	iconLeft: <Settings width="30" height="30" />,
	collapsible: true,
	children: (
		<ul style={{ padding: "16px", listStyle: "unset", listStylePosition: "inside" }}>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Benefit Analysis Calculator
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				ETechPubs
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance Program
			</li>
			<li
				style={{
					color: "#121212",
					textDecoration: "underline",
					listStyle: "unset",
					fontSize: "18px",
					lineHeight: "48px",
					fontWeight: "300",
				}}
			>
				Maintenance Cost
			</li>
		</ul>
	),
}
