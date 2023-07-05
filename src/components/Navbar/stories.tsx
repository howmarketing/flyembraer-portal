import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Navbar } from "."

export default {
	title: "Components/Navbar",
	component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar></Navbar>

export const Default = Template.bind({})
