import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import type { ServiceApp } from "types/ServiceApp"

export type GetJobFunctionsResponse = ServiceApp[]

export async function GetServices() {
	const { data } = await api.get<GetJobFunctionsResponse>("/service")
	return data
}

export function useGetServices(useQueryOptions?: UseQueryOptions<GetJobFunctionsResponse, unknown>) {
	return useQuery<GetJobFunctionsResponse>(["companies-services"], () => GetServices(), {
		...useQueryOptions,
	})
}
