import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import { Profile } from "types/Profile"

type GetProfilesResponse = Profile[]

export async function getProfiles() {
	const { data } = await api.get<GetProfilesResponse>("/profile/code")
	return data
}

export function useGetProfiles(useQueryOptions?: UseQueryOptions<GetProfilesResponse, unknown>) {
	return useQuery<GetProfilesResponse>(["profiles"], () => getProfiles(), {
		...useQueryOptions,
	})
}
