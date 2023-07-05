import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

export type GetCategoryResponse = GetCategoryProps[]

type GetCategoryProps = {
	cn: string
	embCategoryID: string
	displayName: string
	description: string
	embCompanyType: string[]
	embMarket: string[]
	embTypeAirCraft: string[]
	embServices: string[]
}

export async function getAllCategory() {
	const { data } = await api.get<GetCategoryResponse>("/category")
	return data
}

export function useGetAllCategory(useQueryOptions?: UseQueryOptions<GetCategoryResponse, unknown>) {
	return useQuery<GetCategoryResponse>(["categories"], () => getAllCategory(), { ...useQueryOptions })
}
