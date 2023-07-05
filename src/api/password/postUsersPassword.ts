import { api } from "services/api"

export type PostUserPasswordProps = {
	cn?: string
	dn?: string
	email?: string
	password?: string
	username?: string
}

export type PostUsersPasswordResponse = {
	code?: number
	invalidatedAttributes?: string[]
	user_dn?: string
	embCompanyCode?: string
	dn?: string
	cn?: string
	embCategoryID?: string
}

export async function postUsersPassword(props: PostUserPasswordProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<PostUsersPasswordResponse>("password", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
