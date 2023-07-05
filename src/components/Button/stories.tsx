import { ComponentMeta, ComponentStory } from "@storybook/react"

import Button from "."

export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "LABEL",
	},
	argTypes: {
		variant: {
			control: "inline-radio",
		},
		asChild: {
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
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})
Primary.args = {
	variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
	variant: "secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
	variant: "tertiary",
}

export const Big = Template.bind({})
Big.args = {
	variant: "big",
}
