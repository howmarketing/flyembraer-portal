import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import { IProfileResponse } from "types/ApiProfile"

export type GetProfileResponse = IProfileResponse

export async function getProfile() {
	const { data } = await api.get<GetProfileResponse>("https://sonarqube.dev.flyembraer.com/api/v1/portal/profile")
	return data
}

export function useGetProfile(useQueryOptions?: UseQueryOptions<GetProfileResponse, unknown>) {
	return useQuery<GetProfileResponse>(["user-profile"], () => getProfile(), {
		...useQueryOptions,
	})
}
