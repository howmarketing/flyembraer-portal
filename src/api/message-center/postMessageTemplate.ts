import { api } from "services/api"
import { MessageTemplate } from "types/MessageTemplate"

type NewMessageTemplateProps = {
	name: string
	title: string
	htmlMessage: string
	incDate: string
}

export async function postMessageTemplate(props: NewMessageTemplateProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<MessageTemplate>("/message/template", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
