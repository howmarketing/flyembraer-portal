import { api } from "services/api"
import { Email } from "types/Email"

export async function PostEmailMessage(props: Email) {
	const body = JSON.stringify(props)

	const { data } = await api.post<Email>("/email/sendEmail", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
