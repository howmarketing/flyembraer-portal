import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import { Application } from "types/ServiceApp"

export async function GetApplications() {
	const { data } = await api.get<Application>("/application")
	return data
}

export function useGetApplication(useQueryOptions?: UseQueryOptions<Application, unknown>) {
	return useQuery<Application>(["companies-app"], () => GetApplications(), {
		...useQueryOptions,
	})
}
