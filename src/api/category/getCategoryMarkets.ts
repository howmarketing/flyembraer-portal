import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type GetCategoryMarketsProps = {
	dn?: string
	cn?: string
	displayName?: string
	description?: string
}

export type GetCategoryMarketsResponse = GetCategoryMarketsProps[]

export async function getCategoryMarket() {
	const { data } = await api.get<GetCategoryMarketsResponse>("/category/market")
	return data
}

export function useCategoryMarket(UseQueryOptions?: UseQueryOptions<GetCategoryMarketsResponse, unknown>) {
	return useQuery<GetCategoryMarketsResponse>(["companies-markets"], getCategoryMarket, {
		...UseQueryOptions,
	})
}
