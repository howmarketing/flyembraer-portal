import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

import type { ServiceApp } from "types/ServiceApp"

type GetServicesFromUserProps = string | null
type GetServicesFromUserResponse = ServiceApp[] | null

export async function getServicesFromUser(userDn?: GetServicesFromUserProps) {
	if (!userDn) {
		return null
	}

	const { data } = await api.get<GetServicesFromUserResponse>(`/service/user?userDn=${userDn}`)

	return data
}

export function useGetServicesFromUser(
	userDn: GetServicesFromUserProps,
	useQueryOptions?: UseQueryOptions<GetServicesFromUserResponse, unknown>
) {
	return useQuery<GetServicesFromUserResponse>(["user-services", userDn], () => getServicesFromUser(userDn), {
		...useQueryOptions,
	})
}
