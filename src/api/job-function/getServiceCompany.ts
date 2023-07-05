import { UseQueryOptions, useQuery } from "react-query"
import { api } from "services/api"
import { ServiceApp } from "types/ServiceApp"

type GetServiceCompanyProps = string

export async function getServiceCompany(embCompanyCode?: GetServiceCompanyProps) {
	const { data } = await api.get<ServiceApp>(`/service/company?embCompanyCode=${embCompanyCode}`)
	return data
}

export function useGetServiceCompany(
	embCompanyCode?: GetServiceCompanyProps,
	useQueryOptions?: UseQueryOptions<ServiceApp, unknown>
) {
	return useQuery<ServiceApp>(["services-by-company"], () => getServiceCompany(embCompanyCode), {
		...useQueryOptions,
	})
}
