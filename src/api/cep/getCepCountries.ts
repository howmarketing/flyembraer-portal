import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import type { GetCepCountries } from "types/Cep"

type GetCepCountryResponse = GetCepCountries[]

export async function GetCepCountry() {
	const { data } = await api.get<GetCepCountryResponse>("/country")
	return data
}

export function useGetCepCountry(useQueryOptions?: UseQueryOptions<GetCepCountryResponse, unknown>) {
	return useQuery<GetCepCountryResponse>(["countries"], GetCepCountry, { ...useQueryOptions })
}
