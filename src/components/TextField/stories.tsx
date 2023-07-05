import { ComponentMeta, ComponentStory } from "@storybook/react"

import TextField from "."

export default {
	title: "Components/TextField",
	component: TextField,
	args: {
		id: "label",
		children: "Text field",
	},
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args}>{args.children}</TextField>

export const Default = Template.bind({})

export const Required = Template.bind({})
Required.args = {
	required: true,
}

export const WithError = Template.bind({})
WithError.args = {
	error: "This field is required",
	required: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
}
