import { ComponentMeta, ComponentStory } from "@storybook/react"

import Text from "."

export default {
	title: "Components/Text",
	component: Text,
	args: {
		children: "Label",
	},
	argTypes: {
		size: {
			defaultValue: "md",
			options: ["xsm", "sm", "md", "lg", "xl"],
			control: { type: "select" },
		},
		color: {
			defaultValue: "black",
			options: ["black", "gray100", "gray200"],
			control: { type: "inline-radio" },
		},
		weight: {
			defaultValue: "normal",
			options: ["normal", "bold"],
			control: { type: "inline-radio" },
		},
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>{args.children}</Text>

export const Default = Template.bind({})

export const As_Element = Template.bind({})
As_Element.args = {
	as: "p",
}
