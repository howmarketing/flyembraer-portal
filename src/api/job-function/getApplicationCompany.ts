import { api } from "services/api"
import { Application } from "types/ServiceApp"

type GetAppCompanyrPagination = string

export async function GetApplicationCompany(embCompanyCode: GetAppCompanyrPagination) {
	const { data } = await api.get<Application>(`/application/company?embCompanyCode=${embCompanyCode}`)
	return data
}
