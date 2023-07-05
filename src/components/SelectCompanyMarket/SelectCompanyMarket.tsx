import { useCategoryMarket } from "api/category/getCategoryMarkets"
import Select, { SelectOptionsProps, SelectProps } from "components/Select"
import { forwardRef } from "react"

type CompanyMarketSelectProps = {
	onChangeValue?: (option: SelectOptionsProps) => void
} & SelectProps

export const CompanyMarketSelect = forwardRef<HTMLSelectElement, CompanyMarketSelectProps>((props, ref) => {
	const { data, isFetching, isError } = useCategoryMarket()

	const dataInSelectFormat = data?.map((companyMarket) => ({
		value: companyMarket?.cn ?? "",
		displayValue: companyMarket?.displayName ?? "",
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

CompanyMarketSelect.displayName = "CompanyBctSelect"
