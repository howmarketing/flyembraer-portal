import { useQuery, UseQueryOptions } from "react-query"

import qs from "qs"

import { api } from "services/api"

type GetUsersPasswordProps = {
	dn?: string
	cn?: string
	email?: string
	password?: string
	username?: string | null
}

type GetUsersPasswordResponse = {
	dn?: string
	cn?: string
	displayName?: string
	email?: string
}[]

export async function getUsersPassword(props: GetUsersPasswordProps) {
	const UrlObject = JSON.parse(JSON.stringify(props))
	const query = new URLSearchParams(UrlObject).toString()

	const { data } = await api.get<GetUsersPasswordResponse>(`/password?${query}`)

	return data
}

export const useGetUsersPassword = (
	props: GetUsersPasswordProps,
	useQueryOptions?: UseQueryOptions<GetUsersPasswordResponse, unknown>
) => {
	return useQuery<GetUsersPasswordResponse>(["forgot-user-data", { id: props.cn }], () => getUsersPassword(props), {
		cacheTime: 1000 * 60, // 1 min
		staleTime: 1000 * 60, // 1 min
		...useQueryOptions,
	})
}
