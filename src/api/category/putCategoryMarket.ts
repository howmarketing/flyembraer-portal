import { api } from "services/api"

type PutCategoryMarketProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PutCategoryMarket(props: PutCategoryMarketProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<PutCategoryMarketProps>("/category/market", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
