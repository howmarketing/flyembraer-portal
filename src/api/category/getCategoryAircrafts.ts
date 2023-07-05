import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type GetCategoryAircrafts = GetCategoryAircraftsProps[]
export type GetCategoryAircraftsResponse = GetCategoryAircraftsProps[]

type GetCategoryAircraftsProps = {
	displayName?: string
	dn?: string
	cn?: string
}

export async function GetCategoryAircrafts() {
	const { data } = await api.get<GetCategoryAircrafts>("/category/aircraft")
	return data
}

export function useCategoryAircrafts(useQueryOptions?: UseQueryOptions<GetCategoryAircrafts, unknown>) {
	return useQuery<GetCategoryAircrafts>(["companies-aircrafts"], () => GetCategoryAircrafts(), {
		...useQueryOptions,
	})
}
