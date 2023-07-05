import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type GetVerifyTokenProps = string | undefined

export type GetVerifyTokenApiResponse =
	| {
			id?: number
			token?: string
			expireTime?: string
			username?: string
			dn?: string
	  }
	| undefined

export async function getVerifyToken(token?: GetVerifyTokenProps) {
	if (!token) {
		return
	}

	const { data } = await api.get<GetVerifyTokenApiResponse>(`/password/token?token=${token}`)

	return data
}

export function useGetVerifyToken(
	token: GetVerifyTokenProps,
	useQueryOptions?: UseQueryOptions<GetVerifyTokenApiResponse, unknown>
) {
	return useQuery<GetVerifyTokenApiResponse>(["token"], () => getVerifyToken(token), {
		...useQueryOptions,
	})
}
