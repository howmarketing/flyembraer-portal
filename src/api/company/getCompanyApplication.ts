import { api } from "services/api"
import { Company } from "types/CompanyDTO"

type GetCompanyAppProps = string

type GetCompanyAppResponse = Company[]

export async function GetCompanyApp(embCompanyResource: GetCompanyAppProps) {
	const { data } = await api.get<GetCompanyAppResponse>(
		`/company/application?embCompanyResource=${embCompanyResource}`
	)

	return data
}
