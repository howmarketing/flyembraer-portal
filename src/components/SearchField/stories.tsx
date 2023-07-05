import { ComponentMeta, ComponentStory } from "@storybook/react"

import SearchField from "."

export default {
	title: "Components/SearchField",
	component: SearchField,
} as ComponentMeta<typeof SearchField>

const Template: ComponentStory<typeof SearchField> = () => <SearchField></SearchField>

export const Default = Template.bind({})
