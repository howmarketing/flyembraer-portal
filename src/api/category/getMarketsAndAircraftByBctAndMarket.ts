import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type GetMarketsAndAircraftByBctAndMarketProps = {
	bct: string
	market?: string
	aircraft?: string
}

export type GetCategoryMarketsResponse = string

export async function getMarketsAndAircraftByBctAndMarket({
	bct,
	market,
	aircraft,
}: GetMarketsAndAircraftByBctAndMarketProps) {
	const { data } = await api.get<GetCategoryMarketsResponse>(`/category/${bct}/${market ?? null}/${aircraft ?? null}`)
	return data
}

export function useGetMarketsAndAircraftByBctAndMarket(
	props: GetMarketsAndAircraftByBctAndMarketProps,
	UseQueryOptions?: UseQueryOptions<GetCategoryMarketsResponse, unknown>
) {
	return useQuery<GetCategoryMarketsResponse>(
		["companies-markets", { ...props }],
		() => getMarketsAndAircraftByBctAndMarket(props),
		{
			...UseQueryOptions,
		}
	)
}
