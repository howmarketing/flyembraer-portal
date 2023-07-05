import { api } from "services/api"
import { CompanyDto } from "types/CompanyDTO"

type PostcompanyProps = CompanyDto

type PostCompanyResponse = {
	code?: number
	invalidatedAttributes?: string[]
	user_dn?: string
	embCompanyCode?: string
	dn?: string
	cn?: string
	embCategoryID?: string
}

export async function postCompany(props: PostcompanyProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<PostCompanyResponse>("/company", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
