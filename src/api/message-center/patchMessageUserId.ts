import { api } from "services/api"
import { MessageUser } from "types/MessageUser"

type PatchMessageUserIdProps = number

export async function PatchMessageUserId(messageUserId: PatchMessageUserIdProps) {
	const { data } = await api.patch<MessageUser>(`/message/${messageUserId}`)
	return data
}
