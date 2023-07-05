import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import type { Company } from "types/Company"

export type GetCompanyUserResponse = Company

export async function getCompanyByUser() {
	const { data } = await api.get<GetCompanyUserResponse>(`/company/user`)

	return data
}

export function useGetCompanyByUser(useQueryOptions?: UseQueryOptions<GetCompanyUserResponse, unknown>) {
	return useQuery<GetCompanyUserResponse>(["companiesByUser"], () => getCompanyByUser(), {
		...useQueryOptions,
	})
}
