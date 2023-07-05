import { UseQueryOptions, useQuery } from "react-query"
import { api } from "services/api"
import { MessageUser } from "types/MessageUser"

type GetMessageUserIdProps = {
	messageId: string
}

export async function getMessageUserId({ messageId }: GetMessageUserIdProps) {
	const { data } = await api.get<MessageUser>(`/message/${messageId}`)
	return data
}

export function useGetMessageById(
	params: GetMessageUserIdProps,
	useQueryOptions?: UseQueryOptions<MessageUser, unknown>
) {
	return useQuery<MessageUser>(
		[`message-center-message-${params.messageId}`, params],
		() => getMessageUserId(params),
		{
			...useQueryOptions,
		}
	)
}
