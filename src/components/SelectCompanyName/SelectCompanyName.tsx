/* import { forwardRef } from "react"

import { useGetCepCountry } from "api/cep/getCepCountries"

import Select, { SelectProps } from "components/Select"

export const CountriesSelect = forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
  const { data, isFetching, isError } = useGetCepCountry({ staleTime: 1000 * 60 })

  const dataInSelectFormat = data?.map((country) => ({ value: country.name, displayValue: country.name }))

  return <Select {...props} options={dataInSelectFormat} disabled={isFetching || isError} ref={ref} />
})

CountriesSelect.displayName = "CountriesSelect" */

import { useGetCompanyName } from "api/company/getCompanyName"
import Select, { SelectProps } from "components/Select"
import { forwardRef } from "react"

export const CompanySelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { data, isFetching, isError } = useGetCompanyName("teste")

	const dataInSelectFormat = data?.companies?.map((company) => ({
		value: company?.displayName ?? "",
		displayValue: company?.displayName ?? "",
	}))

	return <Select {...props} options={dataInSelectFormat} disabled={isFetching || isError} ref={ref} />
})

CompanySelect.displayName = "CompanySelect"
