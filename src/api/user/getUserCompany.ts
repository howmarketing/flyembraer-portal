import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

type GetUserCompanyProps = string

export async function GetUserCompany(embCompanyCode: GetUserCompanyProps) {
	const { data } = await api.get<AllUsers>(`/user/company?embCompanyCode=${embCompanyCode}`)

	return data
}
