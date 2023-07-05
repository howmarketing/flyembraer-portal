import { api } from "services/api"

type GetUserCheckProps = {
	dn: string
	cn: string
	email: string
	exsist: boolean
}

type UserCheckUrlPagination = string

export async function GetUserCheck(displayName: UserCheckUrlPagination) {
	const { data } = await api.get<GetUserCheckProps>(`/user/check?displayName=${displayName}`)

	return data
}
