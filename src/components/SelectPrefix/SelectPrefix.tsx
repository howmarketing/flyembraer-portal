import Select, { SelectProps } from "components/Select"
import { forwardRef } from "react"

export const SelectPrefix = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const mock = [
		{
			value: "Mr.",
			displayValue: "Mr.",
		},
		{
			value: "Ms.",
			displayValue: "Ms.",
		},
		{
			value: "Mrs.",
			displayValue: "Mrs.",
		},
	]

	return <Select {...props} options={mock} ref={ref} />
})

SelectPrefix.displayName = "SelectPrefix"
