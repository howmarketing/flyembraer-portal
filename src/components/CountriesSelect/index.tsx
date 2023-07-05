import { forwardRef } from "react"

import { useGetCepCountry } from "api/cep/getCepCountries"

import Select, { SelectProps } from "components/Select"

export const CountriesSelect = forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
	const { data, isFetching, isError } = useGetCepCountry({ staleTime: 1000 * 60 })

	const dataInSelectFormat = data?.map((country) => ({
		value: country.prefix ?? "",
		displayValue: country.name ?? "",
	}))

	return <Select {...props} options={dataInSelectFormat} disabled={isFetching || isError} ref={ref} />
})

CountriesSelect.displayName = "CountriesSelect"
