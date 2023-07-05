import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

type GetUserBctProps = string

export async function GetUserBct(bct: GetUserBctProps) {
	const { data } = await api.get<AllUsers>(`/user/bct?=${bct}`)

	return data
}
