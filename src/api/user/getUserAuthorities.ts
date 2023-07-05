import { api } from "services/api"

type GetUserAuthoritiesProps = [
	{
		authority: string
	}
]

export async function GetUserAuthorities() {
	const { data } = await api.get<GetUserAuthoritiesProps>("/user/authorities")

	return data
}
