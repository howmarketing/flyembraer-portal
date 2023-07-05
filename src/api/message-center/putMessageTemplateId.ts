import { api } from "services/api"
import { MessageTemplate } from "types/MessageTemplate"

export type PutMessageTemplateIdProps = {
	name: string
	title: string
	htmlMessage: string
	incDate: string
}

export async function putMessageTemplateId(props: PutMessageTemplateIdProps, messageTemplateId: string) {
	const body = JSON.stringify(props)

	const { data } = await api.put<MessageTemplate>(`/message/template/${messageTemplateId}`, body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
