import { api } from "services/api"

type PostServiceProps = {
	cn?: string
	dn?: string
	application_dn?: string
	displayName?: string
	description?: string
	embDisplayRule?: string
}

export async function PostService(props: PostServiceProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/service", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
