import { useCategoryAircrafts } from "api/category/getCategoryAircrafts"
import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

type CompanyAircraftSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const CompanyAircraftSelect = forwardRef<HTMLSelectElement, CompanyAircraftSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useCategoryAircrafts()

	const dataInSelectFormat = data?.map((companyAircraft) => ({
		value: companyAircraft?.cn ?? "",
		displayValue: companyAircraft?.displayName ?? "",
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
			onChange={(e) => {
				props.onChange?.(e)

				const option = dataInSelectFormat?.find((option) => option.value === e.target.value)

				if (option) {
					handleChange(option)
				}
			}}
			disabled={isFetching || isError}
			ref={ref}
		/>
	)
})

CompanyAircraftSelect.displayName = "CompanyAircraftSelect"
