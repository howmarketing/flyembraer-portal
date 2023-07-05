import { api } from "services/api"

type GetCategoryProps = string

type GetCategoryResponse = {
	cn?: string
	embCategoryID?: string
	displayName?: string
	description?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
	embServices?: string[]
}

export async function GetCategory(categoryId: GetCategoryProps) {
	const { data } = await api.get<GetCategoryResponse>(`/category/${categoryId}`)
	return data
}
