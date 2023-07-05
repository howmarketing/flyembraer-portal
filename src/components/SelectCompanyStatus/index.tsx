import Select, { SelectProps } from "components/Select"
import { forwardRef } from "react"

export const SelectCompanyStatus = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const mock = [
		{
			value: "ativo",
			displayValue: "Active",
		},
		{
			value: "pending",
			displayValue: "Pending",
		},
		{
			value: "rejected",
			displayValue: "Rejected",
		},
		{
			value: "processing",
			displayValue: "Processing",
		},
		{
			value: "blocked",
			displayValue: "Blocked",
		},
	]

	return <Select {...props} options={mock} ref={ref} />
})

SelectCompanyStatus.displayName = "SelectCompanyStatus"
