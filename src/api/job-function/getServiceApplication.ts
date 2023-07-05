import { api } from "services/api"
import { ServiceApp } from "types/ServiceApp"

type GetServiceApplicationPagination = string

export async function GetServiceApplication(applicationDn: GetServiceApplicationPagination) {
	const { data } = await api.get<ServiceApp>(`/service/application?applicationDn=${applicationDn}`)
	return data
}
