import { ComponentMeta, ComponentStory } from "@storybook/react"

import Avatar from "."

export default {
	title: "Components/Avatar",
	component: Avatar,
	argTypes: {
		imageUrl: {
			description: "The url path to the image file",
		},
	},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = () => <Avatar />

export const Default = Template.bind({})
