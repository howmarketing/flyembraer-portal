import { api } from "services/api"
import { Application } from "types/ServiceApp"

type GetAppUserPagination = string

export async function GetApplicationUser(userDn: GetAppUserPagination) {
	const { data } = await api.get<Application>(`/application/user?userDn=${userDn}`)
	return data
}
