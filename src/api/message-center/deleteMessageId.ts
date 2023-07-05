import { api } from "services/api"

type DeleteMessageIdProps = {
	id: string
}

export async function deleteMessageId({ id }: DeleteMessageIdProps) {
	const { data } = await api.delete(`/message/${id}`)
	return data
}
