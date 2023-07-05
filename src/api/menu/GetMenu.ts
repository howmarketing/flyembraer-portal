import { useQuery, UseQueryOptions } from "react-query"

import { api } from "services/api"

import type { Menu } from "types/Menu"

type GetMenuProps = string | undefined
export type GetMenuResponse = Menu[] | void

export async function getMenu(userName: GetMenuProps) {
	if (!userName) {
		return
	}

	const { data } = await api.get<GetMenuResponse>(
		`https://portal.dev.flyembraer.com/api/v1/portal/menu?username=${userName}`
	)

	return data
}

export function useGetMenu(userName: GetMenuProps, useQueryOptions?: UseQueryOptions<GetMenuResponse, unknown>) {
	return useQuery<GetMenuResponse>(["menu"], () => getMenu(userName), {
		cacheTime: 1000 * 60 * 60, // 1 hour
		staleTime: 1000 * 60 * 60,
		...useQueryOptions,
	})
}
