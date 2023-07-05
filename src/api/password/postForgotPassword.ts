import { api } from "services/api"

type GetForgotPasswordProps = {
	username: string | null
	email: string | null
}

type GetForgotPasswordResponse = string | undefined

export async function postForgotPassword(params: GetForgotPasswordProps) {
	if (!params.username && !params.email) {
		return
	}

	const { username, email } = params

	const queryParams: Record<string, string> = {}

	if (email !== null) {
		queryParams.email = email
	}

	if (username !== null) {
		queryParams.username = username
	}

	const body = JSON.stringify(queryParams)

	const { data } = await api.post<GetForgotPasswordResponse>(`/password/forgot`, body, {
		headers: {
			"Content-Type": "application/json",
		},
	})

	return data
}
