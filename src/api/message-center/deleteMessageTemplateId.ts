import { api } from "services/api"

type DeleteMessageTemplateIdProps = {
	id: string
}

export async function deleteMessageTemplateId({ id }: DeleteMessageTemplateIdProps) {
	const { data } = await api.delete(`/message/template/${id}`)
	return data
}
