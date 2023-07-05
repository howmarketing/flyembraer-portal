import { useGetApplication } from "api/job-function/getApplications"
import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

type CompanyAppSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const CompanyAppSelect = forwardRef<HTMLSelectElement, CompanyAppSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useGetApplication()

	const dataInSelectFormat = data?.map((companyApp) => ({
		value: companyApp?.access_dn ?? "",
		displayValue: companyApp?.displayName ?? "",
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

CompanyAppSelect.displayName = "CompanyAppSelect"
