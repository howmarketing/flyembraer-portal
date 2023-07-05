import { forwardRef } from "react"

import { useGetCepCountry } from "api/cep/getCepCountries"

import Select, { SelectProps } from "components/Select"

export const SelectCountryDdi = forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
	const { data, isFetching, isError } = useGetCepCountry({ staleTime: 1000 * 60 })

	const dataInSelectFormat = data?.map((country) => ({
		value: country.prefix ?? "",
		displayValue: country.ddi ?? "",
	}))

	return <Select {...props} options={dataInSelectFormat} disabled={isFetching || isError} ref={ref} />
})

SelectCountryDdi.displayName = "SelectCountryDdi"
