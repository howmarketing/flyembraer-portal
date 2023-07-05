import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

export async function GetUserService() {
	const { data } = await api.get<AllUsers>(`/user/service`)

	return data
}
