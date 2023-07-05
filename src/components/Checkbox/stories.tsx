import { ComponentMeta, ComponentStory } from "@storybook/react"

import CheckBox from "."

export default {
	title: "Components/CheckBox",
	component: CheckBox,
	args: {
		id: "checkbox",
	},
	argTypes: {
		defaultChecked: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args}>Check Me</CheckBox>

export const Default = Template.bind({})

export const DefaultChecked = Template.bind({})
DefaultChecked.args = {
	defaultChecked: true,
}
