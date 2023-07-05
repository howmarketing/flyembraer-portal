import { api } from "services/api"

type PostServiceUserProps = {
	userDn: string
	serviceDn: string[]
}

export async function PostServiceUser(props: PostServiceUserProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/service/user", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
