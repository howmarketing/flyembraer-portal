import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type DeleteTokenProps = string | undefined
type DeleteTokenResponse = boolean

export async function deleteToken(token: DeleteTokenProps) {
	if (!token) {
		return
	}

	const { data } = await api.delete<DeleteTokenResponse>(`/password/token?token=${token}`)

	return data
}
