import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

export async function GetUsers() {
	const { data } = await api.get<AllUsers>("/user")

	return data
}
