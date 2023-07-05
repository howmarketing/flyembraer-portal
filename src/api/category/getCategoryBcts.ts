import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type BusinessCompanyType = {
	displayName?: string
	dn?: string
	cn?: string
	description?: string
}

export type GetCategoryBctResponse = BusinessCompanyType[]

export async function getCategoryBct() {
	const { data } = await api.get<GetCategoryBctResponse>("/category/bct")
	return data
}

export function useCategoryBct(useQueryOptions?: UseQueryOptions<GetCategoryBctResponse, unknown>) {
	return useQuery<GetCategoryBctResponse>(["company-type"], getCategoryBct, {
		...useQueryOptions,
	})
}
