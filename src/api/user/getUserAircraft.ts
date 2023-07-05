import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

type GetUserAircraftProps = string

export async function GetUserByAircraftName(aircraft: GetUserAircraftProps) {
	const { data } = await api.get<AllUsers>(`/user/aircraft?=${aircraft}`)

	return data
}
