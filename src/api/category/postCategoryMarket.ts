import { api } from "services/api"

type PostCategoryProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function postCategoryMarket(props: PostCategoryProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/category/market", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
