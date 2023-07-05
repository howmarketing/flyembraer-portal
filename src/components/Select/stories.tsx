import { ComponentMeta, ComponentStory } from "@storybook/react"

import Select from "."

const OPTIONS = [
	{
		value: "val_1",
		displayValue: "Value 1",
	},
	{
		value: "val_2",
		displayValue: "Value 2",
	},
]

export default {
	title: "Components/Select",
	component: Select,
	args: {
		id: "select",
		label: "label",
		options: OPTIONS,
	},
	argTypes: {
		id: {
			table: {
				disable: true,
			},
		},
		css: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} options={OPTIONS} />

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
