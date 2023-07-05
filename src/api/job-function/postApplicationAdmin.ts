import { api } from "services/api"

type PostApplicationAdminProps = {
	name: string
	username: string
	userDn: string
	applicationName: string
	applicationDn: string
}

type PostApplicationAdminResponse = {
	id?: number
	username?: string
	userDn?: string
	applicationName?: string
	applicationDn?: string
}

export async function PostApplicationAdmin(props: PostApplicationAdminProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<PostApplicationAdminResponse>(
		"https://portal.dev.flyembraer.com/api/v1/portal/application/admin",
		body,
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
	return data
}
