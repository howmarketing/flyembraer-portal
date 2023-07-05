import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

import { useCategoryBct } from "api/category/getCategoryBcts"

type CompanyBctSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const CompanyBctSelect = forwardRef<HTMLSelectElement, CompanyBctSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useCategoryBct()

	const dataInSelectFormat = data?.map((companyBct) => ({
		value: companyBct?.cn ?? "",
		displayValue: companyBct?.displayName ?? "",
	}))

	const handleChange = (option: SelectOptionsProps) => {
		if (props.onChangeValue) {
			props.onChangeValue(option)
		}
	}

	return (
		<Select
			{...props}
			options={dataInSelectFormat}
			disabled={isFetching || isError}
			ref={ref}
			onChange={(e) => {
				props.onChange?.(e)

				const option = dataInSelectFormat?.find((option) => option.value === e.target.value)

				if (option) {
					handleChange(option)
				}
			}}
		/>
	)
})

CompanyBctSelect.displayName = "CompanyBctSelect"
