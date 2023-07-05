import { ComponentMeta, ComponentStory } from "@storybook/react"

import Footer from "."

export default {
	title: "Components/Footer",
	component: Footer,
	decorators: [
		(Story) => (
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "end",
				}}
			>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
