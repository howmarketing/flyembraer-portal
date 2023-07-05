import { ComponentMeta, ComponentStory } from "@storybook/react"

import AlertButton from "."

export default {
	title: "Components/AlertButton",
	component: AlertButton,
	argTypes: {
		hasNotification: {
			description: "The alert button has notfications?",
		},
	},
} as ComponentMeta<typeof AlertButton>

const Template: ComponentStory<typeof AlertButton> = (args) => <AlertButton {...args} />

export const Default = Template.bind({})
Default.args = {
	hasNotification: false,
}

export const WithNotification = Template.bind({})
WithNotification.args = {
	hasNotification: true,
}
