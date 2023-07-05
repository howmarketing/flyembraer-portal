import { ComponentMeta, ComponentStory } from "@storybook/react"

import Stepper from "."

export default {
	title: "Components/Stepper",
	component: Stepper,
	args: {
		stepsNumber: 3,
		stepActive: 1,
	},
	argTypes: {
		stepsNumber: {
			control: { type: "number" },
		},
		stepActive: {
			control: { type: "number" },
		},
	},
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />

export const Default = Template.bind({})
