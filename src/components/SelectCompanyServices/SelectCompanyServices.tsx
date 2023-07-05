import { useGetServices } from "api/job-function/getServices"
import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

type ServicesSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const ServicesSelect = forwardRef<HTMLSelectElement, ServicesSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useGetServices()

	const dataInSelectFormat = data?.map((services) => ({
		value: services?.dn ?? "",
		displayValue: services?.displayName ?? "",
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

ServicesSelect.displayName = "ServicesSelect"
