import Select, { SelectProps } from "components/Select"

import { forwardRef } from "react"

export const SelectAction = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const mock = [
		{
			value: "Remove Service",
			displayValue: "Remove Service",
		},
		{
			value: "Add Service",
			displayValue: "Add Service",
		},
	]

	return <Select {...props} options={mock} ref={ref} />
})

SelectAction.displayName = "SelectAction"
