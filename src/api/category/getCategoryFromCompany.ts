import { api } from "services/api"

type GetCategoryFromCompanyProps = string

type GetCategoryResponse = GetCategoryResponseProps[]

type GetCategoryResponseProps = {
	bct: string
	market: string
	aircraft: string
	embCategoryID: string
}

export async function GetCategoryFromCompany(embCompanyCode: GetCategoryFromCompanyProps) {
	const { data } = await api.get<GetCategoryResponse>(
		`https://portal.dev.flyembraer.com/api/v1/portal/category/company/${embCompanyCode}`
	)
	return data
}
