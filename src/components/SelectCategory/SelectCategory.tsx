import { forwardRef } from "react"
import Select, { SelectProps } from "components/Select"
import { useGetAllCategory } from "api/category/getAllCategory"

export const CategorySelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { data, isFetching, isError } = useGetAllCategory()

	const dataInSelectFormat = data?.map((category) => ({
		value: category?.displayName ?? "",
		displayValue: category?.displayName ?? "",
	}))

	return <Select {...props} options={dataInSelectFormat} disabled={isFetching || isError} ref={ref} />
})

CategorySelect.displayName = "CategorySelect"
