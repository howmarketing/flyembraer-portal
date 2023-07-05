import { useQuery, UseQueryOptions } from "react-query"

import { api } from "services/api"

import type { PublicLinkDTO } from "types/PublicLinkDTO"

export type PublickLinksResponse = PublicLinkDTO

export async function getPublickLinks() {
	const downloadCenterUrl = process.env.NEXT_PUBLIC_DC_API_URL

	const { data } = await api.get<PublickLinksResponse>(`${downloadCenterUrl}/public-link`)

	return data
}

export function useGetPublickLinks(useQueryOptions?: UseQueryOptions<PublickLinksResponse, unknown>) {
	return useQuery<PublickLinksResponse>(["public-links"], getPublickLinks, {
		cacheTime: 1000 * 60 * 60, // 1 hour
		staleTime: 1000 * 60 * 60,
		...useQueryOptions,
	})
}
