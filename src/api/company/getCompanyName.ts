import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import { CompanyExistsDTO } from "types/CompanyExistsDTO"

type GetCompanyNameProps = string
type GetCompanyNameResponse = CompanyExistsDTO

export async function getCompanyName(displayName: GetCompanyNameProps) {
	const { data } = await api.get<GetCompanyNameResponse>(`/company/name?displayName=${displayName}`)

	return data
}

export function useGetCompanyName(
	displayName: GetCompanyNameProps,
	useQueryOptions?: UseQueryOptions<GetCompanyNameResponse, unknown>
) {
	return useQuery<GetCompanyNameResponse>(["companies", displayName], () => getCompanyName(displayName), {
		...useQueryOptions,
	})
}
